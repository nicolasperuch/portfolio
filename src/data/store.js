import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import socialMedia from './modules/socialMedia'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      header: header.data,
      meida: socialMedia.data
    }
})
  