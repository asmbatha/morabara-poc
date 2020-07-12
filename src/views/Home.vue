<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center>
            <v-flex md3>
                <v-card
                    to="select_board"
                    tag
                    raised
                    ripple
                    hover
                >
                    <v-card-title primary-title>
                        <div class="headline">Play offline</div>
                    </v-card-title>
                    <v-card-text>
                        play again AI or another player on the same device
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex md3>
                <v-card
                    tag
                    raised
                    ripple
                    hover
                >
                    <v-card-title primary-title>
                        <div class="headline">Login</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="orange darken-2" dark>
                            <v-icon dark left>person_add</v-icon>google
                        </v-btn>
                        <v-btn color="orange darken-2" dark>
                            <v-icon dark left>person_add</v-icon>facebook
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
    }
</script>
