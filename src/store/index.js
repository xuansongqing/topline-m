import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录用户，一个对象，包含 token 信息
    // user: null
    // user: JSON.parse(window.localStorage.getItem('user'))
    user: getItem('user')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // window.localStorage.setItem('user', JSON.stringify(state.user))
      setItem('user', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
