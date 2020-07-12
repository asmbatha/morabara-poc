<template>
    <v-bottom-sheet v-model="visible" persistent inset>
        <v-card tile>
            <v-card-title primary-title>
                <div class="headline">{{matchResult}}</div>
            </v-card-title>
            <v-card-text grid-list-xl>
                <div>
                    Choose your game
                </div>
                <v-container grid-list-xs style="padding: 0">
                    <v-layout row wrap>
                        <v-flex xs12 sm4>
                            <v-btn @click="newGame('rematch')" block color="primary" dark>
                                Rematch
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-btn @click="newGame('newgame')" block color="primary" dark>
                                New Game
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-btn @click="newGame('home')" block color="primary" dark>
                                Home
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<script>
export default {
    props: ['visible', 'match'],
    data () {
        return {matchResult: ''}
    },
    mounted() {
        this.matchResult = this.resultText()
    },
    methods: {
        newGame (action) {
            this.$emit('newGameAction', action)
        },
        resultText () {
            if (Number.isInteger(this.match.winner)) {
                if (this.match.players.some((x) => x === 'ai')) {
                    return `${this.match.players[this.match.winner]} won the match`
                }
                return `Player ${this.match.winner + 1} won the match`
            }
            return 'Match ended in a draw'
        }
    }
}
</script>

<style>

</style>
