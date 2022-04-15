export const state = () => ({
    counter: 0
})

export const mutations = {
    addToCounter(state, payload) {
        state.counter = state.counter + payload;
    },

    subtractToCounter(state, payload) {
        state.counter = state.counter - payload;
    }


}