import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingStatus : false,
    darkModeStatus : false,
  },
  getters: {
    darkModeStatus : (state) => state.darkModeStatus,
    getLoadingStatus : (state) => state.loadingStatus,
  },
  mutations: {
  },
  actions: {
    setLoadingStatus : ({state},value) => state.loadingStatus = value,
    setDarkMode : ({state},value) => state.darkModeStatus = value,
  },
  modules: {
  }
})
