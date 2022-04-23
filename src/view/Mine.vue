<template>
      <el-container>
          <Menu></Menu>
        <el-container>
        <el-header>
          <Herder></Herder>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
     </el-container>
     </el-container>
  
</template>

<script>
import  Herder from '../components/Herder/Herder.vue'
import  Menu from '../components/Menu/Menu.vue'
export default {
       name:"Mine",
       components:{
         Herder,
         Menu
       },
       data(){
         return{}
       }
}
</script>

<style>
   @import "./home.css"
</style>