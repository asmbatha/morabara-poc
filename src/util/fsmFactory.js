import Vue from 'vue'

export default (
    name = '',
    data = {},
    mixins = []
) => {
    return new Vue({
        name,
        mixins,
        data() {
            return data
        },
        computed: {
            currentState () {
                return this.states[this.state]
            },
            state_handlers () {
                return Object.keys(this.states[this.state]._on)
            },
        },
        watch: {
            state: {
                handler (state, prevState) {
                    this.logInfo(`changing state from \`${prevState}\` to \`${state}\``)
                    if (prevState) this.unmountEventHandlers(this.states[prevState]._on)
                    this.mountEventHandlers(this.states[state]._on)
                    this.$emit('ENTER')
                },
                immediate: true
            }
        },
        methods: {
            mountEventHandlers (state) {
                this.logInfo(`mounting event handlers [${Object.keys(state).join(', ')}]`)
                let inst = this
                for (const event in state) {
                    this.$on(event, (...args) => {
                        this.logInfo({event, args})
                        state[event].apply(inst, args)
                    })
                }
            },
            unmountEventHandlers (state) {
                this.logInfo(`unmounting event handlers [${Object.keys(state).join()}]`)
                let inst = this
                for (const event in state) {
                    this.$off([event, (...args) => state[event].apply(inst, args)])
                }
            },
            changeStateTo (state) {
                this.state = state
            },
            logInfo (payload) {
                console.log(`FSM(${this.$options.name})::${this.state}:`, payload)
            },
            logWarning (err) {
                console.warn(`FSM(${this.$options.name})::${this.state}:`, err)
            },
            logError (err) {
                console.error(`FSM(${this.$options.name})::${this.state}:`, err)
            }
        }
    })
}