export default {
    name: "Morabaraba / 12 man's morris",
    points: {
        a: {
            coordinates: [50, 50],
            connections: ['b', 'd', 'j'],
            letter: 'a'
        },
        b: {
            coordinates: [200, 50],
            connections: ['a', 'c', 'e'],
            letter: 'b'
        },
        c: {
            coordinates: [350, 50],
            connections: ['b', 'f', 'p'],
            letter: 'c'
        },
        d: {
            coordinates: [100, 100],
            connections: ['a', 'e', 'k'],
            letter: 'd'
        },
        e: {
            coordinates: [200, 100],
            connections: ['b', 'd', 'f', 'h'],
            letter: 'e'
        },
        f: {
            coordinates: [300, 100],
            connections: ['e', 'c', 'o'],
            letter: 'f'
        },
        g: {
            coordinates: [150, 150],
            connections: ['h', 'l'],
            letter: 'g'
        },
        h: {
            coordinates: [200, 150],
            connections: ['e', 'g', 'i', 'm'],
            letter: 'h'
        },
        i: {
            coordinates: [250, 150],
            connections: ['h', 'n'],
            letter: 'i'
        },
        j: {
            coordinates: [50, 200],
            connections: ['a', 'k', 'w'],
            letter: 'j'
        },
        k: {
            coordinates: [100, 200],
            connections: ['j', 'l', 't', 'd'],
            letter: 'k'
        },
        l: {
            coordinates: [150, 200],
            connections: ['g', 'k', 'm', 'q'],
            letter: 'l'
        },
        m: {
            coordinates: [200, 200],
            connections: ['h', 'l', 'n', 'r'],
            letter: 'm'
        },
        n: {
            coordinates: [250, 200],
            connections: ['i', 'm', 'o', 's'],
            letter: 'n'
        },
        o: {
            coordinates: [300, 200],
            connections: ['f', 'n', 'p', 'v'],
            letter: 'o'
        },
        p: {
            coordinates: [350, 200],
            connections: ['o', 'y', 'c'],
            letter: 'p'
        },
        q: {
            coordinates: [150, 250],
            connections: ['r', 'l'],
            letter: 'q'
        },
        r: {
            coordinates: [200, 250],
            connections: ['m', 'q', 's', 'u'],
            letter: 'r'
        },
        s: {
            coordinates: [250, 250],
            connections: ['r', 'n'],
            letter: 's'
        },
        t: {
            coordinates: [100, 300],
            connections: ['u', 'k', 'w'],
            letter: 't'
        },
        u: {
            coordinates: [200, 300],
            connections: ['t', 'v', 'x', 'r'],
            letter: 'u'
        },
        v: {
            coordinates: [300, 300],
            connections: ['u', 'y', 'o'],
            letter: 'v'
        },
        w: {
            coordinates: [50, 350],
            connections: ['x', 'j', 't'],
            letter: 'w'
        },
        x: {
            coordinates: [200, 350],
            connections: ['w', 'y', 'u'],
            letter: 'x'
        },
        y: {
            coordinates: [350, 350],
            connections: ['x', 'p', 'v'],
            letter: 'y'
        }
    },
    lines: [
        ['a', 'b'],
        ['a', 'd'],
        ['a', 'j'],
        ['b', 'c'],
        ['b', 'e'],
        ['c', 'f'],
        ['c', 'p'],
        ['d', 'e'],
        ['d', 'k'],
        ['e', 'f'],
        ['e', 'h'],
        ['f', 'o'],
        ['g', 'h'],
        ['g', 'l'],
        ['h', 'i'],
        ['h', 'm'],
        ['i', 'n'],
        ['j', 'k'],
        ['j', 'w'],
        ['k', 'l'],
        ['k', 't'],
        ['l', 'm'],
        ['l', 'q'],
        ['m', 'n'],
        ['m', 'r'],
        ['n', 'o'],
        ['n', 's'],
        ['o', 'p'],
        ['o', 'v'],
        ['p', 'y'],
        ['q', 'r'],
        ['r', 's'],
        ['r', 'u'],
        ['t', 'u'],
        ['t', 'w'],
        ['u', 'v'],
        ['u', 'x'],
        ['v', 'y'],
        ['w', 'x'],
        ['x', 'y']
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
}