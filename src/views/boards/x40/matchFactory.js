const createBase = (obj) => {
    obj.players = ['local', 'local']
    obj.clickable = []
    obj.currentPlayer = 0
    obj.gameMoves = []
    obj.gameState = 'start'
    obj.ghosts = []
    obj.guns = []
    obj.highlights = []
    obj.pieces = {}
    obj.playerMoves = [0, 0]
    obj.playerPieces = [[], []]
    obj.hint = ""
    obj.selected = ''
    obj.simQueue = []
    obj.winner = null
    obj.started = false
    return obj
}

export default {
    create (opponent) {
        let match = Object.assign({
            players: ['local', 'local'],
            clickable: [],
            currentPlayer: 0,
            gameMoves: [],
            gameState: 'start',
            ghosts: [],
            guns: [],
            highlights: [],
            pieces: {},
            playerMoves: [0, 0],
            playerPieces: [[], []],
            hint: "",
            selected: '',
            simQueue: [],
            winner: null,
            started: !1
        }, { matchId: opponent.type + Date.now()})
        if (opponent.type === 'ai') {
            let randIndex = Math.floor(Math.random() * 2)
            match.players[Number(!randIndex)] = 'ai'
        }

        return match
    },
    load (match) {
        if (!match.matchId) match.matchId = Date.now()
        return Object.assign({
            players: ['local', 'local'],
            clickable: [],
            currentPlayer: 0,
            gameMoves: [],
            gameState: 'start',
            ghosts: [],
            guns: [],
            highlights: [],
            pieces: {},
            playerMoves: [0, 0],
            playerPieces: [[], []],
            hint: "",
            selected: '',
            simQueue: [],
            winner: null,
            started: !1
        }, match)
    }
}