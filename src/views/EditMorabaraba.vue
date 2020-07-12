<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12 sm12 md6>
                <v-select
                    :items="Object.keys(boards)"
                    v-model="board"
                    label="Select a board"
                ></v-select>
            </v-flex>
            <v-flex xs12 sm12 md6>
                <v-select
                    :items="modes"
                    v-model="mode"
                    label="Select edit mode"
                ></v-select>
            </v-flex>
        </v-layout>

        <!-- load editor -->
        <GroupsEditor v-if="mode == 'groups'" :board="board" />
        <LinesEditor v-if="mode == 'lines'" :board="board" />
        <ConnectionsEditor v-if="mode == 'connections'" :board="board" />
        <PointsEditor v-if="mode == 'points'" :board="board" />

    </v-container>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import GroupsEditor from '../components/editMorabaraba/GroupsEditor'
import LinesEditor from '../components/editMorabaraba/LinesEditor'
import ConnectionsEditor from '../components/editMorabaraba/ConnectionsEditor'
import PointsEditor from '../components/editMorabaraba/PointsEditor'

export default {
    components: {
        GroupsEditor,
        LinesEditor,
        ConnectionsEditor,
        PointsEditor
    },
    name: 'EditMorabaraba',
    data () {
        return {
            board: "sotho",
            modes: ['connections', 'lines', 'groups', 'points'],
            mode: ''
        }
    },
    computed: {
        ...mapGetters(['boards'])
    }
}
</script>

<style>
    svg {
        width: 100%;
        height: 100%;
        max-width: 500px;
        margin: auto;
        display: block;
    }
    circle {
        cursor: pointer;
    }
    .highlighted {
        stroke: yellow;
    }
    .selected {
        stroke: lime;
    }
    .theme--dark.v-icon {
        color: transparent;
    }
</style>