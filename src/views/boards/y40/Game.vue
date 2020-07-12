<template>
    <v-container>
        <v-layout v-if="activeComponents.includes('players')">
            <morabaraba-players
                :match="matchMachine.match"
            />
        </v-layout>
        <v-layout v-if="displayInstructions">
            <v-flex>
                <v-alert
                    :value="matchMachine && matchMachine.match && matchMachine.match.hint"
                    color="info"
                    outline
                >
                    {{matchMachine.match.hint}}
                </v-alert>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex align-center xs12>
                <svg viewBox="0 0 400 400">
                    <template v-for="line in lines">
                        <line 
                            :key="`line-${line[0]}-${line[1]}`" 
                            :x1="points[line[0]].coordinates[0]" 
                            :y1="points[line[0]].coordinates[1]" 
                            :x2="points[line[1]].coordinates[0]" 
                            :y2="points[line[1]].coordinates[1]"
                            :data="line.join('')"
                            :class="{
                                ghost: !!ghosts.find(ghost => ghost.letter == line.join('')),
                                highlighted: highlights.includes(line.join(''))
                            }"
                        />
                    </template>
                    <template v-for="(obj, letter) in points">
                        <circle
                            v-show="
                                    !!ghosts.find(ghost => ghost.letter == letter) ||
                                    clickable.includes(letter)
                                "
                            :key="`ghost-${letter}`" 
                            :cx="obj.coordinates[0]" 
                            :cy="obj.coordinates[1]" 
                            :class="ghostClasses(letter)"
                        />
                    </template>
                    <template v-for="(obj, letter) in points">
                        <circle 
                            :key="`point-${letter}`" 
                            @click="handleClick({letter, type: 'point'})" 
                            :cx="obj.coordinates[0]" :cy="obj.coordinates[1]" 
                            r="10" 
                            stroke="black" 
                            stroke-width="3" 
                            fill="grey" 
                            :class="{
                                point: true,
                                selected: selected == letter,
                                highlighted: highlights.includes(letter),
                                player1: currentPlayer == 0,
                                player2: currentPlayer == 1
                            }"
                        />
                    </template>
                    <template v-if="match" v-for="(piece) in pieces">
                        <transition name="fade" :key="`piece-${piece}`">
                            <circle 
                                v-if="piece.position"
                                @click="handleClick({letter: piece.position})"
                                :cx="points[piece.position].coordinates[0]"
                                :cy="points[piece.position].coordinates[1]"
                                r="14"
                                stroke="black"
                                stroke-width="2"
                                :class="{
                                    piece: true,
                                    selected: selected === piece.position,
                                    removable: piece.player !== currentPlayer && highlights.includes(piece.position),
                                    player1: piece.player === 0,
                                    player2: piece.player === 1,
                                    winner: winner !== null && winner == piece.player,
                                    gun: guns.includes(piece.position)
                                }"
                            />
                        </transition>
                    </template>
                </svg>

                <game-options 
                    v-if="showGameOptions"
                    :displayInstructions="displayInstructions"
                    :visible="showGameOptions"
                    @matchOption="matchOptions"
                    @closeGameOptions="showGameOptions = false"
                />
                <game-loading 
                    v-if="activeComponents.includes('loading')"
                    :visible="activeComponents.includes('loading')"
                    :gameName="gameName"
                />
                <select-opponent
                    v-if="activeComponents.includes('selectOpponent')"
                    :visible="activeComponents.includes('selectOpponent')"
                    @opponentSelected="addMatch"
                    />
                <match-results
                    v-if="activeComponents.includes('matchResults')"
                    :visible="activeComponents.includes('matchResults')"
                    :match="matchResults"
                    @newGameAction="newGameAction"
                    />

                <v-fab-transition>
                    <v-btn
                        @click="showGameOptions = !showGameOptions"
                        v-show="gameMachine && gameMachine.state === 'play'"
                        color="info"
                        dark
                        absolute
                        bottom
                        right
                        fab
                        small
                    >
                        <v-icon>menu</v-icon>
                    </v-btn>
                </v-fab-transition>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
import fsmFactory from '@/util/fsmFactory'
import matchFactory from './matchFactory'
import matchMixin from './matchMixin'
import gameStates from '@/stateMachines/gameStates'
import matchStates from '@/stateMachines/matchStates'
import board from './board'
import ai from './ai'
import SelectOpponent from '@/components/SelectOpponent.vue'
import GameLoading from '@/components/GameLoading.vue'
import MatchResults from '@/components/MatchResults.vue'
import MorabarabaPlayers from '@/components/MorabarabaPlayers.vue'
import GameOptions from '@/components/GameOptions.vue'
import { setTimeout } from 'timers';

const pieceIds = ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6", "piece7", "piece8", "piece9", "piece10", "piece11", "piece12", "piece13", "piece14", "piece15", "piece16", "piece17", "piece18", "piece19", "piece20", "piece21", "piece22", "piece23", "piece24"]

export default {
    name: 'game',
    props: ['gameId'],
    components: {
        SelectOpponent,
        GameLoading,
        MatchResults,
        MorabarabaPlayers,
        GameOptions
    },
    data () {
        return {
            dialog: false,
            gameMachine: fsmFactory('game-machine', gameStates),
            matchMachine: {},
            matchResults: {},
            gameName: board.name,
            points: board.points,
            lines: board.lines,
            groups: board.groups,
            matchId: null,
            pieces: {},
            ai,
            displayInstructions: false,
            showGameOptions: false,
            simQue: []
        }
    },
    created () {
    },
    mounted () {
        window.gameMachine = this.gameMachine
        window.matchFactory = matchFactory
        window.simulateMatchMove = this.simulateMatchMove
        setTimeout(this.loadGame, 1000)
    },
    computed: {
        showSelect () {
            return this.activeComponents.includes('selectOpponent')
        },
        activeComponents () {
            return this.gameMachine.currentState.views
        },
        match () {
            return (this.matchMachine || {}).match || {}
        },
        ghosts () {
            return this.match.ghosts || []
        },
        highlights () {
            return this.match.highlights || []
        },
        clickable () {
            return this.match.clickable || []
        },
        currentPlayer () {
            return this.match.currentPlayer || 0
        },
        selected () {
            return this.match.selected || ''
        },
        winner () {
            return this.match.winner
        },
        guns () {
            return this.match.guns
        },
    },
    methods: {
        matchOptions (action) {
            if (action === 'closeMatch') {
            } else if (action === 'saveMatch') {
            } else if (action === 'toggleInstructions') {
                this.displayInstructions = !this.displayInstructions
            }
        },
        newGameAction (action) {
            if (action === 'rematch') { this.rematch() }
            else if (action === 'newgame') { this.gameMachine.$emit('NEW_OPPONENT') }
            else if (action === 'home') { this.router.push('/') }
        },
        rematch () {
            let match = matchFactory.load({players: this.matchMachine.match.players.reverse()})
            this.$store.commit('ADD_MATCH', {...match, board})
            this.$router.push(`/y40/${match.matchId}`)
            console.log('hereasdfsadfsad')
            this.matchId = match.matchId
            this.loadGame()
        },
        addMatch (opponent) {
            let match = matchFactory.create(opponent) 
            this.$store.commit('ADD_MATCH', {...match, board})
            this.$router.push(`/y40/${match.matchId}`)
            this.matchId = match.matchId
            this.loadGame()
        },
        loadGame () {
            if (this.gameId && !this.matchId) this.matchId = this.gameId
            let match = this.$store.state.matches[this.matchId]
            
            if (!match){
                this.$router.push(`/y40`)
                this.gameMachine.$emit('SELECT_OPPONENT')
            } else {
                Vue.set(this, 'matchMachine', fsmFactory('match-machine', {
                    ...matchStates,
                        match: matchFactory.load(match)
                    }, [matchMixin]
                ))

                    
                console.log('setting matchStarted')
                this.matchMachine.$on('matchStarted', () => {                    
                    console.log('matchStarted received')
                    Vue.set(this, 'pieces', this.matchMachine.match.pieces)
                    this.gameMachine.$emit('PLAY', this.matchMachine)
                })
                this.matchMachine.$on('handlePlayer', this.handlePlayer)
                this.matchMachine.$on('setPiece', this.setPiece)
                this.matchMachine.$on('movePiece', this.movePiece)
                this.matchMachine.$on('removePiece', this.removePiece)
                this.matchMachine.$on('matchOver', (results) => {
                    this.matchResults = results
                    this.gameMachine.$emit('CLOSE_MATCH')
                })

                this.matchMachine.$emit('PLAY')
            }
        },
        handlePlayer () {
            if (this.matchMachine.currentPlayerType === 'ai') ai.$emit('PLAY', this.matchMachine)
        },
        simulateMatchMove (_events = []) {
            console.log('_events', _events)
            this.simQue = [...this.simQue, ..._events]
            if (this.matchMachine.currentPlayerType !== 'ai') this.handleClick({letter: this.simQue.shift()})
            if (this.simQue.length) {
                setTimeout(() => {
                    window.requestAnimationFrame(() => this.simulateMatchMove([]))
                }, 1000);
            }
        },
        handleClick (target) {
            target.highlighted = this.highlights.includes(target.letter)
            this.matchMachine.$emit('CLICK', target)
        },
        simulate () {
            let options = this.highlights.filter(x => x.length === 1)
            let max = (options.length - 1);
            let randIndex = Math.floor(Math.random() * max)
            let letter = options[randIndex]
            this.handleClick({letter, simulation: true})
        },
        ghostClasses (letter) {
            let classes = {
                    ghost: true,
                    clickable: this.clickable.includes(letter),
                }

            if (!!this.ghosts.find(ghost => ghost.letter == letter) && !this.clickable.includes(letter)) {
                let player = this.ghosts.find(ghost => ghost.letter == letter).player
                classes[player ? "player2" : "player1"] = true
            } else {
                classes[this.currentPlayer ? "player2" : "player1"] = true
            }
            return classes
        },
        getNewPieceId () {
            return pieceIds.find(id => !Object.keys(this.pieces).includes(id))
        },
        pointToPiecemap (letter) {
            return Object.keys(this.pieces).find(id => this.pieces[id].position === letter)
        },
        setPiece ({player, position}) {
            console.log('should be setting my piece now')
            // Vue.set(this.pieces, this.getNewPieceId(), {position, player})
            this.pieces[this.getNewPieceId()] = {position, player}
        },
        movePiece ({from, to}) {
            // Vue.set(this.pieces[this.pointToPiecemap(from)], 'position', to)
            this.pieces[this.pointToPiecemap(from)].position = to
        },
        removePiece (position) {
            // Vue.delete(this.pieces[this.pointToPiecemap(position)], 'position')
            delete this.pieces[this.pointToPiecemap(position)].position
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/_variables.scss";

    svg {
        width: 100%;
        height: 100%;
        max-width: 500px;
        margin: auto;
        display: block;
    }
    circle {
        cursor: pointer;
    }
    .point {
        fill: #999999;
    }
    .selected, .gun {
        stroke: lime;
    }
    .piece.player1 {
        fill: $player1;
        r: 15;
    }
    .piece.player2 {
        fill: $player2;
        r: 15;
    }
    .player1.removable {
        stroke: $player2;
    }
    .player2.removable {
        stroke: $player1;
    }
    .piece {
        transition: cx .2s, cy .2s;
    }
    .winner {
        animation: blinker 1s linear infinite;
    }
    
    .ghost {
        stroke: rgba(255, 255, 255, .25);
        fill: transparent;
        stroke-width: 2;
        r: 13;
    }

    .ghost.clickable {
        stroke: rgba(255, 255, 255, .3);
        stroke-dasharray: 16;
        opacity: 0.7;
        r: 20;
    }
    .point.highlighted.player1 {stroke: lighten($player1, 5%)}
    .point.highlighted.player2 {stroke: lighten($player2, 5%)}
    .ghost.clickable.player1 {stroke: lighten($player1, 10%)}
    .ghost.clickable.player2 {stroke: lighten($player1, 10%)}
    line {
        stroke-width: 2;
        stroke:rgba(255, 255, 255, 0.1);
    }
    line.ghost {
        stroke-dasharray: 4;
        stroke: rgba(255, 255, 255, 0.3);
    }
    line.highlighted {
        stroke: rgba(255, 255, 255, 0.5);
    }

    @keyframes ghost {
        50% {
            opacity: 0;
        }
        100% {
            stroke-dashoffset: 96;
        }
    }

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }

    @keyframes beat {
        50% {
            r: 18;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
