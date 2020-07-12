<template>
    <v-container>
        <v-layout text-xs-center wrap >
            <v-flex xs12>
            </v-flex>

            <v-flex mb-4>
            </v-flex>

            <v-flex mb-5 xs12 >
                <v-layout justify-center>
                </v-layout>
            </v-flex>

            <v-flex xs12 mb-5 >
                <h2 class="headline font-weight-bold mb-3">Important Links</h2>

                <v-layout justify-center>
                    <a v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank" >
                        {{ link.text }}
                    </a>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({})
}
</script>

<style>
</style>
