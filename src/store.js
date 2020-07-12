import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        matches: {
            ai1554817304574: {
                "players": ["ai", "local"],
                "clickable": ["a", "v", "g"],
                "currentPlayer": 0,
                "gameMoves": [
                        {
                        "player": 0,
                        "action": "place",
                        "letters": ["c"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["b"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["i"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["g"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["h"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["e"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["u"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["n"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["r"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["x"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["p"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["o"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["f"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["m"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["f"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["q"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["s"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["v"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["t"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["v"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["v"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["w"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["a"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["d"]
                    }
                ],
                "gameState": "start",
                "ghosts": [{
                    "letter": "d",
                    "player": 1
                }],
                "guns": [],
                "highlights": ["a", "v", "g"],
                "pieces": {
                    "piece1": {
                        "position": "c",
                        "player": 0
                    },
                    "piece2": {
                        "position": "b",
                        "player": 1
                    },
                    "piece3": {
                        "position": "i",
                        "player": 0
                    },
                    "piece4": {
                        "player": 1
                    },
                    "piece5": {
                        "position": "g",
                        "player": 0
                    },
                    "piece6": {
                        "position": "h",
                        "player": 1
                    },
                    "piece7": {
                        "position": "e",
                        "player": 0
                    },
                    "piece8": {
                        "position": "u",
                        "player": 1
                    },
                    "piece9": {
                        "position": "n",
                        "player": 0
                    },
                    "piece10": {
                        "position": "r",
                        "player": 1
                    },
                    "piece11": {
                        "position": "x",
                        "player": 0
                    },
                    "piece12": {
                        "position": "p",
                        "player": 1
                    },
                    "piece13": {
                        "position": "o",
                        "player": 0
                    },
                    "piece14": {
                        "player": 1
                    },
                    "piece15": {
                        "position": "m",
                        "player": 0
                    },
                    "piece16": {
                        "position": "f",
                        "player": 1
                    },
                    "piece17": {
                        "position": "q",
                        "player": 0
                    },
                    "piece18": {
                        "position": "s",
                        "player": 1
                    },
                    "piece19": {
                        "player": 0
                    },
                    "piece20": {
                        "position": "t",
                        "player": 1
                    },
                    "piece21": {
                        "position": "v",
                        "player": 0
                    },
                    "piece22": {
                        "position": "w",
                        "player": 1
                    },
                    "piece23": {
                        "position": "a",
                        "player": 0
                    },
                    "piece24": {
                        "position": "d",
                        "player": 1
                    }
                },
                "playerMoves": [12, 12],
                "playerPieces": [
                    ["c", "i", "g", "e", "n", "x", "o", "m", "q", "v", "a"],
                    ["b", "h", "u", "r", "p", "f", "s", "t", "w", "d"]
                ],
                "hint": " please select a piece to move",
                "selected": "",
                "simQueue": [],
                "winner": null,
                "started": false,
                "matchId": "ai1554817304574",
                "board": {
                    "name": "uMlabalaba / 12 man's morris",
                    "points": {
                        "a": {
                            "coordinates": [50, 50],
                            "connections": ["b", "d", "j"]
                        },
                        "b": {
                            "coordinates": [200, 50],
                            "connections": ["a", "c", "e"]
                        },
                        "c": {
                            "coordinates": [350, 50],
                            "connections": ["b", "f", "o"]
                        },
                        "d": {
                            "coordinates": [100, 100],
                            "connections": ["a", "e", "g", "k"]
                        },
                        "e": {
                            "coordinates": [200, 100],
                            "connections": ["b", "d", "f", "h"]
                        },
                        "f": {
                            "coordinates": [300, 100],
                            "connections": ["e", "c", "i", "n"]
                        },
                        "g": {
                            "coordinates": [150, 150],
                            "connections": ["d", "h", "l"]
                        },
                        "h": {
                            "coordinates": [200, 150],
                            "connections": ["e", "g", "i"]
                        },
                        "i": {
                            "coordinates": [250, 150],
                            "connections": ["f", "h", "m"]
                        },
                        "j": {
                            "coordinates": [50, 200],
                            "connections": ["a", "k", "v"]
                        },
                        "k": {
                            "coordinates": [100, 200],
                            "connections": ["j", "l", "s", "d"]
                        },
                        "l": {
                            "coordinates": [150, 200],
                            "connections": ["k", "g", "p"]
                        },
                        "m": {
                            "coordinates": [250, 200],
                            "connections": ["n", "r", "i"]
                        },
                        "n": {
                            "coordinates": [300, 200],
                            "connections": ["f", "m", "o", "u"]
                        },
                        "o": {
                            "coordinates": [350, 200],
                            "connections": ["n", "x", "c"]
                        },
                        "p": {
                            "coordinates": [150, 250],
                            "connections": ["q", "l", "s"]
                        },
                        "q": {
                            "coordinates": [200, 250],
                            "connections": ["p", "r", "t"]
                        },
                        "r": {
                            "coordinates": [250, 250],
                            "connections": ["q", "m", "u"]
                        },
                        "s": {
                            "coordinates": [100, 300],
                            "connections": ["t", "k", "p", "v"]
                        },
                        "t": {
                            "coordinates": [200, 300],
                            "connections": ["s", "u", "w", "q"]
                        },
                        "u": {
                            "coordinates": [300, 300],
                            "connections": ["t", "x", "n", "r"]
                        },
                        "v": {
                            "coordinates": [50, 350],
                            "connections": ["w", "j", "s"]
                        },
                        "w": {
                            "coordinates": [200, 350],
                            "connections": ["v", "x", "t"]
                        },
                        "x": {
                            "coordinates": [350, 350],
                            "connections": ["w", "o", "u"]
                        }
                    },
                    "lines": [
                        ["a", "b"],
                        ["a", "d"],
                        ["a", "j"],
                        ["b", "c"],
                        ["b", "e"],
                        ["c", "f"],
                        ["c", "o"],
                        ["d", "e"],
                        ["d", "g"],
                        ["d", "k"],
                        ["e", "f"],
                        ["e", "h"],
                        ["f", "i"],
                        ["f", "n"],
                        ["g", "h"],
                        ["g", "l"],
                        ["h", "i"],
                        ["i", "m"],
                        ["j", "k"],
                        ["j", "v"],
                        ["k", "l"],
                        ["k", "s"],
                        ["l", "p"],
                        ["m", "n"],
                        ["m", "r"],
                        ["n", "o"],
                        ["n", "u"],
                        ["o", "x"],
                        ["p", "q"],
                        ["p", "s"],
                        ["q", "r"],
                        ["q", "t"],
                        ["r", "u"],
                        ["s", "t"],
                        ["s", "v"],
                        ["t", "u"],
                        ["t", "w"],
                        ["u", "x"],
                        ["v", "w"],
                        ["w", "x"]
                    ],
                    "groups": {
                        "a": [
                            ["b", "c"],
                            ["d", "g"],
                            ["j", "v"]
                        ],
                        "b": [
                            ["a", "c"],
                            ["e", "h"]
                        ],
                        "c": [
                            ["a", "b"],
                            ["f", "i"],
                            ["o", "x"]
                        ],
                        "d": [
                            ["e", "f"],
                            ["a", "g"],
                            ["k", "s"]
                        ],
                        "e": [
                            ["d", "f"],
                            ["b", "h"]
                        ],
                        "f": [
                            ["d", "e"],
                            ["c", "i"],
                            ["n", "u"]
                        ],
                        "g": [
                            ["h", "i"],
                            ["a", "d"],
                            ["l", "p"]
                        ],
                        "h": [
                            ["g", "i"],
                            ["b", "e"]
                        ],
                        "i": [
                            ["g", "h"],
                            ["c", "f"],
                            ["m", "r"]
                        ],
                        "j": [
                            ["k", "l"],
                            ["a", "v"]
                        ],
                        "k": [
                            ["j", "l"],
                            ["d", "s"]
                        ],
                        "l": [
                            ["j", "k"],
                            ["g", "p"]
                        ],
                        "m": [
                            ["n", "o"],
                            ["i", "r"]
                        ],
                        "n": [
                            ["m", "o"],
                            ["f", "u"]
                        ],
                        "o": [
                            ["m", "n"],
                            ["c", "x"]
                        ],
                        "p": [
                            ["q", "r"],
                            ["s", "v"],
                            ["g", "l"]
                        ],
                        "q": [
                            ["p", "r"],
                            ["t", "w"]
                        ],
                        "r": [
                            ["p", "q"],
                            ["u", "x"],
                            ["i", "m"]
                        ],
                        "s": [
                            ["t", "u"],
                            ["p", "v"],
                            ["d", "k"]
                        ],
                        "t": [
                            ["s", "u"],
                            ["q", "w"]
                        ],
                        "u": [
                            ["s", "t"],
                            ["r", "x"],
                            ["f", "n"]
                        ],
                        "v": [
                            ["w", "x"],
                            ["p", "s"],
                            ["a", "j"]
                        ],
                        "w": [
                            ["v", "x"],
                            ["q", "t"]
                        ],
                        "x": [
                            ["v", "w"],
                            ["r", "u"],
                            ["c", "o"]
                        ]
                    }
                }
            },
            ai1554234504574: {
                "players": ["local", "ai"],
                "clickable": ["d", "u", "q"],
                "currentPlayer": 0,
                "gameMoves": [
                    {
                        "player": 0,
                        "action": "place",
                        "letters": ["c"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["b"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["i"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["g"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["h"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["e"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["u"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["n"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["r"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["x"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["p"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["o"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["f"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["m"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["f"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["f"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["q"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["s"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["v"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["t"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["v"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["v"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["w"]
                    }, {
                        "player": 0,
                        "action": "place",
                        "letters": ["a"]
                    }, {
                        "player": 1,
                        "action": "place",
                        "letters": ["d"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["a", "j"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["b", "a"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["e", "b"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["h", "e"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["i"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["g", "h"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["d", "g"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["m", "i"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["e", "d"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["i"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["h", "i"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["d", "e"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["i", "m"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["r"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["e", "d"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["q"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["m", "r"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["p", "q"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["r"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["b", "e"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["q", "r"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["e", "b"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["r", "q"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["b"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["j", "k"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["g", "h"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["v", "j"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["h", "g"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["j"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["k", "j"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["g", "l"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["j", "k"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["l", "g"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["k"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["c", "b"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["f", "c"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["n", "f"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["d", "e"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["f", "n"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["e", "d"]
                    }, {
                        "player": 1,
                        "action": "remove",
                        "letters": ["b"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["x", "m"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["c"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["d", "k"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["o", "d"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["g", "l"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["d", "o"]
                    }, {
                        "player": 0,
                        "action": "remove",
                        "letters": ["k"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["l", "k"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["n", "d"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["u", "n"]
                    }, {
                        "player": 0,
                        "action": "move",
                        "letters": ["m", "u"]
                    }, {
                        "player": 1,
                        "action": "move",
                        "letters": ["q", "p"]
                    }
                ],
                "gameState": "start",
                "ghosts": [{
                    "letter": "d",
                    "player": 1
                }],
                "guns": [],
                "highlights": ["d", "u", "q"],
                "pieces": {
                    "piece1": {
                        "player": 0
                    },
                    "piece2": {
                        "position": "a",
                        "player": 1
                    },
                    "piece3": {
                        "player": 0
                    },
                    "piece4": {
                        "player": 1
                    },
                    "piece5": {
                        "player": 0
                    },
                    "piece6": {
                        "player": 1
                    },
                    "piece7": {
                        "player": 0
                    },
                    "piece8": {
                        "position": "n",
                        "player": 1
                    },
                    "piece9": {
                        "position": "d",
                        "player": 0
                    },
                    "piece10": {
                        "player": 1
                    },
                    "piece11": {
                        "position": "u",
                        "player": 0
                    },
                    "piece12": {
                        "position": "p",
                        "player": 1
                    },
                    "piece13": {
                        "position": "o",
                        "player": 0
                    },
                    "piece14": {
                        "player": 1
                    },
                    "piece15": {
                        "player": 0
                    },
                    "piece16": {
                        "player": 1
                    },
                    "piece17": {
                        "player": 0
                    },
                    "piece18": {
                        "position": "s",
                        "player": 1
                    },
                    "piece19": {
                        "player": 0
                    },
                    "piece20": {
                        "position": "t",
                        "player": 1
                    },
                    "piece21": {
                        "player": 0
                    },
                    "piece22": {
                        "position": "w",
                        "player": 1
                    },
                    "piece23": {
                        "player": 0
                    },
                    "piece24": {
                        "position": "k",
                        "player": 1
                    }
                },
                "playerMoves": [34, 33],
                "playerPieces": [
                    ["d", "u", "o"],
                    ["s", "t", "a", "k", "n", "p", "w"]
                ],
                "hint": ", should we hide the other points so you can see which ones are highlited?",
                "selected": "",
                "simQueue": [],
                "winner": null,
                "started": false,
                "matchId": "ai1554234504574",
                "board": {
                    "name": "uMlabalaba / 12 man's morris",
                    "points": {
                        "a": {
                            "coordinates": [50, 50],
                            "connections": ["b", "d", "j"]
                        },
                        "b": {
                            "coordinates": [200, 50],
                            "connections": ["a", "c", "e"]
                        },
                        "c": {
                            "coordinates": [350, 50],
                            "connections": ["b", "f", "o"]
                        },
                        "d": {
                            "coordinates": [100, 100],
                            "connections": ["a", "e", "g", "k"]
                        },
                        "e": {
                            "coordinates": [200, 100],
                            "connections": ["b", "d", "f", "h"]
                        },
                        "f": {
                            "coordinates": [300, 100],
                            "connections": ["e", "c", "i", "n"]
                        },
                        "g": {
                            "coordinates": [150, 150],
                            "connections": ["d", "h", "l"]
                        },
                        "h": {
                            "coordinates": [200, 150],
                            "connections": ["e", "g", "i"]
                        },
                        "i": {
                            "coordinates": [250, 150],
                            "connections": ["f", "h", "m"]
                        },
                        "j": {
                            "coordinates": [50, 200],
                            "connections": ["a", "k", "v"]
                        },
                        "k": {
                            "coordinates": [100, 200],
                            "connections": ["j", "l", "s", "d"]
                        },
                        "l": {
                            "coordinates": [150, 200],
                            "connections": ["k", "g", "p"]
                        },
                        "m": {
                            "coordinates": [250, 200],
                            "connections": ["n", "r", "i"]
                        },
                        "n": {
                            "coordinates": [300, 200],
                            "connections": ["f", "m", "o", "u"]
                        },
                        "o": {
                            "coordinates": [350, 200],
                            "connections": ["n", "x", "c"]
                        },
                        "p": {
                            "coordinates": [150, 250],
                            "connections": ["q", "l", "s"]
                        },
                        "q": {
                            "coordinates": [200, 250],
                            "connections": ["p", "r", "t"]
                        },
                        "r": {
                            "coordinates": [250, 250],
                            "connections": ["q", "m", "u"]
                        },
                        "s": {
                            "coordinates": [100, 300],
                            "connections": ["t", "k", "p", "v"]
                        },
                        "t": {
                            "coordinates": [200, 300],
                            "connections": ["s", "u", "w", "q"]
                        },
                        "u": {
                            "coordinates": [300, 300],
                            "connections": ["t", "x", "n", "r"]
                        },
                        "v": {
                            "coordinates": [50, 350],
                            "connections": ["w", "j", "s"]
                        },
                        "w": {
                            "coordinates": [200, 350],
                            "connections": ["v", "x", "t"]
                        },
                        "x": {
                            "coordinates": [350, 350],
                            "connections": ["w", "o", "u"]
                        }
                    },
                    "lines": [
                        ["a", "b"],
                        ["a", "d"],
                        ["a", "j"],
                        ["b", "c"],
                        ["b", "e"],
                        ["c", "f"],
                        ["c", "o"],
                        ["d", "e"],
                        ["d", "g"],
                        ["d", "k"],
                        ["e", "f"],
                        ["e", "h"],
                        ["f", "i"],
                        ["f", "n"],
                        ["g", "h"],
                        ["g", "l"],
                        ["h", "i"],
                        ["i", "m"],
                        ["j", "k"],
                        ["j", "v"],
                        ["k", "l"],
                        ["k", "s"],
                        ["l", "p"],
                        ["m", "n"],
                        ["m", "r"],
                        ["n", "o"],
                        ["n", "u"],
                        ["o", "x"],
                        ["p", "q"],
                        ["p", "s"],
                        ["q", "r"],
                        ["q", "t"],
                        ["r", "u"],
                        ["s", "t"],
                        ["s", "v"],
                        ["t", "u"],
                        ["t", "w"],
                        ["u", "x"],
                        ["v", "w"],
                        ["w", "x"]
                    ],
                    "groups": {
                        "a": [
                            ["b", "c"],
                            ["d", "g"],
                            ["j", "v"]
                        ],
                        "b": [
                            ["a", "c"],
                            ["e", "h"]
                        ],
                        "c": [
                            ["a", "b"],
                            ["f", "i"],
                            ["o", "x"]
                        ],
                        "d": [
                            ["e", "f"],
                            ["a", "g"],
                            ["k", "s"]
                        ],
                        "e": [
                            ["d", "f"],
                            ["b", "h"]
                        ],
                        "f": [
                            ["d", "e"],
                            ["c", "i"],
                            ["n", "u"]
                        ],
                        "g": [
                            ["h", "i"],
                            ["a", "d"],
                            ["l", "p"]
                        ],
                        "h": [
                            ["g", "i"],
                            ["b", "e"]
                        ],
                        "i": [
                            ["g", "h"],
                            ["c", "f"],
                            ["m", "r"]
                        ],
                        "j": [
                            ["k", "l"],
                            ["a", "v"]
                        ],
                        "k": [
                            ["j", "l"],
                            ["d", "s"]
                        ],
                        "l": [
                            ["j", "k"],
                            ["g", "p"]
                        ],
                        "m": [
                            ["n", "o"],
                            ["i", "r"]
                        ],
                        "n": [
                            ["m", "o"],
                            ["f", "u"]
                        ],
                        "o": [
                            ["m", "n"],
                            ["c", "x"]
                        ],
                        "p": [
                            ["q", "r"],
                            ["s", "v"],
                            ["g", "l"]
                        ],
                        "q": [
                            ["p", "r"],
                            ["t", "w"]
                        ],
                        "r": [
                            ["p", "q"],
                            ["u", "x"],
                            ["i", "m"]
                        ],
                        "s": [
                            ["t", "u"],
                            ["p", "v"],
                            ["d", "k"]
                        ],
                        "t": [
                            ["s", "u"],
                            ["q", "w"]
                        ],
                        "u": [
                            ["s", "t"],
                            ["r", "x"],
                            ["f", "n"]
                        ],
                        "v": [
                            ["w", "x"],
                            ["p", "s"],
                            ["a", "j"]
                        ],
                        "w": [
                            ["v", "x"],
                            ["q", "t"]
                        ],
                        "x": [
                            ["v", "w"],
                            ["r", "u"],
                            ["c", "o"]
                        ]
                    }
                }
            },
            ai1555073125464: {"players":["local","ai"],"clickable":["c","j","l","s","d","t"],"currentPlayer":0,"gameMoves":[{"player":0,"action":"place","letters":["x"]},{"player":1,"action":"place","letters":["o"]},{"player":0,"action":"place","letters":["w"]},{"player":1,"action":"place","letters":["v"]},{"player":0,"action":"place","letters":["r"]},{"player":1,"action":"place","letters":["u"]},{"player":0,"action":"place","letters":["i"]},{"player":1,"action":"place","letters":["m"]},{"player":0,"action":"place","letters":["g"]},{"player":1,"action":"place","letters":["n"]},{"player":1,"action":"remove","letters":["i"]},{"player":0,"action":"place","letters":["p"]},{"player":1,"action":"place","letters":["f"]},{"player":1,"action":"remove","letters":["p"]},{"player":0,"action":"place","letters":["p"]},{"player":1,"action":"place","letters":["q"]},{"player":0,"action":"place","letters":["l"]},{"player":0,"action":"remove","letters":["q"]},{"player":1,"action":"place","letters":["q"]},{"player":0,"action":"place","letters":["d"]},{"player":1,"action":"place","letters":["a"]},{"player":0,"action":"place","letters":["j"]},{"player":1,"action":"place","letters":["k"]},{"player":0,"action":"place","letters":["b"]},{"player":1,"action":"place","letters":["i"]},{"player":0,"action":"place","letters":["c"]},{"player":1,"action":"place","letters":["e"]},{"player":0,"action":"move","letters":["p","s"]},{"player":1,"action":"move","letters":["q","p"]},{"player":0,"action":"move","letters":["r","q"]},{"player":1,"action":"move","letters":["u","r"]},{"player":1,"action":"remove","letters":["w"]},{"player":0,"action":"move","letters":["x","u"]},{"player":1,"action":"move","letters":["e","h"]},{"player":0,"action":"move","letters":["b","e"]},{"player":0,"action":"move","letters":["e","b"]},{"player":1,"action":"move","letters":["f","e"]},{"player":0,"action":"move","letters":["q","t"]},{"player":0,"action":"remove","letters":["k"]},{"player":1,"action":"move","letters":["r","q"]},{"player":0,"action":"move","letters":["u","r"]},{"player":1,"action":"move","letters":["n","u"]}],"gameState":"start","ghosts":[{"letter":"e","player":1},{"letter":"f","player":1},{"letter":"ef","player":1}],"guns":[],"highlights":["c","j","l","s","d","t"],"pieces":{"piece1":{"position":"r","player":0},"piece2":{"position":"o","player":1},"piece3":{"player":0},"piece4":{"position":"v","player":1},"piece5":{"position":"t","player":0},"piece6":{"position":"q","player":1},"piece7":{"player":0},"piece8":{"position":"m","player":1},"piece9":{"position":"g","player":0},"piece10":{"position":"u","player":1},"piece11":{"player":0},"piece12":{"position":"e","player":1},"piece13":{"position":"s","player":0},"piece14":{"player":1},"piece15":{"position":"l","player":0},"piece16":{"position":"p","player":1},"piece17":{"position":"d","player":0},"piece18":{"position":"a","player":1},"piece19":{"position":"j","player":0},"piece20":{"player":1},"piece21":{"position":"b","player":0},"piece22":{"position":"i","player":1},"piece23":{"position":"c","player":0},"piece24":{"position":"h","player":1}},"playerMoves":[19,18],"playerPieces":[["g","l","d","j","c","s","b","t","r"],["o","v","m","a","i","p","h","e","q","u"]],"hint":"select a piece to move","selected":"","simQueue":[],"winner":null,"started":false,"matchId":"ai1555073125464","board":{"name":"uMlabalaba / 12 man's morris","points":{"a":{"coordinates":[50,50],"connections":["b","d","j"]},"b":{"coordinates":[200,50],"connections":["a","c","e"]},"c":{"coordinates":[350,50],"connections":["b","f","o"]},"d":{"coordinates":[100,100],"connections":["a","e","g","k"]},"e":{"coordinates":[200,100],"connections":["b","d","f","h"]},"f":{"coordinates":[300,100],"connections":["e","c","i","n"]},"g":{"coordinates":[150,150],"connections":["d","h","l"]},"h":{"coordinates":[200,150],"connections":["e","g","i"]},"i":{"coordinates":[250,150],"connections":["f","h","m"]},"j":{"coordinates":[50,200],"connections":["a","k","v"]},"k":{"coordinates":[100,200],"connections":["j","l","s","d"]},"l":{"coordinates":[150,200],"connections":["k","g","p"]},"m":{"coordinates":[250,200],"connections":["n","r","i"]},"n":{"coordinates":[300,200],"connections":["f","m","o","u"]},"o":{"coordinates":[350,200],"connections":["n","x","c"]},"p":{"coordinates":[150,250],"connections":["q","l","s"]},"q":{"coordinates":[200,250],"connections":["p","r","t"]},"r":{"coordinates":[250,250],"connections":["q","m","u"]},"s":{"coordinates":[100,300],"connections":["t","k","p","v"]},"t":{"coordinates":[200,300],"connections":["s","u","w","q"]},"u":{"coordinates":[300,300],"connections":["t","x","n","r"]},"v":{"coordinates":[50,350],"connections":["w","j","s"]},"w":{"coordinates":[200,350],"connections":["v","x","t"]},"x":{"coordinates":[350,350],"connections":["w","o","u"]}},"lines":[["a","b"],["a","d"],["a","j"],["b","c"],["b","e"],["c","f"],["c","o"],["d","e"],["d","g"],["d","k"],["e","f"],["e","h"],["f","i"],["f","n"],["g","h"],["g","l"],["h","i"],["i","m"],["j","k"],["j","v"],["k","l"],["k","s"],["l","p"],["m","n"],["m","r"],["n","o"],["n","u"],["o","x"],["p","q"],["p","s"],["q","r"],["q","t"],["r","u"],["s","t"],["s","v"],["t","u"],["t","w"],["u","x"],["v","w"],["w","x"]],"groups":{"a":[["b","c"],["d","g"],["j","v"]],"b":[["a","c"],["e","h"]],"c":[["a","b"],["f","i"],["o","x"]],"d":[["e","f"],["a","g"],["k","s"]],"e":[["d","f"],["b","h"]],"f":[["d","e"],["c","i"],["n","u"]],"g":[["h","i"],["a","d"],["l","p"]],"h":[["g","i"],["b","e"]],"i":[["g","h"],["c","f"],["m","r"]],"j":[["k","l"],["a","v"]],"k":[["j","l"],["d","s"]],"l":[["j","k"],["g","p"]],"m":[["n","o"],["i","r"]],"n":[["m","o"],["f","u"]],"o":[["m","n"],["c","x"]],"p":[["q","r"],["s","v"],["g","l"]],"q":[["p","r"],["t","w"]],"r":[["p","q"],["u","x"],["i","m"]],"s":[["t","u"],["p","v"],["d","k"]],"t":[["s","u"],["q","w"]],"u":[["s","t"],["r","x"],["f","n"]],"v":[["w","x"],["p","s"],["a","j"]],"w":[["v","x"],["q","t"]],"x":[["v","w"],["r","u"],["c","o"]]}}}
        },
        boards: {
            "zulu": {
                "points": {
                    "a": {
                        "coordinates": [50, 50],
                        "connections": ["b", "d", "j"]
                    },
                    "b": {
                        "coordinates": [200, 50],
                        "connections": ["a", "c", "e"]
                    },
                    "c": {
                        "coordinates": [350, 50],
                        "connections": ["b", "f", "o"]
                    },
                    "d": {
                        "coordinates": [100, 100],
                        "connections": ["a", "e", "g", "k"]
                    },
                    "e": {
                        "coordinates": [200, 100],
                        "connections": ["b", "d", "f", "h"]
                    },
                    "f": {
                        "coordinates": [300, 100],
                        "connections": ["e", "c", "i", "n"]
                    },
                    "g": {
                        "coordinates": [150, 150],
                        "connections": ["d", "h", "l"]
                    },
                    "h": {
                        "coordinates": [200, 150],
                        "connections": ["e", "g", "i"]
                    },
                    "i": {
                        "coordinates": [250, 150],
                        "connections": ["f", "h", "m"]
                    },
                    "j": {
                        "coordinates": [50, 200],
                        "connections": ["a", "k", "v"]
                    },
                    "k": {
                        "coordinates": [100, 200],
                        "connections": ["j", "l", "s", "d"]
                    },
                    "l": {
                        "coordinates": [150, 200],
                        "connections": ["k", "g", "p"]
                    },
                    "m": {
                        "coordinates": [250, 200],
                        "connections": ["n", "r", "i"]
                    },
                    "n": {
                        "coordinates": [300, 200],
                        "connections": ["f", "m", "o", "u"]
                    },
                    "o": {
                        "coordinates": [350, 200],
                        "connections": ["n", "x", "c"]
                    },
                    "p": {
                        "coordinates": [150, 250],
                        "connections": ["q", "l", "s"]
                    },
                    "q": {
                        "coordinates": [200, 250],
                        "connections": ["p", "r", "t"]
                    },
                    "r": {
                        "coordinates": [250, 250],
                        "connections": ["q", "m", "u"]
                    },
                    "s": {
                        "coordinates": [100, 300],
                        "connections": ["t", "k", "p", "v"]
                    },
                    "t": {
                        "coordinates": [200, 300],
                        "connections": ["s", "u", "w", "q"]
                    },
                    "u": {
                        "coordinates": [300, 300],
                        "connections": ["t", "x", "n", "r"]
                    },
                    "v": {
                        "coordinates": [50, 350],
                        "connections": ["w", "j", "s"]
                    },
                    "w": {
                        "coordinates": [200, 350],
                        "connections": ["v", "x", "t"]
                    },
                    "x": {
                        "coordinates": [350, 350],
                        "connections": ["w", "o", "u"]
                    }
                },
                "lines": [
                    ["a", "b"],
                    ["a", "d"],
                    ["a", "j"],
                    ["b", "c"],
                    ["b", "e"],
                    ["c", "f"],
                    ["c", "o"],
                    ["d", "e"],
                    ["d", "g"],
                    ["d", "k"],
                    ["e", "f"],
                    ["e", "h"],
                    ["f", "i"],
                    ["f", "n"],
                    ["g", "h"],
                    ["g", "l"],
                    ["h", "i"],
                    ["i", "m"],
                    ["j", "k"],
                    ["j", "v"],
                    ["k", "l"],
                    ["k", "s"],
                    ["l", "p"],
                    ["m", "n"],
                    ["m", "r"],
                    ["n", "o"],
                    ["n", "u"],
                    ["o", "x"],
                    ["p", "q"],
                    ["p", "s"],
                    ["q", "r"],
                    ["q", "t"],
                    ["r", "u"],
                    ["s", "t"],
                    ["s", "v"],
                    ["t", "u"],
                    ["t", "w"],
                    ["u", "x"],
                    ["v", "w"],
                    ["w", "x"]
                ],
                "groups": {
                    "a": [
                        ["b", "c"],
                        ["d", "g"],
                        ["j", "v"]
                    ],
                    "b": [
                        ["a", "c"],
                        ["e", "h"]
                    ],
                    "c": [
                        ["a", "b"],
                        ["f", "i"],
                        ["o", "x"]
                    ],
                    "d": [
                        ["e", "f"],
                        ["a", "g"],
                        ["k", "s"]
                    ],
                    "e": [
                        ["d", "f"],
                        ["b", "h"]
                    ],
                    "f": [
                        ["d", "e"],
                        ["c", "i"],
                        ["n", "u"]
                    ],
                    "g": [
                        ["h", "i"],
                        ["a", "d"],
                        ["l", "p"]
                    ],
                    "h": [
                        ["g", "i"],
                        ["b", "e"]
                    ],
                    "i": [
                        ["g", "h"],
                        ["c", "f"],
                        ["m", "r"]
                    ],
                    "j": [
                        ["k", "l"],
                        ["a", "v"]
                    ],
                    "k": [
                        ["j", "l"],
                        ["d", "s"]
                    ],
                    "l": [
                        ["j", "k"],
                        ["g", "p"]
                    ],
                    "m": [
                        ["n", "o"],
                        ["i", "r"]
                    ],
                    "n": [
                        ["m", "o"],
                        ["f", "u"]
                    ],
                    "o": [
                        ["m", "n"],
                        ["c", "x"]
                    ],
                    "p": [
                        ["q", "r"],
                        ["s", "v"],
                        ["g", "l"]
                    ],
                    "q": [
                        ["p", "r"],
                        ["t", "w"]
                    ],
                    "r": [
                        ["p", "q"],
                        ["u", "x"],
                        ["i", "m"]
                    ],
                    "s": [
                        ["t", "u"],
                        ["p", "v"],
                        ["d", "k"]
                    ],
                    "t": [
                        ["s", "u"],
                        ["q", "w"]
                    ],
                    "u": [
                        ["s", "t"],
                        ["r", "x"],
                        ["f", "n"]
                    ],
                    "v": [
                        ["w", "x"],
                        ["p", "s"],
                        ["a", "j"]
                    ],
                    "w": [
                        ["v", "x"],
                        ["q", "t"]
                    ],
                    "x": [
                        ["v", "w"],
                        ["r", "u"],
                        ["c", "o"]
                    ]
                }
            },
            "sotho": {
                "points": {
                    "a": {
                        "coordinates": [50, 50],
                        "connections": ["b", "d", "j"],
                        "letter": "a"
                    },
                    "b": {
                        "coordinates": [200, 50],
                        "connections": ["a", "c", "e"],
                        "letter": "b"
                    },
                    "c": {
                        "coordinates": [350, 50],
                        "connections": ["b", "f", "p"],
                        "letter": "c"
                    },
                    "d": {
                        "coordinates": [100, 100],
                        "connections": ["a", "e", "k"],
                        "letter": "d"
                    },
                    "e": {
                        "coordinates": [200, 100],
                        "connections": ["b", "d", "f", "h"],
                        "letter": "e"
                    },
                    "f": {
                        "coordinates": [300, 100],
                        "connections": ["e", "c", "o"],
                        "letter": "f"
                    },
                    "g": {
                        "coordinates": [150, 150],
                        "connections": ["h", "l"],
                        "letter": "g"
                    },
                    "h": {
                        "coordinates": [200, 150],
                        "connections": ["e", "g", "i", "m"],
                        "letter": "h"
                    },
                    "i": {
                        "coordinates": [250, 150],
                        "connections": ["h", "n"],
                        "letter": "i"
                    },
                    "j": {
                        "coordinates": [50, 200],
                        "connections": ["a", "k", "w"],
                        "letter": "j"
                    },
                    "k": {
                        "coordinates": [100, 200],
                        "connections": ["j", "l", "t", "d"],
                        "letter": "k"
                    },
                    "l": {
                        "coordinates": [150, 200],
                        "connections": ["g", "k", "m", "q"],
                        "letter": "l"
                    },
                    "m": {
                        "coordinates": [200, 200],
                        "connections": ["h", "l", "n", "r"],
                        "letter": "m"
                    },
                    "n": {
                        "coordinates": [250, 200],
                        "connections": ["i", "m", "o", "s"],
                        "letter": "n"
                    },
                    "o": {
                        "coordinates": [300, 200],
                        "connections": ["f", "n", "p", "v"],
                        "letter": "o"
                    },
                    "p": {
                        "coordinates": [350, 200],
                        "connections": ["o", "y", "c"],
                        "letter": "p"
                    },
                    "q": {
                        "coordinates": [150, 250],
                        "connections": ["r", "l"],
                        "letter": "q"
                    },
                    "r": {
                        "coordinates": [200, 250],
                        "connections": ["m", "q", "s", "u"],
                        "letter": "r"
                    },
                    "s": {
                        "coordinates": [250, 250],
                        "connections": ["r", "n"],
                        "letter": "s"
                    },
                    "t": {
                        "coordinates": [100, 300],
                        "connections": ["u", "k", "w"],
                        "letter": "t"
                    },
                    "u": {
                        "coordinates": [200, 300],
                        "connections": ["t", "v", "x", "r"],
                        "letter": "u"
                    },
                    "v": {
                        "coordinates": [300, 300],
                        "connections": ["u", "y", "o"],
                        "letter": "v"
                    },
                    "w": {
                        "coordinates": [50, 350],
                        "connections": ["x", "j", "t"],
                        "letter": "w"
                    },
                    "x": {
                        "coordinates": [200, 350],
                        "connections": ["w", "y", "u"],
                        "letter": "x"
                    },
                    "y": {
                        "coordinates": [350, 350],
                        "connections": ["x", "p", "v"],
                        "letter": "y"
                    }
                },
                "lines": [
                    ["a", "b"],
                    ["a", "d"],
                    ["a", "j"],
                    ["b", "c"],
                    ["b", "e"],
                    ["c", "f"],
                    ["c", "p"],
                    ["d", "e"],
                    ["d", "k"],
                    ["e", "f"],
                    ["e", "h"],
                    ["f", "o"],
                    ["g", "h"],
                    ["g", "l"],
                    ["h", "i"],
                    ["h", "m"],
                    ["i", "n"],
                    ["j", "k"],
                    ["j", "w"],
                    ["k", "l"],
                    ["k", "t"],
                    ["l", "m"],
                    ["l", "q"],
                    ["m", "n"],
                    ["m", "r"],
                    ["n", "o"],
                    ["n", "s"],
                    ["o", "p"],
                    ["o", "v"],
                    ["p", "y"],
                    ["q", "r"],
                    ["r", "s"],
                    ["r", "u"],
                    ["t", "u"],
                    ["t", "w"],
                    ["u", "v"],
                    ["u", "x"],
                    ["v", "y"],
                    ["w", "x"],
                    ["x", "y"]
                ],
                "groups": {
                    "a": [
                        ["b", "c"],
                        ["j", "w"]
                    ],
                    "b": [
                        ["a", "c"],
                        ["e", "h"]
                    ],
                    "c": [
                        ["a", "b"],
                        ["p", "y"]
                    ],
                    "d": [
                        ["e", "f"],
                        ["k", "t"]
                    ],
                    "e": [
                        ["d", "f"],
                        ["b", "h"]
                    ],
                    "f": [
                        ["d", "e"],
                        ["o", "v"]
                    ],
                    "g": [
                        ["h", "i"],
                        ["l", "q"]
                    ],
                    "h": [
                        ["g", "i"],
                        ["b", "e"],
                        ["m", "r"]
                    ],
                    "i": [
                        ["g", "h"],
                        ["n", "s"]
                    ],
                    "j": [
                        ["k", "l"],
                        ["a", "w"]
                    ],
                    "k": [
                        ["j", "l"],
                        ["d", "t"]
                    ],
                    "l": [
                        ["j", "k"],
                        ["m", "n"],
                        ["g", "q"]
                    ],
                    "m": [
                        ["h", "r"],
                        ["l", "n"]
                    ],
                    "n": [
                        ["l", "m"],
                        ["i", "s"],
                        ["o", "p"]
                    ],
                    "o": [
                        ["f", "v"],
                        ["n", "p"]
                    ],
                    "p": [
                        ["c", "y"],
                        ["n", "o"]
                    ],
                    "q": [
                        ["r", "s"],
                        ["g", "l"]
                    ],
                    "r": [
                        ["h", "m"],
                        ["q", "s"],
                        ["u", "x"]
                    ],
                    "s": [
                        ["i", "n"],
                        ["q", "r"]
                    ],
                    "t": [
                        ["d", "k"],
                        ["u", "v"]
                    ],
                    "u": [
                        ["t", "v"],
                        ["r", "x"]
                    ],
                    "v": [
                        ["f", "o"],
                        ["t", "u"]
                    ],
                    "w": [
                        ["a", "j"],
                        ["x", "y"]
                    ],
                    "x": [
                        ["w", "y"],
                        ["r", "u"]
                    ],
                    "y": [
                        ["c", "p"],
                        ["w", "x"]
                    ]
                }
            },
            "rabbits&dogs": {
                points: {
                    a: {
                        coordinates: [50, 50],
                        connections: ['b', 'b', 'g', 'g'],
                        letter: 'a'
                    },
                    b: {
                        coordinates: [200, 50],
                        connections: ['a', 'a', 'c', 'c', 'e', 'e'],
                        letter: 'b'
                    },
                    c: {
                        coordinates: [350, 50],
                        connections: ['b', 'b', 'j', 'j'],
                        letter: 'c'
                    },
                    d: {
                        coordinates: [125, 125],
                        connections: ['e', 'e', 'h', 'h'],
                        letter: 'd'
                    },
                    e: {
                        coordinates: [200, 125],
                        connections: ['b', 'b', 'd', 'd', 'f', 'f'],
                        letter: 'e'
                    },
                    f: {
                        coordinates: [275, 125],
                        connections: ['e', 'e', 'i', 'i'],
                        letter: 'f'
                    },
                    g: {
                        coordinates: [50, 200],
                        connections: ['a', 'a', 'h', 'h', 'n', 'n'],
                        letter: 'g'
                    },
                    h: {
                        coordinates: [125, 200],
                        connections: ['d', 'd', 'g', 'g', 'k', 'k'],
                        letter: 'h'
                    },
                    i: {
                        coordinates: [275, 200],
                        connections: ['f', 'f', 'j', 'j', 'm', 'm'],
                        letter: 'i'
                    },
                    j: {
                        coordinates: [350, 200],
                        connections: ['c', 'c', 'i', 'i', 'p', 'p'],
                        letter: 'j'
                    },
                    k: {
                        coordinates: [125, 275],
                        connections: ['h', 'h', 'l', 'l'],
                        letter: 'k'
                    },
                    l: {
                        coordinates: [200, 275],
                        connections: ['k', 'k', 'm', 'm', 'o', 'o'],
                        letter: 'l'
                    },
                    m: {
                        coordinates: [275, 275],
                        connections: ['i', 'i', 'l', 'l'],
                        letter: 'm'
                    },
                    n: {
                        coordinates: [50, 350],
                        connections: ['g', 'g', 'o', 'o'],
                        letter: 'n'
                    },
                    o: {
                        coordinates: [200, 350],
                        connections: ['l', 'l', 'n', 'n', 'p', 'p'],
                        letter: 'o'
                    },
                    p: {
                        coordinates: [350, 350],
                        connections: ['j', 'j', 'o', 'o'],
                        letter: 'p'
                    }
                },
                lines: [
                    ['a', 'b'],
                    ['a', 'g'],
                    ['b', 'c'],
                    ['b', 'e'],
                    ['c', 'j'],
                    ['d', 'e'],
                    ['d', 'h'],
                    ['e', 'f'],
                    ['f', 'i'],
                    ['g', 'h'],
                    ['g', 'n'],
                    ['h', 'k'],
                    ['i', 'j'],
                    ['i', 'm'],
                    ['j', 'p'],
                    ['k', 'l'],
                    ['l', 'm'],
                    ['l', 'o'],
                    ['n', 'o'],
                    ['o', 'p']
                ],
                groups: {
                    a: [
                        ['b', 'c'],
                        ['d', 'g'],
                        ['j', 'v']
                    ],
                    b: [
                        ['a', 'c'],
                        ['e', 'h']
                    ],
                    c: [
                        ['a', 'b'],
                        ['f', 'i'],
                        ['o', 'x']
                    ],
                    d: [
                        ['e', 'f'],
                        ['a', 'g'],
                        ['k', 's']
                    ],
                    e: [
                        ['d', 'f'],
                        ['b', 'h']
                    ],
                    f: [
                        ['d', 'e'],
                        ['c', 'i'],
                        ['n', 'u']
                    ],
                    g: [
                        ['h', 'i'],
                        ['a', 'd'],
                        ['l', 'p']
                    ],
                    h: [
                        ['g', 'i'],
                        ['b', 'e']
                    ],
                    i: [
                        ['g', 'h'],
                        ['c', 'f'],
                        ['m', 'r']
                    ],
                    j: [
                        ['k', 'l'],
                        ['a', 'v']
                    ],
                    k: [
                        ['j', 'l'],
                        ['d', 's']
                    ],
                    l: [
                        ['j', 'k'],
                        ['g', 'p']
                    ],
                    m: [
                        ['n', 'o'],
                        ['i', 'r']
                    ],
                    n: [
                        ['m', 'o'],
                        ['f', 'u']
                    ],
                    o: [
                        ['m', 'n'],
                        ['c', 'x']
                    ],
                    p: [
                        ['q', 'r'],
                        ['s', 'v'],
                        ['g', 'l']
                    ],
                    q: [
                        ['p', 'r'],
                        ['t', 'w']
                    ],
                    r: [
                        ['p', 'q'],
                        ['u', 'x'],
                        ['i', 'm']
                    ],
                    s: [
                        ['t', 'u'],
                        ['p', 'v'],
                        ['d', 'k']
                    ],
                    t: [
                        ['s', 'u'],
                        ['q', 'w']
                    ],
                    u: [
                        ['s', 't'],
                        ['r', 'x'],
                        ['f', 'n']
                    ],
                    v: [
                        ['w', 'x'],
                        ['p', 's'],
                        ['a', 'j']
                    ],
                    w: [
                        ['v', 'x'],
                        ['q', 't']
                    ],
                    x: [
                        ['v', 'w'],
                        ['r', 'u'],
                        ['c', 'o']
                    ]
                }
            }
        }
    },
    mutations: {
        ADD_MATCH(state, match) {
            Vue.set(state.matches, match.matchId, match)
        },
        updateLines(state, {
            board,
            lines
        }) {
            Vue.set(state.boards[board], 'lines', lines)
        },
        setPoints(state, {
            board,
            points
        }) {
            Vue.set(state.boards[board], 'points', points)
        },
        addOption(state, {
            title,
            option
        }) {
            state.questions[title].answers = [...new Set([...state.questions[title].answers, option])]
        },
        addConnection(state, {
            board,
            connection
        }) {
            Vue.set(state.boards[board].points[connection[0]], 'connections', [...state.boards[board].points[connection[0]].connections, connection[1]].sort())
            Vue.set(state.boards[board].points[connection[1]], 'connections', [...state.boards[board].points[connection[1]].connections, connection[0]].sort())
        },
        removeConnection(state, {
            board,
            connection
        }) {
            Vue.set(state.boards[board].points[connection[0]], 'connections', state.boards[board].points[connection[0]].connections.filter(x => x != connection[1]))
            Vue.set(state.boards[board].points[connection[1]], 'connections', state.boards[board].points[connection[1]].connections.filter(x => x != connection[0]))
        },
        addGroup(state, {
            board,
            group
        }) {
            group.forEach(letter => {
                let groups = (state.boards[board].groups[letter] || []).map(x => x.join(''))
                let newGroup = group.filter(x => x != letter).join('')
                state.boards[board].groups[letter] = [...new Set([...groups, newGroup])].map(x => x.split(''))
            })
        },
        removeGroups(state, {
            board,
            group
        }) {
            group.forEach(letter => {
                let groups = state.boards[board].groups[letter].map(x => x.join(''))
                let filterOut = group.filter(x => x != letter).join('')
                state.boards[board].groups[letter] = groups.filter(x => x != filterOut).map(x => x.split(''))
            })
        },
    },
    actions: {},
    getters: {
        boards(state) {
            return state.boards
        }
    }
})