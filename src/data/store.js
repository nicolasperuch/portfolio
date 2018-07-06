import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header'
import socialMedia from './modules/socialMedia'
import techList from './modules/techList'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      header: header.data,
      media: socialMedia.data,
      techList: techList.data
    }
})
  