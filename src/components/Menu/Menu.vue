<template>
  <div class="menu">
    <el-menu default-active="1-4-1"
     @open="handleOpen" 
     text-color="black"
     active-text-color="red"
     @close="handleClose" 
     :collapse="isCollapes"
     >
      <h1>{{isCollapes ? "后台" : "后台管理"}}</h1>
      <el-menu-item 
      v-for="itme in noChildren" 
      :index="itme.path"
       :key="itme.path"
       @click="clickmenu(itme)"
       >
        <!-- 用v-for的方法对没有childer的数据进行遍历 -->
        <i :class="`el-icon-`+itme.icon"></i>
        <!-- 运用模板字符串的方法，进行数据的拼接 -->
        <span slot="title">{{itme.label}}</span>
      </el-menu-item>
      <el-submenu  v-for="itme in hasChilder" :index="itme.path" :key="itme.path">
        <template slot="title">
          <i :class="`el-icon-`+itme.icon"></i>
          <span slot="title">{{itme.label}}</span>
        </template>
        <el-menu-item-group text-color="black"
          active-text-color="red"
           v-for=" (subitme , subindex) in itme.children" 
           :key="subitme.path">
          <el-menu-item :index="subindex.path">{{subitme.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      // isCollapes:true,
      // 下面是自定义侧边栏数据
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home"
        },
        {
          path: "/user",
          name: "user",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage"
        },
        {
          path: "/mail",
          name: "mail",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage"
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickmenu(itme){
      // 点击事件路由跳转
        this.$router.push({
            name:itme.name
        })
    }
  },
  computed: {
    // 计算属性标签，用于遍历一级或者二级标签
    noChildren() {
      // 当便利的对象之中没有children这个属性的时候
      return this.menu.filter(itme => !itme.children);
      // 用filter用来过滤数组中对应的元素
    },
    hasChilder() {
      // 当便利的侧边栏对象之中存在children的时候进行返回
      return this.menu.filter(itme => itme.children);
    },
  isCollapes(){
      return this.$store.state.tab.isCollapes
    }
  }
};
</script>

<style>
@import "./menu.css";
</style>