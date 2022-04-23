import Vue from "vue"
import Vuex from "vuex"
import tab from "./tab"
Vue.use(Vuex)

export default new Vuex.Store({
    // 创建实例
    state:{},
    modules:{
        tab
    }
})