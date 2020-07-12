export default {
    name: "3 man's morris",
    "points": {
        "a": {
            "coordinates": [200, 50],
            "connections": ["b", "c", "d"],
            "letter": "a"
        },
        "b": {
            "coordinates": [125, 125],
            "connections": ["a", "c", "e", "f"],
            "letter": "b"
        },
        "c": {
            "coordinates": [200, 125],
            "connections": ["a", "b", "d", "f"],
            "letter": "c"
        },
        "d": {
            "coordinates": [275, 125],
            "connections": ["a", "c", "f", "g"],
            "letter": "d"
        },
        "e": {
            "coordinates": [125, 200],
            "connections": ["b", "f", "h"],
            "letter": "e"
        },
        "f": {
            "coordinates": [200, 200],
            "connections": ["b", "c", "d", "e", "g", "h", "i", "j"],
            "letter": "f"
        },
        "g": {
            "coordinates": [275, 200],
            "connections": ["d", "f", "j"],
            "letter": "g"
        },
        "h": {
            "coordinates": [125, 275],
            "connections": ["e", "f", "i", "k"],
            "letter": "h"
        },
        "i": {
            "coordinates": [200, 275],
            "connections": ["f", "h", "j", "k"],
            "letter": "i"
        },
        "j": {
            "coordinates": [275, 275],
            "connections": ["f", "g", "i", "k"],
            "letter": "j"
        },
        "k": {
            "coordinates": [200, 350],
            "connections": ["h", "i", "j"],
            "letter": "k"
        }
    },
    "lines": [
        ["a", "b"],
        ["a", "c"],
        ["a", "d"],
        ["b", "c"],
        ["b", "e"],
        ["b", "f"],
        ["c", "d"],
        ["c", "f"],
        ["d", "f"],
        ["d", "g"],
        ["e", "f"],
        ["e", "h"],
        ["f", "g"],
        ["f", "h"],
        ["f", "i"],
        ["f", "j"],
        ["g", "j"],
        ["h", "i"],
        ["h", "k"],
        ["i", "j"],
        ["i", "k"],
        ["j", "k"]
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