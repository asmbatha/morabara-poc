<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs6 sm6 md6>
                <v-switch
                    v-model="setSelected"
                    :label="`set Selected`"
                >
                </v-switch>
            </v-flex>
            <v-flex xs6 sm6 md6>
                <v-btn outline color="primary" dark @click="setLines">set lines</v-btn>
            </v-flex>
            <v-flex xs12 sm12 md6>
                <v-slider :label="selected" v-model="targetIndex" min="0" :max="Object.keys(points).length - 1" ticks="always" thumb-label thumb-size="64" />
            </v-flex>
            <v-flex align-center md12 xs12>
                <svg viewBox="0 0 400 400">
                    <template v-for="line in lines">
                        <line
                            :key="`line-${line[0]}-${line[1]}`"
                            :x1="points[line[0]].coordinates[0]"
                            :y1="points[line[0]].coordinates[1]"
                            :x2="points[line[1]].coordinates[0]"
                            :y2="points[line[1]].coordinates[1]"
                            style="stroke:rgba(255, 255, 255, 0.1);stroke-width:2" 
                        />
                    </template>
                    <template v-for="(obj, letter) in points">
                        <circle
                            :key="`point-${letter}`"
                            :cx="obj.coordinates[0]"
                            :cy="obj.coordinates[1]" r="10" stroke="black" stroke-width="3" fill="grey"
                            :class="{selected: selected == letter, highlighted: highlights.includes(letter)}"
                            @click="handleClick({letter})"
                        />
                    </template>
                </svg>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        board: String
    },
    data: () => ({
        targetIndex: 0,
        setSelected: false
    }),
    computed: {
        ...mapGetters(['boards']),
        selected () {
            return Object.keys(this.boards[this.board].points)[this.targetIndex]
        },
        points () {
            return this.boards[this.board].points
        },
        lines () {
            // return this.boards[this.board].lines
            let lines = []
            Object.keys(this.points).forEach(key => {
                this.points[key].connections.forEach(letter => {
                    lines.push([letter, key].sort().join(''))
                })
            })

            return [...new Set(lines)].map(x => x.split(''))
        },
        highlights () {
            return this.boards[this.board].points[this.selected].connections || []
        }
    },
    methods: {
        ...mapMutations(['addConnection', 'removeConnection', 'updateLines']),
        setLines () {
            this.updateLines({
                board: this.board,
                lines: this.lines,
            })
        },
        handleClick ({letter}) {
            if (this.setSelected) {
                return this.targetIndex = Object.keys(this.boards[this.board].points).indexOf(letter)
            }

            if (this.highlights.includes(letter)) {
                this.removeConnection({
                    board: this.board,
                    connection: [this.selected, letter]
                })
            } else {
                this.addConnection({
                    board: this.board,
                    connection: [this.selected, letter]
                })
            }
        }
    }
}
</script>

<style>
</style>
