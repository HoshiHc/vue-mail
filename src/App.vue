<template>
  <div id="app">
          <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  // import Herder from './components/Herder/Herder.vue';
  // import Menu from './components/Menu/Menu.vue'
export default {
  name: 'App',
  components: {
    // Herder,
    // Menu
  }
}
</script>

<style>
#app {
  height: 100%;
 text-align: center;
 /* color: black; */
}
@import "./app.css"
</style>
