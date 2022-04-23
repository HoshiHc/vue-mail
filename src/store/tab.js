export default {
    state:{
        // 定义初始的状态
        isCollapes:false
    },
    mutations:{
        // 定义改变的方法
        Collapesmenu(state){
            state.isCollapes = !state.isCollapes
        }
    }
}