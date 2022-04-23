import Vue  from 'vue'
import VueRouter from "vue-router"
import Mine from "../view/Mine.vue"

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        name:"Mine",
        component:Mine,
        children:[
            {
               path:"/Home",
               name:"home",
               component:()=>import("../view/home/home.vue")
            },
            {
                path:"/user",
                name:"user",
                component:()=>import("../view/user/user.vue")
            },
        
        ]
    
    }
]

const router = new VueRouter({
    // mode代表路由的一个匹配的模式
    mode:"history",
    routes,
})
export default router