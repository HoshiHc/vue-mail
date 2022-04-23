<template>
  <div class="el-herder">
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" color="black" @click="handmenu"></el-button>
    </div>
    <div class="r-content">
      <el-dropdown size="mini">
        <span class="el-dropdown-link">
            {{userImg}}
        </span>
        <el-dropdown-menu slot="dropdown" size="mini">
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Herder",
  data() {
    return {
      userImg:"a"
    };
  },
  methods:{
    handmenu(){
     return  this.$store.commit("Collapesmenu")
    }
  }
};
</script>

<style>
@import "./index.css";
</style>