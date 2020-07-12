<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center>
            <v-flex md4 v-for="(board, boardId) in boards" :key="boardId">
                <v-card>
                    <svg viewBox="0 0 400 400" class="board">
                        <line
                            v-for="line in board.lines"
                            :key="`line-${line[0]}-${line[1]}`" 
                            :x1="board.points[line[0]].coordinates[0]" 
                            :y1="board.points[line[0]].coordinates[1]" 
                            :x2="board.points[line[1]].coordinates[0]" 
                            :y2="board.points[line[1]].coordinates[1]"
                        />
                            <circle
                                v-for="(obj, letter) in board.points"
                                :key="`point-${letter}`" 
                                :cx="obj.coordinates[0]" :cy="obj.coordinates[1]" 
                                fill="grey" 
                            />
                    </svg>
                    <v-card-title>
                        {{board.name}}
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import i16 from '@/views/boards/i16/board'
import p20 from '@/views/boards/p20/board'
import x32 from '@/views/boards/x32/board'
import x40 from '@/views/boards/x40/board'
import y40 from '@/views/boards/y40/board'
import k22 from '@/views/boards/k22/board'

export default {
    name: 'SelectBoard',
    data: () => ({
        boards: [
            i16,
            p20,
            x32,
            x40,
            y40,
            k22,
        ]
    }),
    mounted() {
        // // console.log('getDirectories', getDirectories('.'))
        // console.log('lstatSync', lstatSync)
        // console.log('readdirSync', readdirSync)
    }
}
</script>

<style lang="scss" scoped>
.board {
    circle {
        r: 1;
        fill: grey;
    }
}
</style>
