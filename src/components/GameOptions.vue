<template>
    <v-bottom-sheet v-model="open" inset>
        <v-card tile>
            <v-card-text>
                <v-list>
                    <v-list-tile @click="matchOptions('closeMatch')" avatar>
                        <v-list-tile-avatar>
                            <v-icon>delete</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            Resign match
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile  @click="matchOptions('saveMatch')" avatar>
                        <v-list-tile-avatar>
                            <v-icon>save</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            Save match
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile @click="matchOptions('toggleInstructions')">
                        <v-list-tile-content>
                            <v-switch v-model="showInstructions" label="Show instructions"></v-switch>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<script>
export default {
    props: ['visible', 'displayInstructions'],
    data() {
        return {
            showInstructions: false,
            open: false
        }
    },
    mounted () {
        this.open = this.visible
        this.showInstructions = this.displayInstructions
    },
    watch: {
        open (val) {
            if (!val) this.$emit('closeGameOptions')
        }
    },
    methods: {
        matchOptions (action) {
            this.$emit('matchOption', action)
        }
    }
}
</script>

<style>

</style>
