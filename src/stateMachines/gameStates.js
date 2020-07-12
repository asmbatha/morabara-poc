const GAME_STATES = {
    start: {
        views: ['loading'],
        _on: {
            PLAY (matchMachine = {}) {
                if (matchMachine.matchStarted) {
                    this.changeStateTo('play')
                } else {
                    this.logWarning({
                        message: 'Match machine has not been started. Changing state to `selectOpponent`',
                        debug: matchMachine
                    })
                    this.changeStateTo('selectOpponent')
                }
            },
            SELECT_OPPONENT () {
                this.changeStateTo('selectOpponent')
            }
        }
    },
    selectOpponent: {
        views: ['selectOpponent'],
        _on: {
            PLAY (matchMachine = {}) {
                if (matchMachine.matchStarted) {
                    this.changeStateTo('play')
                    matchMachine.$emit('PLAY')
                } else {
                    this.logWarning({
                        message: 'Match machine has not been started. Staying in selectOpponent state',
                        debug: matchMachine
                    })
                }
            }
        }
    },
    play: {
        views: [
            'players',
            'hints'
        ],
        _on: {
            CLOSE_MATCH () {
                this.changeStateTo('matchClosed')
            }
        }
    },
    matchClosed: {
        views: [
            'matchResults'
        ],
        _on: {
            PLAY (matchMachine = {}) {
                if (matchMachine.matchStarted) {
                    this.changeStateTo('play')
                } else {
                    this.logWarning({
                        message: 'Match machine has not been started. Changing state to `selectOpponent`',
                        debug: matchMachine
                    })
                    this.changeStateTo('selectOpponent')
                }
            },
            NEW_OPPONENT () {
                this.changeStateTo('selectOpponent')
            },
            CLOSE_GAME () {
                this.changeStateTo('start')
            }
        }
    },
}

export default {
    state: 'start',
    states: GAME_STATES
}