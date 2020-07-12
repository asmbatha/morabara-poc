import Vue from 'vue'
import board from './board'

export default new Vue({
    data() {
        return {
            simQueue: [], 
            points: board.points,
            groups: board.groups,
            matchMachine: {}
        }
    },
    computed: {
        matchState () {
            return this.matchMachine.state
        },
        currentPlayerPieces () {
            return this.matchMachine.currentPlayerPieces
        },
        opponentPieces () {
            return this.matchMachine.opponentPieces
        },
        highlights () {
            return this.matchMachine.highlights
        }
    },
    created () {
        this.$on('PLAY', this.play)
    },
    methods: {
        play (matchMachine) {
            console.log('ai playing')
            this.matchMachine = matchMachine
            let letter = this.simQueue.pop() || this.strategies() && this.strategies()(this.highlights.filter(x => x.length === 1))
            setTimeout(() => {
                letter ? this.click({letter}) : this.simulate()
            }, 1000)
        },
        click (target) {
            this.matchMachine.$emit('CLICK', target)
        },
        simulate () {
            let options = this.highlights.filter(x => x.length === 1)
            let max = (options.length - 1);
            let randIndex = Math.floor(Math.random() * max)
            let letter = options[randIndex]
            this.click({letter})
        },

        strategies () {
            if (this.matchState === 'select' && this.currentPlayerPieces.length > 3) {
                return (clickables) => {
                    let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                    let empty = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))
                    let options = clickables
                        .map(x => this.points[x].connections)
                        .reduce((c, a) => [...c, ...a], [])
                        .filter(x => empty.includes(x))
                    
                    // rank options
                    let rankings = {}
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings[letter] = this.select_getPointRanking(letter)
                    })

                    console.log(rankings)
                    
                    let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    let moveTo = ''
                    let movefrom = '' 
                    if (max) {
                        if (guns.length) {
                            let randIndex = Math.floor(Math.random() * (guns.length - 1))
                            moveTo = guns[randIndex]
                        } else {
                            let randIndex = Math.floor(Math.random() * (blocks.length - 1))
                            moveTo = blocks[randIndex]
                        }
                    } else {
                        // find all options that are connected to a gun
                        // where the gun connection is not connected to an oponent piece
                        let connectedToGun = options.map(letter => {
                            // letter connections
                            let connections = this.points[letter].connections.filter(connection => {
                                let groups = this.groups[connection].filter(group => {
                                    return (
                                        group.filter(letter => this.currentPlayerPieces.includes(letter)).length == 2 &&
                                        !this.points[connection].connections.some(x => this.opponentPieces.includes(x))
                                    )
                                })

                                return groups.length
                            })
                            return {
                                from: connections,
                                to: letter
                            }
                        }).filter(pair => pair.from.length)

                        if (connectedToGun.length) {
                            let randIndex = Math.floor(Math.random() * (connectedToGun.length - 1))
                            moveTo = connectedToGun[randIndex].to
                            movefrom = connectedToGun[randIndex].from[0]
                        } else if (blocks.length) {
                            console.log('Oh no. we didnt know what to do there')
                            let randIndex = Math.floor(Math.random() * (blocks.length - 1))
                            moveTo = blocks[randIndex]
                        } else if (guns.length){
                            let randIndex = Math.floor(Math.random() * (guns.length - 1))
                            moveTo = guns[randIndex]
                        } else {
                            let availableToOptions = Object.keys(rankings)
                            let randIndex = Math.floor(Math.random() * (availableToOptions.length - 1))
                            moveTo = availableToOptions[randIndex]
                        }
                    }

                    let connections = this.points[moveTo].connections
                    if (!movefrom) {
                        let groups = this.groups[moveTo]
                        groups = groups.find(group => {
                            // group must have a ranking of max
                            let rank = group.filter(x => this.currentPlayerPieces.includes(x)).length
                            let rank2 = group.filter(x => this.opponentPieces.includes(x)).length
                            // and must have atleast one outlier
                            let outlier = connections.find(x => !group.includes(x) && this.currentPlayerPieces.includes(x))
                            if (outlier && (rank == max || rank2 == max)) {
                                movefrom = outlier
                                return true
                            }
                            return false
                        })
                    }

                    this.simQueue[1] = moveTo

                    return movefrom
                }
            }

            if (this.matchState === 'select' && this.currentPlayerPieces.length === 3) {
                return (clickables) => {
                    let occupied = [...this.currentPlayerPieces, ...this.opponentPieces]
                    let options = Object.keys(this.points)
                            .filter(x => !occupied.includes(x))

                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.place_getPointRanking(letter),
                                letter
                            })
                    })
                    let groups = Object.values(rankings).map(({best}) => best)
                    let best = false
                    best = groups.find(({guns, blocks}) => guns === 2)
                    // block === 2
                    if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
                    // guns === 1 && blocks === 0
                    if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
                    // guns === 0 && blocks === 1
                    if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

                    if (!best) {
                        let randIndex = Math.floor(Math.random() * (groups.length - 1))
                        best = groups[randIndex]
                    }
                    let bestOption = rankings.filter(({best: {guns, blocks}}) => guns === best.guns && blocks === best.blocks)[0]
                    this.simQueue[1] = bestOption.letter
                    
                    return this.currentPlayerPieces.find(x => !bestOption.best.group.includes(x))
                }
            }

            if (this.matchState === 'place') {
                return (options) => {
                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.place_getPointRanking(letter),
                                letter
                            })
                    })
                    let groups = Object.values(rankings).map(({best}) => best)
                    let best = false
                    best = groups.find(({guns, blocks}) => guns === 2)
                    // block === 2
                    if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
                    // guns === 1 && blocks === 0
                    if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
                    // guns === 0 && blocks === 1
                    if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

                    if (!best) {
                        let randIndex = Math.floor(Math.random() * (groups.length - 1))
                        best = groups[randIndex]
                    }

                    let bestOption = rankings.filter(({best: {guns, blocks}}) => guns === best.guns && blocks === best.blocks)

                    let supportRanking = ({guns, blocks}) => {
                        // 5 gun == 2
                        if (guns === 2) return 5
                        // 4 block == 2
                        if (blocks === 2) return 4
                        // 3 gun == 1 && block == 0
                        if (guns === 1 && !blocks) return 3
                        // 2 gun == 0 && block == 0
                        if (!guns && !blocks) return 2
                        // 1 block == 1 && gun == 0
                        if (blocks === 1 && !guns) return 1
                        // 0 undefined
                        return 0
                    }

                    // convert bestOptions to support rankings
                    bestOption = bestOption.map(option => {
                        let res = {
                            letter: option.letter,
                            groups: option.groups.map(group => supportRanking(group)).sort((a, b) => b - a)
                        }
                        return res
                    })

                    // support ranking 
                    function cream (options) {
                        let groupMaxes = Math.max(...options.map(({groups}) => groups[0]))
                        let results = [...options]
                            .filter(option => option.groups[0] === groupMaxes)
                            .map(({letter, groups}) => {
                                return {
                                    letter,
                                    groups: groups.filter((x, i) => i)
                                }
                            })

                        let secondary_results = results.filter(option => option.groups.length)
                        if (!secondary_results.length) secondary_results = results
                        if (!secondary_results.length) secondary_results = options
                        return secondary_results
                    }

                    let creamed = cream(bestOption)

                    while(
                        creamed.length !== bestOption.length || 
                        (
                            creamed[0].letter !== bestOption[0].letter || creamed[0].groups.length !== bestOption[0].groups.length
                        )
                    ) {
                        bestOption = creamed
                        creamed = cream(bestOption)
                    }

                    bestOption = creamed
                    
                    let randIndex = Math.floor(Math.random() * (bestOption.length - 1))
                    best = bestOption[randIndex]
                    
                    // let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    // let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    // let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    return best.letter
                }
            }

            if (this.matchState === 'remove') {
                return (options) => {
                    let moveTo = ''
                    // rank options
                    let rankings = []
                    // for each option find most filled gun
                    options.forEach(letter => {
                        rankings.push({
                                ...this.remove_getPointRanking(letter),
                                letter
                            })
                    })

                    let mostPossibilities = Math.max(...rankings.map(({blocks, guns}) => blocks + guns))

                    rankings = rankings.filter(({blocks, guns}) => mostPossibilities === blocks + guns)

                    let mostGuns = Math.max(...rankings.map(({guns}) => guns))
                    let mostGunsRanking = rankings.filter(({guns}) => mostGuns === guns)

                    let randIndex = Math.floor(Math.random() * (mostGunsRanking.length - 1))
                    let best = mostGunsRanking[randIndex]
                    
                    // let max = Math.max(...Object.values(rankings).map(obj => obj.value))
                    // let guns = options.filter(letter => rankings[letter].type == 'gun' && rankings[letter].value === max)
                    // let blocks = options.filter(letter => rankings[letter].type == 'block' && rankings[letter].value === max)

                    return best.letter
                }
            }
            return false
        },

        select_getPointRanking (point) {
            let connections = this.points[point].connections
            let gun = Math.max(
                ...this.groups[point].filter(group => {
                    let survivers = connections.filter(x => !group.includes(x))
                    // check if any survivers are the currentplayers pieces
                    return survivers.some(x => this.currentPlayerPieces.includes(x))
                }).map(
                    group => group.filter(
                        letter => this.currentPlayerPieces.includes(letter)
                    ).length
                )
            )

            let block = Math.max(
                ...this.groups[point].filter(group => {
                    let survivers = connections.filter(x => !group.includes(x))
                    // check if any survivers are the currentplayers pieces
                    return survivers.some(x => this.currentPlayerPieces.includes(x)) && survivers.some(x => this.opponentPieces.includes(x))
                }).map(
                    group => group.filter(
                        letter => this.opponentPieces.includes(letter)
                    ).length
                )
            )

            return {
                type: gun >= block ? 'gun' : 'block',
                value: Math.max(gun, block)
            }
        },
        place_getPointRanking (point) {

            let groups = this.groups[point].map(group => {
                return {
                    guns: group.filter(
                            letter => this.currentPlayerPieces.includes(letter)
                        ).length,
                    blocks: group.filter(
                            letter => this.opponentPieces.includes(letter)
                        ).length,
                    group: group.join('')
                }
            })
            let best = false
            
            // find the best group
            // guns === 2
            best = groups.find(({guns, blocks}) => guns === 2)
            // block === 2
            if (!best) best = groups.find(({guns, blocks}) => blocks === 2)
            // guns === 1 && blocks === 0
            if (!best) best = groups.find(({guns, blocks}) => guns === 1 && !blocks)
            // guns === 0 && blocks === 1
            if (!best) best = groups.find(({guns, blocks}) => !guns && blocks === 1)

            if (!best) {
                let randIndex = Math.floor(Math.random() * (groups.length - 1))
                best = groups[randIndex]
            }

            return {best, groups}
        },
        remove_getPointRanking (point) {

            let groups = this.groups[point].map(group => {
                return {
                    guns: group.filter(
                            letter => this.currentPlayerPieces.includes(letter)
                        ).length,
                    blocks: group.filter(
                            letter => this.opponentPieces.includes(letter)
                        ).length,
                    group: group.join('')
                }
            })
            
            return {
                groups,
                guns: groups.filter(x => x.guns).length,
                blocks: groups.filter(x => x.blocks).length,
            }
        }
    }
})