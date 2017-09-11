import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './modules/homepage.js'
import messageboard from './modules/messageboard.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homepage,
    messageboard
  }
})
