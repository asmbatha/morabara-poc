<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm12 md6>
                <v-btn outline color="primary" @click="clear" dark>clear</v-btn>
                <v-btn outline color="primary" @click="add" dark>add group</v-btn>
                <v-btn outline color="primary" :disabled="!groupExists" @click="remove" dark>remove group</v-btn>
            </v-flex>
            <v-flex align-center md6 xs12>
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
                            :class="{
                                highlighted: highlights.includes(letter),
                                selected: selected.includes(letter)
                            }"
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
        selected: [],
        highlights: []
    }),
    computed: {
        ...mapGetters(['boards']),
        groupExists () {
            return this.groups.includes(this.selected.join(''))
        },
        points () {
            return this.boards[this.board].points
        },
        lines () {
            return this.boards[this.board].lines
        },
        groups () {
            let obj = this.boards[this.board].groups
            let groups = []
            for (const letter in obj) {
                if (obj.hasOwnProperty(letter)) {
                    groups = [
                        ...groups,
                        ...obj[letter].map(x => [...x, letter].sort().join(''))
                    ]
                }
            }

            return [...new Set(groups)]
        }
    },
    methods: {
        ...mapMutations(['addGroup', 'removeGroups']),
        handleClick ({letter}) {
            if (this.selected.includes(letter)) {
                // remove letter
                this.selected = this.selected.filter(x => x !== letter)
            } else {
                this.selected = [...this.selected, letter].sort()
                // add letter
            }

            let highlights = this.groups 
            this.selected.forEach(letter => {
                highlights = highlights.filter(x => x.includes(letter))
            })
            this.highlights = [...new Set(highlights.reduce((c, a) => [...c, ...a], []))]

        },
        clear () {
            this.selected = []
        },
        add () {
            this.addGroup({
                board: this.board,
                group: this.selected
            })
        },
        remove () {
            this.removeGroups({
                board: this.board,
                group: this.selected
            })
        }
    }
}
</script>

<style>
    .highlighted {
        stroke: yellow;
    }
    .selected {
        stroke: lime;
    }
</style>
