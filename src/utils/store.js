import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        grid: null,
    },
    getters: {
        getGrid(state) {
            return state.grid
        }
    },
    mutations: {
        setGrid(state, grid) {
            state.grid = grid
        }
    }
})

export default store
