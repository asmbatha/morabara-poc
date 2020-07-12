<template>
    <v-bottom-sheet v-model="visible" persistent inset>
        <v-card tile>
            <v-card-title primary-title>
                Choose your game
            </v-card-title>
            <v-card-text grid-list-xl>
                <v-container grid-list-xs style="padding: 0">
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-btn @click="selectOpponent('local')" block color="primary" dark>
                                2 player
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-btn @click="selectOpponent('ai')" block color="primary" dark>
                                Play against AI
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<script>
export default {
    props: ['visible'],
    methods: {
        selectOpponent (type) {
            this.$emit('opponentSelected', {type})
        }
    }
}
</script>

<style>

</style>
