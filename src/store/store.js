import vue from 'vue'
import vuex from 'vuex'
import homepage from './modules/homepage.js'
import messageboard from './modules/messageboard.js'
vue.use(vuex)

export default new Vuex.store({
  modules: {
    homepage,
    messageboard
  }
})
