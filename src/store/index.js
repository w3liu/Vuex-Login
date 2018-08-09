import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementNum (state, n) {
      state.count += n
    },
    [SOME_MUTATION] (state) {}
  },
  actions: {
    increment ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    incrementNum ({ commit }, n) {
      setTimeout(() => {
        commit('incrementNum', n)
      }, 1000)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

export default store
