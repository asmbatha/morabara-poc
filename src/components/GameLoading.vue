<template>
    <v-dialog
        v-model="visible"
        hide-overlay
        persistent
        width="500"
        >
        <v-card
            dark
        >
            <v-card-text>
                <div class="headline">{{gameName}}</div>
                Please stand by
                <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['gameName', 'visible'],
}
</script>

<style>

</style>
