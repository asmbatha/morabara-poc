<template>
    <v-container>
        <v-layout>
            <v-flex align-center xs12>
                <v-alert v-if="gameState == 'gameover'" :value="true" color="success" >
                    {{ hint }}
                </v-alert>
                <v-alert v-else :value="true" color="info" >
                    Player {{ currentPlayer ? '2' : '1' }} {{ hint }}
                </v-alert>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex align-center xs12>
                <v-btn v-if="gameState == 'gameover'" @click="newGame">
                    new game
                </v-btn>
                <v-btn @click="simulate(true)">
                    sim
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout>

            <v-dialog v-model="selectGame" persistent max-width="290">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Select a game</v-card-title>
                    <v-card-actions>
                        <v-btn v-for="(board, i) in Object.keys(boards)" :key="`selectable-board-${i}`" @click="selectBoard(board)">{{board}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
                            @mouseover="hoveredletter = letter"
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
                    <template v-for="(piece, id) in pieces">
                        <transition name="fade">
                            <circle 
                                v-if="piece.position"
                                :key="`piece-${piece}`"
                                @click="handleClick({letter: piece.position})"
                                @mouseover="hoveredletter = piece.position"
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
                <p>point: {{hoveredletter}} {{currentPlayerMoves}}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

const oriantation = {
	flip:   arr => [2, 1,  0,  5, 4,  3,  8, 7,  6,  14, 13, 12, 11, 10, 9,  17, 16, 15, 20, 19, 18, 23, 22, 21].map(key => arr[key]),
	rotate: arr => [2, 14, 23, 5, 13, 20, 8, 12, 17, 1,  4,  7,  16, 19, 22, 6,  11, 15, 3,  10, 18, 0,  9,  21].map(key => arr[key]),
	invert: arr => [6, 7,  8,  3, 4,  5,  0, 1,  2,  11, 10, 9,  14, 13, 12, 21, 22, 23, 18, 19, 20, 15, 16, 17].map(key => arr[key]),
}
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x']

function getStateId([p1, p2]) {
    const myMap = new Map(letters.map(x => [x, 0]))
    p1.forEach(x => myMap.set(x, 1))
    p2.forEach(x => myMap.set(x, 2))

    let normalRotations = [Array.from(myMap.values())]
    for (let i = 0; i < 3; i++) {
        normalRotations.push(oriantation.rotate(normalRotations[i]))
    }
    let normalFlipedRotations = [oriantation.flip(normalRotations[0])]
    for (let i = 0; i < 3; i++) {
        normalFlipedRotations.push(oriantation.rotate(normalFlipedRotations[i]))
    }
    let invertedRotations = [oriantation.invert(normalRotations[0])]
    for (let i = 0; i < 3; i++) {
        invertedRotations.push(oriantation.rotate(invertedRotations[i]))
    }
    let invertedFlippedRotations = [oriantation.flip(invertedRotations[0])]
    for (let i = 0; i < 3; i++) {
        invertedFlippedRotations.push(oriantation.rotate(invertedFlippedRotations[i]))
    }

    const setId = [
        ...normalRotations,
        ...normalFlipedRotations,
        ...invertedRotations,
        ...invertedFlippedRotations,
    ].map(arr => arr.join('')).sort().shift()
    return setId
}

export default {
    name: 'Morabaraba',
    data () {
        return {
            playerMoves: [0, 0],
            playerPieces: [[], []],
            pieceIds: ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6", "piece7", "piece8", "piece9", "piece10", "piece11", "piece12", "piece13", "piece14", "piece15", "piece16", "piece17", "piece18", "piece19", "piece20", "piece21", "piece22", "piece23", "piece24"],
            pieces: {},
            currentPlayer: 0,
            hint: "",
            winner: null,
            highlights: [],
            clickable: [],
            ghosts: [],
            selected: '',
            gameState: '',
            guns: [],
            selectedBoard: 'zulu',
            selectGame: true,
            gameMoves: [],
            sim: 2,
            simActive: false,
            simMoves: 0,
            simLimit: 0,
            simQueue: [],
            hoveredletter: ''
        }
    },
    mounted() {
    },
    computed: {
        ...mapGetters(['boards']),
        lines () {
            return this.boards[this.selectedBoard].lines
        },
        points () {
            return this.boards[this.selectedBoard].points
        },
        groups () {
            return this.boards[this.selectedBoard].groups
        },
        currentPlayerMoves () {
            return this.playerMoves[this.currentPlayer]
        },
        currentPlayerPieces () {
            return this.playerPieces[this.currentPlayer]
        },
        opponentPieces () {
            return this.playerPieces[Number(!this.currentPlayer)]
        }
    },
    watch: {
        gameMoves (val) {
            console.log([...val].pop().id)
        },
        gameState (val) {
            this.$nextTick(() => {
                this[val]().enter()
            })
        },
        simMoves (val) {
            if (val >= this.simLimit) {
                this.simActive = false
            }
        }
    },
    methods: {
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
        strategies () {
            if (this.simActive) return false
            if (this.gameState === 'select' && this.currentPlayerPieces.length > 3) {
                return (clickables) => {
                    this.simActive = true
                    this.simLimit = 2
                    let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                    let empty = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))
                    let options = clickables
                        .map(x => this.points[x].connections)
                        .reduce((c, a) => [...c, ...a], [])
                        .filter(x => empty.includes(x))
                    
                    // rank options
                    let rankings = {}
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings[letter] = this.select_getPointRanking(letter)
                    })
                    

                    let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    let moveTo = ''
                    let movefrom = '' 
                    let min = 0
                    if (max) {
                        if (guns.length) {
                            console.log('found gun')
                            let randIndex = Math.floor(Math.random() * (guns.length - 1))
                            moveTo = guns[randIndex]
                        } else {
                            let randIndex = Math.floor(Math.random() * (blocks.length - 1))
                            moveTo = blocks[randIndex]
                        }
                    } else {
                        // find all options that are connected to a gun
                        // where the gun connection is not connected to an oponent piece
                        let connectedToGun = options.map(letter => {
                            // letter connections
                            let connections = this.points[letter].connections.filter(connection => {
                                let groups = this.groups[connection].filter(group => {
                                    return (
                                        group.filter(letter => this.currentPlayerPieces.includes(letter)).length == 2 &&
                                        !this.points[connection].connections.some(x => this.opponentPieces.includes(x))
                                    )
                                })

                                return groups.length
                            })
                            return {
                                from: connections,
                                to: letter
                            }
                        }).filter(pair => pair.from.length)

                        if (connectedToGun.length) {
                            let randIndex = Math.floor(Math.random() * (connectedToGun.length - 1))
                            moveTo = connectedToGun[randIndex].to
                            movefrom = connectedToGun[randIndex].from[0]
                        } else {
                            console.log('Oh no. we didnt know what to do there')
                            let randIndex = Math.floor(Math.random() * (blocks.length - 1))
                            moveTo = blocks[randIndex]
                        }
                    }

                    let connections = this.points[moveTo].connections
                    if (!movefrom) {
                        let groups = this.groups[moveTo]
                        groups = groups.find(group => {
                            // group must have a ranking of max
                            let rank = group.filter(x => this.currentPlayerPieces.includes(x)).length
                            let rank2 = group.filter(x => this.opponentPieces.includes(x)).length
                            // and must have atleast one outlier
                            let outlier = connections.find(x => !group.includes(x) && this.currentPlayerPieces.includes(x))
                            if (outlier && (rank == max || rank2 == max)) {
                                movefrom = outlier
                                return true
                            }
                            return false
                        })
                    }

                    this.simQueue = [{letter: moveTo, simulation: true}]
                    console.log('handleClick::strategies::select', movefrom)
                    this.handleClick({letter: movefrom, simulation: true})

                    // setTimeout(() => {
                    //     this.handleClick({letter: moveTo, simulation: true})
                    // }, 1000)
                    // [movefrom, moveTo].forEach((letter, i) => {
                    //     setTimeout(() => {
                    //         this.handleClick({letter, simulation: true})
                    //     }, 500 + (i * 500))
                    // })
                    // this.simActive = false
                    return true
                }
            }

            if (this.gameState === 'select' && this.currentPlayerPieces.length === 3) {
                return (clickables) => {
                    this.simActive = true
                    this.simLimit = 2
                    let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                    let options = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))

                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.place_getPointRanking(letter),
                                letter
                            })
                    })
                    let groups = Object.values(rankings).map(({best}) => best)
                    let best = false
                    best = groups.find(({guns, blocks}) => guns === 2)
                    // block === 2
                    if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
                    // guns === 1 && blocks === 0
                    if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
                    // guns === 0 && blocks === 1
                    if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

                    if (!best) {
                        let randIndex = Math.floor(Math.random() * (groups.length - 1))
                        best = groups[randIndex]
                    }
                    
                    let bestOption = rankings.filter(({best: {guns, blocks}}) => guns === best.guns && blocks === best.blocks)[0]
                    console.log('rankings', rankings)
                    console.log('bestOption', bestOption)
                    this.simQueue = [{letter: bestOption.letter, simulation: true}]
                    // console.log('handleClick::strategies::select', movefrom)
                    this.handleClick({letter: this.currentPlayerPieces.find(x => !bestOption.group.split('').includes(x)), simulation: true})

                    return true
                }
            }

            if (this.gameState === 'place') {
                return (options) => {
                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.place_getPointRanking(letter),
                                letter
                            })
                    })
                    let groups = Object.values(rankings).map(({best}) => best)
                    let best = false
                    best = groups.find(({guns, blocks}) => guns === 2)
                    // block === 2
                    if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
                    // guns === 1 && blocks === 0
                    if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
                    // guns === 0 && blocks === 1
                    if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

                    if (!best) {
                        let randIndex = Math.floor(Math.random() * (groups.length - 1))
                        best = groups[randIndex]
                    }

                    let bestOption = rankings.filter(({best: {guns, blocks}}) => guns === best.guns && blocks === best.blocks)

                    let supportRanking = ({guns, blocks}) => {
                        // 5 gun == 2
                        if (guns === 2) return 5
                        // 4 block == 2
                        if (blocks === 2) return 4
                        // 3 gun == 1 && block == 0
                        if (guns === 1 && !blocks) return 3
                        // 2 gun == 0 && block == 0
                        if (!guns && !blocks) return 2
                        // 1 block == 1 && gun == 0
                        if (blocks === 1 && !guns) return 1
                        // 0 undefined
                        return 0
                    }

                    // convert bestOptions to support rankings
                    bestOption = bestOption.map(option => {
                        let res = {
                            letter: option.letter,
                            groups: option.groups.map(group => supportRanking(group)).sort((a, b) => b - a)
                        }
                        return res
                    })

                    // support ranking 
                    function cream (options) {
                        let groupMaxes = Math.max(...options.map(({groups}) => groups[0]))
                        let results = [...options]
                            .filter(option => option.groups[0] === groupMaxes)
                            .map(({letter, groups}) => {
                                return {
                                    letter,
                                    groups: groups.filter((x, i) => i)
                                }
                            })

                        let secondary_results = results.filter(option => option.groups.length)
                        if (!secondary_results.length) secondary_results = results
                        if (!secondary_results.length) secondary_results = options
                        return secondary_results
                    }

                    let creamed = cream(bestOption)

                    while(
                        creamed.length !== bestOption.length || 
                        (
                            creamed[0].letter !== bestOption[0].letter || creamed[0].groups.length !== bestOption[0].groups.length
                        )
                    ) {
                        bestOption = creamed
                        creamed = cream(bestOption)
                    }

                    bestOption = creamed
                    
                    let randIndex = Math.floor(Math.random() * (bestOption.length - 1))
                    best = bestOption[randIndex]
                    
                    // let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    // let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    // let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    this.handleClick({letter: best.letter, simulation: true})

                    return true
                }
            }

            if (this.gameState === 'remove') {
                return (options) => {
                    let moveTo = ''
                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.remove_getPointRanking(letter),
                                letter
                            })
                    })

                    let mostPossibilities = Math.max(...rankings.map(({blocks, guns}) => blocks + guns))

                    rankings = rankings.filter(({blocks, guns}) => mostPossibilities === blocks + guns)

                    let mostGuns = Math.max(...rankings.map(({guns}) => guns))
                    let mostGunsRanking = rankings.filter(({guns}) => mostGuns === guns)

                    let randIndex = Math.floor(Math.random() * (mostGunsRanking.length - 1))
                    let best = mostGunsRanking[randIndex]
                    
                    // let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    // let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    // let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    console.log('handleClick::strategies::/remove', best.letter)
                    this.handleClick({letter: best.letter, simulation: true})

                    return true
                }
            }
            return false
        },
        simulate (force) {
            let options = this.highlights.filter(x => x.length === 1)
            let min = 0;
            let max = (options.length - 1);
            let randIndex = Math.floor(Math.random() * (max - min)) + min
            let letter = options[randIndex]
            let strategy = this.strategies()
            let strategyResult = false
            if (strategy) {
                strategyResult = strategy(options)
            }

            if (!strategyResult) {
                console.log('handleClick::simulate', letter)
                this.handleClick({letter, simulation: true})
            }

        },
        simCheck (from = '') {
            if (this.simQueue.length) {
                console.log('this.simQueue', JSON.stringify(this.simQueue))
                setTimeout(() => {
                    let letter = this.simQueue[0]
                    this.simQueue = this.simQueue.filter((x, i) => i)
                    console.log(`handleClick::simCheck(${from})`, letter)
                    this.handleClick(letter)
                }, 1000)
            } else if (this.sim === this.currentPlayer && !this.simActive) {
                setTimeout(() => {
                    this.simulate()
                }, 1000)
            }
        },
        getNewPieceId () {
            return this.pieceIds.find(id => !Object.keys(this.pieces).includes(id))
        },
        setPiece ({player, position}) {
            Vue.set(this.pieces, this.getNewPieceId(), {position, player})
        },
        movePiece ({from, to}) {
            Vue.set(this.pieces[this.pointToPiecemap(from)], 'position', to)
        },
        removePiece (position) {
            Vue.delete(this.pieces[this.pointToPiecemap(position)], 'position')
        },
        pointToPiecemap (letter) {
            return Object.keys(this.pieces).find(id => this.pieces[id].position === letter)
        },
        start () {
            return {
                enter: () => {
                    this.guns = []
                    if (this.currentPlayerMoves < 12) {
                        this.gameState = 'place'
                    } else {
                        // : select
                        this.gameState = 'select'
                    }
                }
            }
        },
        place () {
            return {
                enter: () => {
                    // message: place a piece
                    this.hint = ' place a piece in one of the highlighted points'
                    // highlight all empty points
                    let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                    this.highlights = Object.keys(this.points)
                                        .filter(x => !occupied.includes(x))

                    this.simCheck('place')
                },
                onclick: ({letter, highlighted}) => {
                    // warn if target is not highlited
                    if (!highlighted) {
                        return this.hint = ', should we hide the other points so you can see which ones are highlited?'
                    }
                    this.playerPieces[this.currentPlayer].push(letter)
                    this.ghosts = [{letter, player: this.currentPlayer}]
                    this.setPiece({player: this.currentPlayer, position: letter})
                    // if checkRows
                    if (this.checkRows(letter)) {
                        // ? remove
                        this.gameState = 'remove'
                    } else {
                        // : reset
                        this.gameState = 'reset'
                    }
                    this.gameMoves.push({
                        player: this.currentPlayer,
                        action: 'place',
                        letters: [letter],
                        id: getStateId(this.playerPieces)
                    })
                }
            }
        },
        getMovablePieces () {
            let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
            let empty = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))
            return empty
                    .map(x => this.points[x].connections)
                    .reduce((c, a) => [...c, ...a], [])
                    .filter(x => this.currentPlayerPieces.includes(x))
        },
        select () {
            return {
                enter: () => {
                    // message: please select a piece to move
                    this.hint = ' please select a piece to move'
                    // highlight all players movable pieaces
                    let movablePieces = this.getMovablePieces()
                    if (this.currentPlayerPieces.length > 3) {
                        this.clickable = this.highlights = movablePieces
                    } else {
                        this.clickable = this.highlights = this.currentPlayerPieces
                    }
                    if (!this.highlights.length) {
                        // this player loses
                        this.hint = `Player ${!this.currentPlayer ? 2 : 1} wins`
                        this.winner = Number(!this.currentPlayer)
                        this.gameState = 'gameover'
                    } else {
                        this.simCheck('select')
                    }
                },
                onclick: ({letter, highlighted}) => {
                    // warn if target is not highlighted
                    if (!highlighted) {
                        return this.hint = ', should we hide the other points so you can see which ones are highlited?'
                    } else {
                        
                    }
                    // mark as selected && move
                    this.selected = letter
                    this.gameState = 'move'
                }
            }
        },
        move ()  {
            return {
                enter: () => {
                    // message: place a piece
                    this.hint = ' select a point to move to'
                    // highlight all empty points
                    let highlights

                    if (this.currentPlayerPieces.length > 3) {
                        let occupied = [...this.playerPieces[0], ...this.playerPieces[1]]

                        highlights = this.points[this.selected].connections.filter(x => !occupied.includes(x))
                    } else {
                        let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                        highlights = Object.keys(this.points)
                                            .filter(x => !occupied.includes(x))
                    }
                    let lines = highlights.map(x => [x, this.selected].sort().join(''))
                    this.highlights = [...highlights, ...lines]

                    this.simCheck('move')
                },
                onclick: ({letter, highlighted}) => {
                    // warn if target is not highlited
                    if (!highlighted) {
                        if (this.selected == letter) {
                            this.selected = ''
                            this.gameState = 'select'
                        } else if (this.getMovablePieces().includes(letter)) {
                            this.selected = letter
                            this.move().enter()
                        }
                        return
                    }
                    Vue.set(this.playerPieces, this.currentPlayer, this.playerPieces[this.currentPlayer].filter(x => x !== this.selected))
                    this.playerPieces[this.currentPlayer].push(letter)
                    this.movePiece ({from: this.selected, to: letter})
                    let pair = [letter, this.selected]
                    this.ghosts = [...pair.map(letter => ({letter, player: this.currentPlayer})), {letter: pair.sort().join(''), player: this.currentPlayer}]
                    this.gameMoves.push({
                        player: this.currentPlayer,
                        action: 'move',
                        letters: [this.selected, letter],
                        id: getStateId(this.playerPieces)
                    })
                    this.selected = ''
                    // if checkRows
                    if (this.checkRows(letter)) {
                        // ? remove
                        this.gameState = 'remove'
                    } else {
                        // : reset
                        this.gameState = 'reset'
                    }

                }
            }
        },
        remove () {
            return {
                enter: () => {
                    // message: select an opponents piece to remove
                    this.hint = ' select an opponents piece to remove'
                    // highlight all opponents
                    let options = this.opponentPieces
                    let cleared = []
                    options.forEach((letter) => {
                        if (!cleared.includes(letter)) {

                            let groups = this.groups[letter]
                            groups.forEach(group => {
                                let gun = group.filter(x => options.includes(x)).length == 2
                                if (gun) cleared = [...new Set([...cleared, ...group, letter])]
                            })
                        }
                    })
                    let filtered = options.filter(x => !cleared.includes(x))

                    this.clickable = this.highlights = filtered.length ? filtered : options
                    if (this.playerMoves[Number(!this.currentPlayer)] >= 12 && this.opponentPieces.length <= 3) {
                        //player wins 
                        this.hint = `Player ${this.currentPlayer ? 2 : 1} wins`
                        this.winner = Number(!this.currentPlayer)
                        this.gameState = 'gameover'
                    } else {
                        this.simCheck('enter')
                    }
                },
                onclick: ({letter, highlighted}) => {
                    // warn if target is not highlited
                    if (!highlighted) {
                        return this.hint = ', should we hide the other points so you can see which ones are highlited?'
                    }
                    // reset
                    Vue.set(this.playerPieces, Number(!this.currentPlayer), this.playerPieces[Number(!this.currentPlayer)].filter(x => x !== letter))
                    this.ghosts.push({letter, player: Number(!this.currentPlayer)})
                    this.removePiece(letter)
                    this.gameState = 'reset'

                    this.gameMoves.push({
                        player: this.currentPlayer,
                        action: 'remove',
                        letters: [letter],
                        id: getStateId(this.playerPieces)
                    })
                }
            }

        },
        gameover () {
            return {
                enter: () => {
                    this.highlights = []
                    this.selectGame = true
                },
                onclick: () => {
                    this.newGame()
                }
            }
        },
        reset () {
            return {
                enter: () => {
                    this.simMoves = 0
                    ++this.playerMoves[this.currentPlayer]
                    this.currentPlayer = Number(!this.currentPlayer)
                    this.clickable = this.highlights = []
                    this.gameState = 'start'
                },
            }
        },
        newGame () {
            this.playerMoves = [0, 0]
            this.playerPieces = [[], []]
            this.currentPlayer = 0
            this.hint = ""
            this.winner = null
            this.highlights = []
            this.gameState = ''
            this.selected = ''
            this.guns = []
            this.ghosts = []
            this.gameState = 'start'
            this.pieces = {}
        },
        handleClick (target) {
            target.highlighted = this.highlights.includes(target.letter)
            this[this.gameState]().onclick(target)
        },
        checkRows (point) {
            let winningGroups = this.groups[point]
                        .filter(proup => !proup
                            .some(letter => !this.currentPlayerPieces
                                .includes(letter)
                            )
                        )
            if (winningGroups.length) {
                this.guns = winningGroups.reduce((c, a) => [...c, ...a], [point])
            }
            
            return !!winningGroups.length
        },
        select_getPointRanking (point) {
            let connections = this.points[point].connections
            let gun = Math.max(
                ...this.groups[point].filter(group => {
                    let survivers = connections.filter(x => !group.includes(x))
                    // check if any survivers are the currentplayers pieces
                    return survivers.some(x => this.currentPlayerPieces.includes(x))
                }).map(
                    group => group.filter(
                        letter => this.currentPlayerPieces.includes(letter)
                    ).length
                )
            )

            let block = Math.max(
                ...this.groups[point].filter(group => {
                    let survivers = connections.filter(x => !group.includes(x))
                    // check if any survivers are the currentplayers pieces
                    return survivers.some(x => this.currentPlayerPieces.includes(x)) && survivers.some(x => this.opponentPieces.includes(x))
                }).map(
                    group => group.filter(
                        letter => this.opponentPieces.includes(letter)
                    ).length
                )
            )

            return {
                type: gun >= block ? 'gun' : 'block',
                value: Math.max(gun, block)
            }
        },
        place_getPointRanking (point) {

            let groups = this.groups[point].map(group => {
                return {
                    guns: group.filter(
                            letter => this.currentPlayerPieces.includes(letter)
                        ).length,
                    blocks: group.filter(
                            letter => this.opponentPieces.includes(letter)
                        ).length,
                    group: group.join('')
                }
            })
            let best = false
            
            // find the best group
            // guns === 2
            best = groups.find(({guns, blocks}) => guns === 2)
            // block === 2
            if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
            // guns === 1 && blocks === 0
            if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
            // guns === 0 && blocks === 1
            if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

            if (!best) {
                let randIndex = Math.floor(Math.random() * (groups.length - 1))
                best = groups[randIndex]
            }

            return {best, groups}
        },
        remove_getPointRanking (point) {

            let groups = this.groups[point].map(group => {
                return {
                    guns: group.filter(
                            letter => this.currentPlayerPieces.includes(letter)
                        ).length,
                    blocks: group.filter(
                            letter => this.opponentPieces.includes(letter)
                        ).length,
                    group: group.join('')
                }
            })
            
            return {
                groups,
                guns: groups.filter(x => x.guns).length,
                blocks: groups.filter(x => x.blocks).length,
            }
        },
        selectBoard (board) {
            this.selectedBoard = board
            this.selectGame = false
            this.newGame()
        }
    }
}
</script>

<style>
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
        fill: deeppink;
        r: 15;
    }
    .piece.player2 {
        fill: dodgerblue;
        r: 15;
    }
    .player1.removable {
        stroke: dodgerblue;
    }
    .player2.removable {
        stroke: deeppink;
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
    .point.highlighted.player1 {stroke: #8a0049}
    .point.highlighted.player2 {stroke: #004285}
    .ghost.clickable.player1 {stroke: rgba(255, 20, 147, 0.6)}
    .ghost.clickable.player2 {stroke: rgba(30, 144, 255, 0.6)}
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