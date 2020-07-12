export default {
    name: "6 man's morris",
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
        a: [['b', 'c'], ['d', 'g'], ['j', 'v']],
        b: [['a', 'c'], ['e', 'h']],
        c: [['a', 'b'], ['f', 'i'], ['o', 'x']],
        d: [['e', 'f'], ['a', 'g'], ['k', 's']],
        e: [['d', 'f'], ['b', 'h']],
        f: [['d', 'e'], ['c', 'i'], ['n', 'u']],
        g: [['h', 'i'], ['a', 'd'], ['l', 'p']],
        h: [['g', 'i'], ['b', 'e']],
        i: [['g', 'h'], ['c', 'f'], ['m', 'r']],
        j: [['k', 'l'], ['a', 'v']],
        k: [['j', 'l'], ['d', 's']],
        l: [['j', 'k'], ['g', 'p']],
        m: [['n', 'o'], ['i', 'r']],
        n: [['m', 'o'], ['f', 'u']],
        o: [['m', 'n'], ['c', 'x']],
        p: [['q', 'r'], ['s', 'v'], ['g', 'l']],
        q: [['p', 'r'], ['t', 'w']],
        r: [['p', 'q'], ['u', 'x'], ['i', 'm']],
        s: [['t', 'u'], ['p', 'v'], ['d', 'k']],
        t: [['s', 'u'], ['q', 'w']],
        u: [['s', 't'], ['r', 'x'], ['f', 'n']],
        v: [['w', 'x'], ['p', 's'], ['a', 'j']],
        w: [['v', 'x'], ['q', 't']],
        x: [['v', 'w'], ['r', 'u'], ['c', 'o']]
    }
}