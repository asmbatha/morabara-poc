export default {
    name: "3 man's morris",
    points: {
        a: {
            coordinates: [50, 50],
            connections: ['b', 'b', 'd', 'd', 'e', 'e'],
            letter: 'a'
        },
        b: {
            coordinates: [200, 50],
            connections: ['a', 'a', 'c', 'c', 'e', 'e'],
            letter: 'b'
        },
        c: {
            coordinates: [350, 50],
            connections: ['b', 'b', 'e', 'e', 'f', 'f'],
            letter: 'c'
        },
        d: {
            coordinates: [50, 200],
            connections: ['a', 'a', 'e', 'e', 'g', 'g'],
            letter: 'd'
        },
        e: {
            coordinates: [200, 200],
            connections: [
                'a',
                'a',
                'b',
                'b',
                'c',
                'c',
                'd',
                'd',
                'f',
                'f',
                'g',
                'g',
                'h',
                'h',
                'i',
                'i'
            ],
            letter: 'e'
        },
        f: {
            coordinates: [350, 200],
            connections: ['c', 'c', 'e', 'e', 'i', 'i'],
            letter: 'f'
        },
        g: {
            coordinates: [50, 350],
            connections: ['d', 'd', 'e', 'e', 'h', 'h'],
            letter: 'g'
        },
        h: {
            coordinates: [200, 350],
            connections: ['e', 'e', 'g', 'g', 'i', 'i'],
            letter: 'h'
        },
        i: {
            coordinates: [350, 350],
            connections: ['e', 'e', 'f', 'f', 'h', 'h'],
            letter: 'i'
        }
    },
    lines: [
        ['a', 'b'],
        ['a', 'd'],
        ['a', 'e'],
        ['b', 'c'],
        ['b', 'e'],
        ['c', 'e'],
        ['c', 'f'],
        ['d', 'e'],
        ['d', 'g'],
        ['e', 'f'],
        ['e', 'g'],
        ['e', 'h'],
        ['e', 'i'],
        ['f', 'i'],
        ['g', 'h'],
        ['h', 'i']
    ],
    groups: {
        a: [['b', 'c'], ['j', 'w'], ['e', 'i'], ['d', 'g']],
        b: [['a', 'c'], ['e', 'h']],
        c: [['a', 'b'], ['p', 'y'], ['e', 'g'], ['f', 'i']],
        d: [['e', 'f'], ['k', 't'], ['a', 'g']],
        e: [['d', 'f'], ['b', 'h'], ['a', 'i'], ['c', 'g']],
        f: [['d', 'e'], ['o', 'v'], ['c', 'i']],
        g: [['h', 'i'], ['l', 'q'], ['c', 'e'], ['a', 'd']],
        h: [['g', 'i'], ['b', 'e'], ['m', 'r']],
        i: [['g', 'h'], ['n', 's'], ['a', 'e'], ['c', 'f']],
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