<template>
    <v-app dark>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer
            dark
            height="auto"
        >
            <v-card
            class="flex"
            flat
            tile
            >
                <v-card-actions class="grey darken-3 justify-center">
                    <strong>w3ppmedia</strong>
                </v-card-actions>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
    // import conditionalRequire from './conditionalRequire'

    export default {
        mounted() {
            // moduleIsAvailable
        },
        // mixins: [
        //     conditionalRequire('home', 'mixins/home')
        //     // require('mixins/global'), // a regular module - loaded always
        //     // require('mixins/navigation'), // a regular module - loaded always
        //     // conditionalRequire('home', 'mixins/home'), // only load when on the "/home" page
        //     // conditionalRequire('profile', 'mixins/profile'), // only load when on the "/profile" page
        //     // conditionalRequire(['about', 'contact'], 'mixins/forms') // load on "/about" and "/contact"
        // ]
    }
</script>
