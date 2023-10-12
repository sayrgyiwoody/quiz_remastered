import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingStatus : false,
  },
  getters: {
    getLoadingStatus : (state) => state.loadingStatus,
  },
  mutations: {
  },
  actions: {
    setLoadingStatus : ({state},value) => state.loadingStatus = value,
  },
  modules: {
  }
})
