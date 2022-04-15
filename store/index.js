import axios from 'axios'

export const state = () => ({
    counter: 0
})

export const mutations = {
    addToCounter(state, payload) {

        state.counter = state.counter + payload;
    },

    subtractToCounter(state, payload) {
        if (state.counter === 0) return
        state.counter = state.counter - payload;
    }

}

export const actions = {
    async addRandomNumber(context) {
        let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
        context.commit("addToCounter", data.data)
    }
}