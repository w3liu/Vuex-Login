import service from '../../api/user'
import { SET_USER_INFO, REMOVE_USER_INFO } from '../mutation-types'

const state = {
  isLogin: false,
  userId: '',
  nickName: ''
}

const getters = {
  checkLogin: (state) => {
    return state.isLogin
  }
}

const actions = {
  login ({commit}, id) {
    let userInfo = service.getUserInfo(id)
    commit(SET_USER_INFO, userInfo)
  },
  loginOut ({commit}) {
    commit(REMOVE_USER_INFO)
  }
}

const mutations = {
  [SET_USER_INFO] (state, userInfo) {
    if (userInfo) {
      state.isLogin = true
      state.userId = userInfo.userId
      state.nickName = userInfo.nickName
    }
    console.log(state)
  },
  [REMOVE_USER_INFO] (state) {
    state.isLogin = false
    state.userId = ''
    state.nickName = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
