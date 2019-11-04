import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        myCount(state) {
            return state.count
        }
    },
    mutations: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        }
    },
    actions: {
        myIncrease(context) {
            context.commit('increment')
        },
        myDecrease(context) {
            context.commit('decrement')
        }
    },
    modules: {

    }
})