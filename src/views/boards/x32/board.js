export default {
    name: "11 man's morris",
    points: {
        a: { coordinates: [50, 50], connections: ['b', 'j'] },
        b: { coordinates: [200, 50], connections: ['a', 'c', 'e'] },
        c: { coordinates: [350, 50], connections: ['b', 'o'] },
        d: { coordinates: [100, 100], connections: ['e', 'k'] },
        e: {
            coordinates: [200, 100],
            connections: ['b', 'd', 'f', 'h']
        },
        f: { coordinates: [300, 100], connections: ['e', 'n'] },
        g: { coordinates: [150, 150], connections: ['h', 'l'] },
        h: {
            coordinates: [200, 150],
            connections: ['e', 'g', 'i']
        },
        i: { coordinates: [250, 150], connections: ['h', 'm'] },
        j: { coordinates: [50, 200], connections: ['a', 'k', 'v'] },
        k: {
            coordinates: [100, 200],
            connections: ['j', 'l', 's', 'd']
        },
        l: {
            coordinates: [150, 200],
            connections: ['k', 'g', 'p']
        },
        m: {
            coordinates: [250, 200],
            connections: ['n', 'r', 'i']
        },
        n: {
            coordinates: [300, 200],
            connections: ['f', 'm', 'o', 'u']
        },
        o: {
            coordinates: [350, 200],
            connections: ['n', 'x', 'c']
        },
        p: { coordinates: [150, 250], connections: ['q', 'l'] },
        q: {
            coordinates: [200, 250],
            connections: ['p', 'r', 't']
        },
        r: { coordinates: [250, 250], connections: ['q', 'm'] },
        s: { coordinates: [100, 300], connections: ['t', 'k'] },
        t: {
            coordinates: [200, 300],
            connections: ['s', 'u', 'w', 'q']
        },
        u: { coordinates: [300, 300], connections: ['t', 'n'] },
        v: { coordinates: [50, 350], connections: ['w', 'j'] },
        w: {
            coordinates: [200, 350],
            connections: ['v', 'x', 't']
        },
        x: { coordinates: [350, 350], connections: ['w', 'o'] }
    },
    lines: [
        ['a', 'b'],
        ['a', 'j'],
        ['b', 'c'],
        ['b', 'e'],
        ['c', 'o'],
        ['d', 'e'],
        ['d', 'k'],
        ['e', 'f'],
        ['e', 'h'],
        ['f', 'n'],
        ['g', 'h'],
        ['g', 'l'],
        ['h', 'i'],
        ['i', 'm'],
        ['j', 'k'],
        ['j', 'v'],
        ['k', 'l'],
        ['k', 's'],
        ['l', 'p'],
        ['m', 'n'],
        ['m', 'r'],
        ['n', 'o'],
        ['n', 'u'],
        ['o', 'x'],
        ['p', 'q'],
        ['q', 'r'],
        ['q', 't'],
        ['s', 't'],
        ['t', 'u'],
        ['t', 'w'],
        ['v', 'w'],
        ['w', 'x']
    ],
    groups: {
        a: [['b', 'c'], ['j', 'w']],
        b: [['a', 'c'], ['e', 'h']],
        c: [['a', 'b'], ['p', 'y']],
        d: [['e', 'f'], ['k', 't']],
        e: [['d', 'f'], ['b', 'h']],
        f: [['d', 'e'], ['o', 'v']],
        g: [['h', 'i'], ['l', 'q']],
        h: [['g', 'i'], ['b', 'e'], ['m', 'r']],
        i: [['g', 'h'], ['n', 's']],
        j: [['k', 'l'], ['a', 'w']],
        k: [['j', 'l'], ['d', 't']],
        l: [['j', 'k'], ['m', 'n'], ['g', 'q']],
        m: [['h', 'r'], ['l', 'n']],
        n: [['l', 'm'], ['i', 's'], ['o', 'p']],
        o: [['f', 'v'], ['n', 'p']],
        p: [['c', 'y'], ['n', 'o']],
        q: [['r', 's'], ['g', 'l']],
        r: [['h', 'm'], ['q', 's'], ['u', 'x']],
        s: [['i', 'n'], ['q', 'r']],
        t: [['d', 'k'], ['u', 'v']],
        u: [['t', 'v'], ['r', 'x']],
        v: [['f', 'o'], ['t', 'u']],
        w: [['a', 'j'], ['x', 'y']],
        x: [['w', 'y'], ['r', 'u']],
        y: [['c', 'p'], ['w', 'x']]
    }
}