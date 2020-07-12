
const oriantation = {
	flip: arr => [2, 1, 0, 5, 4, 3, 8, 7, 6, 14, 13, 12, 11, 10, 9, 17, 16, 15, 20, 19, 18, 23, 22, 21].map(key => arr[key]),
	rotate: arr => [2, 14, 23, 5, 13, 20, 8, 12, 17, 1, 4, 7, 16, 19, 22, 6, 11, 15, 3, 10, 18, 0, 9, 21].map(key => arr[key]),
	invert: arr => [6, 7, 8, 3, 4, 5, 0, 1, 2, 11, 10, 9, 14, 13, 12, 21, 22, 23, 18, 19, 20, 15, 16, 17].map(key => arr[key]),
}
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x']

function track(target, [p1, p2]) {
    const myMap = new Map(letters.map(x => [x, 0]))
    p1.forEach(x => myMap.set(x, 1))
    p2.forEach(x => myMap.set(x, 2))

    let normalRotations = [Array.from(myMap.values())]
    for (let i = 0; i < 3; i++) {
        normalRotations.push(oriantation.rotate(normalRotations[i]))
    }
    let normalFlipedRotations = [oriantation.flip(normalRotations[0])]
    for (let i = 0; i < 3; i++) {
        normalFlipedRotations.push(oriantation.rotate(normalFlipedRotations[i]))
    }
    let invertedRotations = [oriantation.invert(normalRotations[0])]
    for (let i = 0; i < 3; i++) {
        invertedRotations.push(oriantation.rotate(invertedRotations[i]))
    }
    let invertedFlippedRotations = [oriantation.flip(invertedRotations[0])]
    for (let i = 0; i < 3; i++) {
        invertedFlippedRotations.push(oriantation.rotate(invertedFlippedRotations[i]))
    }

    const setId = [
        ...normalRotations,
        ...normalFlipedRotations,
        ...invertedRotations,
        ...invertedFlippedRotations,
    ].map(arr => arr.join('')).sort().shift()

    console.log('id:', setId)
}