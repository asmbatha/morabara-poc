<template>
    <v-container>
        <v-layout>
            <v-flex align-center xs12>
                <v-card class="mobile_wrapper" flat>
                    <v-toolbar color="primary" dark flat >
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                    </v-toolbar>

                    <v-layout row pb-2>
                        <v-flex xs12>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
    name: 'MobilePreview',
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters({
        })
    },
    methods: {
    }
}
</script>

<style>
    .mobile_wrapper {
        width: 375px;
        height: 812px;
        background: black;
    }
</style>