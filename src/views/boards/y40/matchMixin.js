import board from './board'

export default {
    watch: {
        matchStarted: {
            handler (val) {
                if (val) this.$emit('matchStarted')
            },
            immediate: true
        }
    },
    created() {
    },
    computed: {
        currentPlayer () { return this.match.currentPlayer},

        currentPlayerMoves () { return this.match.playerMoves[this.currentPlayer]},
        currentPlayerPieces () { return this.match.playerPieces[this.currentPlayer]},
        currentPlayerType () { return this.match.players[this.currentPlayer]},
        
        opponentPieces () { return this.match.playerPieces[Number(!this.currentPlayer)]},

        guns () { return this.match.guns},
        hint () { return this.match.hint},
        
        matchStarted () { return this.match.started},

        playerMoves () { return this.match.playerMoves},
        highlights () { return this.match.highlights},
        winner () { return this.match.winner},
        selected () { return this.match.selected},
        playerPieces () { return this.match.playerPieces},
        ghosts () { return this.match.ghosts},

        points () { return board.points},
        groups () { return board.groups},
    },
    methods: {
        getMovablePieces () {
            let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
            let empty = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))
            return empty
                    .map(x => this.points[x].connections)
                    .reduce((c, a) => [...c, ...a], [])
                    .filter(x => this.currentPlayerPieces.includes(x))
        },
        checkRows (point) {
            console.log('this.currentPlayerPieces', JSON.stringify(this.currentPlayerPieces))
            let winningGroups = this.groups[point]
            .filter(proup => !proup
                .some(letter => !this.currentPlayerPieces
                    .includes(letter)
                )
            )
            
            console.log('winningGroups', winningGroups)
            if (winningGroups.length) {
                this.match.guns = winningGroups.reduce((c, a) => [...c, ...a], [point])
            }
            
            return !!winningGroups.length
        }
    }
}