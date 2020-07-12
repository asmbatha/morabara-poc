<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs6>
                <v-card
                    :flat="match.currentPlayer !== 0"
                    :raised="match.currentPlayer == 0"
                >
                    <svg viewBox="0 0 72 6">
                        <template v-for="i in 12">
                            <circle
                                :key="`player-1-piece-${i}`" 
                                :cx="(i * 6) - 3" 
                                :cy="3" 
                                r="2"
                                :class="['player1', getClass(0, i)]"
                            />
                        </template>
                    </svg>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card
                    :flat="match.currentPlayer !== 1"
                    :raised="match.currentPlayer == 1"
                >
                    <svg viewBox="0 0 72 6">
                        <template v-for="i in 12">
                            <circle
                                :key="`player-1-piece-${i}`" 
                                :cx="(i * 6) - 3" 
                                :cy="3" 
                                r="2"
                                :class="['player2', getClass(1, i)]"
                            />
                        </template>
                    </svg>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['match'],
    methods: {
        getClass (player, num) {
            let playerMoves = this.match.playerMoves[player]
            let taken = Math.min(playerMoves, 12) - this.match.playerPieces[player].length

            if(num <= taken) return 'taken'
            if(num <= playerMoves) return 'inplay'
            return 'inhand'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/_variables.scss";

    svg {
        width: 100%;
        padding: 5px;
    }

    .player1 {
        &.inplay {
            fill: $player1
        }
        &.inhand {
            fill: grayscale($player1)
        }
        &.taken {
            fill: darken($player1, 30%)
        }
    }
    .player2 {
        &.inplay {
            fill: $player2
        }
        &.inhand {
            fill: grayscale($player2)
        }
        &.taken {
            fill: darken($player2, 30%)
        }
    }

</style>
