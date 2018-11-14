import Vue from 'vue'
import Vuex from 'vuex'
import City from './City'
Vue.use(Vuex)

export default new Vuex.Store({
    // vuex 严格模式
    strict: true,
    modules:{
        City
    }

})