import Vue  from 'vue'
import VueRouter from "vue-router"
import Home from "../view/Home.vue"

Vue.use(VueRouter)
// 给vuerouter进行全局引入
const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    
    }
]

const router = new VueRouter({
    // mode代表路由的一个匹配的模式
    mode:"history",
    routes,
})
export default router