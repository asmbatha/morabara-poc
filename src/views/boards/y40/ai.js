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
        opponentMoves () {
            return this.matchMachine.playerMoves[Number(!this.matchMachine.currentPlayer)]
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
            let options = this.simQueue.pop() || this.strategies() && this.strategies()(this.highlights.filter(x => x.length === 1))
            setTimeout(() => {
                if (options) {
                    let randIndex = Math.floor(Math.random() * (options.length - 1))
                    this.click({letter: options[randIndex]})
                } else {
                    this.simulate()
                }
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
            if (this.matchState === 'place') return this.place
            if (this.matchState === 'select') return this.select
            if (this.matchState === 'remove') return this.remove
            return false
        },
        place (openPositions) {
            // get open positions
            // let openPositions = []

            // letters -> tags
            // tags -> letters
            let letters = {}
            let tags = {
                shoot: [],
                block: [],
                buildStage2: [],
                buildStage1: [],
                shallowBlock: []
            }
            let tagsScores = {
                shoot: 24,
                block: 10,
                buildStage2: 4,
                buildStage1: 2,
                shallowBlock: 1
            }
            openPositions.forEach(position => {
                let generatedTags = this.placeTagging(position, [this.currentPlayerPieces, this.opponentPieces])
                console.log('generatedTags', generatedTags)
                generatedTags.forEach(tag => tags[tag].push(position))
                letters[position] = generatedTags
            })

            let options = false

            let max = -1

            Object.keys(letters).forEach(letter => {
                let score = letters[letter].reduce((a, c,) => a + tagsScores[c], 0)

                if (score > max) {
                    options = [letter]
                    max = score
                } else if (score === max) {
                    options.push(letter)
                }
            })

            // let getMaxWithTag = tag => {
            //     let max = Math.max(...tags[tag].map(letter => letters[letter].length))
            //     options = tags[tag].filter(letter => letters[letter].length === max)
            // }

            // if (tags.shoot.length) getMaxWithTag('shoot')
            // if (!options && tags.block.length) getMaxWithTag('block')
            // if (!options && tags.buildStage2.length) getMaxWithTag('buildStage2')
            // if (!options && tags.buildStage1.length) getMaxWithTag('buildStage1')
            // if (!options && tags.shallowBlock.length) getMaxWithTag('shallowBlock')

            return options
        },
        placeTagging (position, [currentPlayerPieces, opponentsPieces]) {
            const groups = this.groups[position]
            const connections = this.points[position].connections

            let tags = []

            // tags = [
            //     shoot: group where both letters are current player pieces
            //     block: group where both letters are opponents pieces and the opponent has a piece that can move into this position
            //     buildStage2 (ready to shoot on the next round),
            //     buildStage1 (there's already a piece in the group but there is no shooting opportunity in the next round),
            //     shallowBlock: group where there is one opponent piece and a vacant piece
            // ]

            let opponentCanShoot = group => {
                return !!(
                    group.filter(letter => opponentsPieces.includes(letter)).length === 2 &&
                    (
                        this.opponentMoves < 12 ||
                        opponentsPieces.length === 3 ||
                        connections.filter(letter => 
                            opponentsPieces.includes(letter) && 
                            !group.includes(letter)
                        ).length
                    )
                )
            }

            let buildStage2 = group => {
                
                let openConnections = this.points[position].connections.filter(letter => ![...currentPlayerPieces, ...opponentsPieces].includes(letter))
                openConnections.forEach(option => {
                    this.groups[option]
                        .filter(group => group.filter(letter => currentPlayerPieces.includes(letter)).length === 2)
                        .forEach(() => tags.push('buildStage2'))

                })

                // console.log('verdict', verdict)
                // return verdict
            }

            let buildStage1 = group => {
                if (group.filter(letter => currentPlayerPieces.includes(letter)).length !== 1) return false
                
                // make sure the other piece is vacant
                let otherPiece = group.filter(letter => ![...currentPlayerPieces, ...opponentsPieces].includes(letter))
                if (otherPiece.length !== 1) return false
                return (
                    this.opponentMoves < 12 ||
                    currentPlayerPieces.length === 3 ||
                    this.points[otherPiece[0]].connections.some(letter => (
                        !group.includes(letter) &&
                        ![...currentPlayerPieces, ...opponentsPieces].includes(letter)
                    ))
                )
            }

            let shallowBlock = group => {
                return (
                    group.filter(letter => opponentsPieces.includes(letter)).length === 1 &&
                    group.filter(letter => !currentPlayerPieces.includes(letter) && !opponentsPieces.includes(letter)).length === 1
                )
            }

            groups.forEach(group => {
                if (group.filter(letter => currentPlayerPieces.includes(letter)).length === 2) tags.push('shoot')
                if (opponentCanShoot(group)) tags.push('block')
                buildStage2(group)
                if (buildStage1(group)) tags.push('buildStage1')
                if (shallowBlock(group)) tags.push('shallowBlock')
            })
            return tags  
        },
        select (froms) {
            let bestFrom = ''
            let bestscore = -1
            let bestOptions = false
            // get open positions
            // let openPositions = []

            let scoreOption = (from, options) => {
                let tagScores = {
                    shoot: 50,
                    block: 40,
                    buildStage2: 30,
                    buildStage1: 20,
                    shallowBlock: 10
                }
                if (options) {
                    console.log('options', options)
                    let score = Number(tagScores[options[0]] + options[2])
                    if (score > bestscore) {
                        console.log('best', from, options)
                        bestscore = score
                        bestFrom = [from]
                        bestOptions = options[1]
                    }
                }
            }

            froms.forEach(from => {
                let openPositions = []
                if (this.currentPlayerPieces.length === 3) {
                    openPositions = Object.keys(this.points)
                                        .filter(letter => 
                                            ![...this.opponentPieces, ...this.currentPlayerPieces].includes(letter)
                                        )
                } else {
                    openPositions = this.points[from].connections.filter(letter => {
                        return (
                            !this.currentPlayerPieces.includes(letter) &&
                            !this.opponentPieces.includes(letter)
                        )
                    })
                }
                // letters -> tags
                // tags -> letters
                let letters = {}
                let tags = {
                    shoot: [],
                    block: [],
                    buildStage2: [],
                    buildStage1: [],
                    shallowBlock: []
                }
                openPositions.forEach(position => {
                    let currentPieces = this.currentPlayerPieces.filter(letter => letter !== from)
                    console.log('FROM:', from, this.currentPlayerPieces, currentPieces)
                    let generatedTags = this.placeTagging(position, [currentPieces, this.opponentPieces])
                    console.log('generatedTags:', generatedTags)
                    generatedTags.forEach(tag => tags[tag].push(position))
                    letters[position] = generatedTags
                })
        
                let options = null
        
                let getMaxWithTag = tag => {
                    let max = Math.max(...tags[tag].map(letter => letters[letter].length))
                    options = [tag, tags[tag].filter(letter => letters[letter].length === max), max]
                }
                console.log('best tags', tags)
                if (tags.shoot.length) getMaxWithTag('shoot')
                if (!options && tags.block.length) getMaxWithTag('block')
                if (!options && tags.buildStage2.length) getMaxWithTag('buildStage2')
                if (!options && tags.buildStage1.length) getMaxWithTag('buildStage1')
                if (!options && tags.shallowBlock.length) getMaxWithTag('shallowBlock')

                scoreOption(from, options)
            })
            
            if (bestOptions) {
                let randIndex = Math.floor(Math.random() * (bestOptions.length - 1))
        
                this.simQueue[1] = bestOptions[randIndex]

                return bestFrom
            }

            
            return false
        },
        remove (options) {
            let bestScore = -1
            let bestOption = false

            let scoreTags = (tags) => {
                let tagScore = 0
                
                if (tags.includes('buildingPiece')) tagScore = 10
                if (tags.includes('blockingPiece')) tagScore = 20
                if (tags.includes('shootingGroup')) tagScore = 30
                if (tags.includes('shootingPiece')) tagScore = 40
                
                if (tags.filter(tag => tag == 'shootingGroup' || tag == 'shootingPiece').length >=2) tagScore += 10

                return tagScore + tags.length
            }
            
            options.forEach(option => {
                let tagScore = scoreTags(this.removeTagging(option, [this.currentPlayerPieces, this.opponentPieces]))
                if (tagScore > bestScore) {
                    bestScore = tagScore
                    bestOption = [option]
                }
            })

            return bestOption
        },

        removeTagging (position, [currentPlayerPieces, opponentsPieces]) {
            const groups = this.groups[position]
            const connections = this.points[position].connections

            let tags = []

            // tags = [
            //  shootingPiece: piece can shoot in the next move
            //  shootingGroup: piece is part of a group that can be shot in the next round
            //  blockingPiece: piece is blocking my opportunity to shoot in the next move
            //  buildingPiece: piece has another opponent piece in the same group and a vacant position
            // ]
            
            //  shootingPiece: piece can shoot in the next move
            connections.filter(letter => ![...currentPlayerPieces, ...opponentsPieces].includes(letter)).forEach(space => {
                // find group that doesn't contain the current position
                this.groups[space].filter(group => !group.includes(position)).forEach(group => {
                    // check that both pieces in group belong to opponent
                    if (group.filter(letter => opponentsPieces.includes(letter)).length === 2) tags.push('shootingPiece')
                })
            })
            
            //  shootingGroup: piece is part of a group that can be shot in the next round
            groups.filter(group => {
                // find group with one opponetpiece and one vacant space
                return (
                    group.some(letter => opponentsPieces.includes(letter)) &&
                    group.some(letter => ![...currentPlayerPieces, ...opponentsPieces].includes(letter))
                )
            }).forEach(group => {

                tags.push('blockingPiece')

                //get the vacant space and check that it has connection that is not in the group and is an opponent piece
                let space = group.find(letter => ![...currentPlayerPieces, ...opponentsPieces].includes(letter))
                let spaceConnections = this.points[space].connections
                spaceConnections.forEach(connection => {
                    if (
                        !group.includes(connection) &&
                        opponentsPieces.includes(connection)
                    ) {
                        tags.push('shootingGroup')
                    }
                })
            })
            
            //  blockingPiece: piece is blocking my opportunity to shoot in the next move
            groups.filter(group => {
                // find group where both pieces belong to current player
                return group.filter(letter => currentPlayerPieces.includes(letter)).length == 2
            }).forEach(group => {
                // find a connection that belongs to the current Player and is not in the group
                connections.filter(letter => !group.includes(letter) && currentPlayerPieces.includes(letter)).forEach(() => tags.push('blockingPiece'))
            })

            return tags
        }
    }
})