<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs6 sm6 md6>
                <v-btn outline color="primary" dark @click="newPoint">new point</v-btn>
                <v-btn outline color="error" dark @click="removePoint">remove point</v-btn>
                <v-btn outline color="primary" dark @click="updatePoints">update points</v-btn>
            </v-flex>
            <v-flex xs6 sm6 md6
                v-if="points[selected]"
            >
                <v-container
                    fluid
                    grid-list-lg
                >
                    <v-layout
                    row
                    wrap
                    >
                        <v-flex xs9>
                            <v-slider
                                v-model="points[selected].coordinates[0]"
                                :max="400"
                                label="X"
                            ></v-slider>
                        </v-flex>

                        <v-flex xs3>
                            <v-text-field
                                v-model="points[selected].coordinates[0]"
                                class="mt-0"
                                type="number"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs9>
                            <v-slider
                                v-model="points[selected].coordinates[1]"
                                :max="400"
                                label="Y"
                            ></v-slider>
                        </v-flex>

                        <v-flex xs3>
                            <v-text-field
                                v-model="points[selected].coordinates[1]"
                                class="mt-0"
                                type="number"
                            ></v-text-field>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex align-center md12 xs12>
                <svg viewBox="0 0 400 400">
                    <template v-for="(obj, letter) in points">
                        <circle
                            :key="`point-${letter}`"
                            :cx="obj.coordinates[0]"
                            :cy="obj.coordinates[1]" r="10" stroke="black" stroke-width="3" fill="grey"
                            :class="{selected: selected == letter}"
                            @click="handleClick({letter})"
                        />
                    </template>
                </svg>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: {
        board: String
    },
    data: () => ({
        points: {},
        selected: '',
        allLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az']
    }),
    mounted() {
        this.points = this.boards[this.board].points
    },
    computed: {
        ...mapGetters(['boards']),
    },
    methods: {
        ...mapMutations(['setPoints']),
        getAvailableLetter () {
            return this.allLetters.find(letter => !Object.keys(this.points).includes(letter))
        },
        updatePoints () {
            window.allPoints = Object.keys(this.points).map(letter => {
                    this.points[letter].letter = letter
                    return this.points[letter]
                }).sort((a, b) => {
                    if (a.coordinates[1] < b.coordinates[1]) return -1
                    else if (a.coordinates[1] > b.coordinates[1]) return 1
                    else if (a.coordinates[0] < b.coordinates[0]) return -1
                    else if (a.coordinates[0] > b.coordinates[0]) return 1
                    else return 0
                })
            let allLetters = this.allLetters
            let allPoints = window.allPoints
            let letterMap = {}
            let updatedPoints = {}

            for (let index = 0; index < allPoints.length; index++) {
                let letter = allLetters[index]
                updatedPoints[letter] = {...allPoints[index], letter, connections: []}
            }

            this.setPoints({
                board: this.board,
                points: updatedPoints
            })
        },
        newPoint () {
            let letter = this.getAvailableLetter()
            Vue.set(this.points, letter, { "coordinates":[0,0],"connections":[], letter })
            this.selected = letter
        },
        removePoint () {
            Vue.delete(this.points, this.selected)
        },
        handleClick ({letter}) {
            this.selected = letter
        }
    }
}
</script>

<style>
</style>
