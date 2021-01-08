<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <a href="#/button">点我显示按钮</a>
    <!-- <el-link type="primary" :underline="false">主要链接</el-link> -->
    <a href="#/layout">  Layout布局</a>
    <a href="#/container">Container</a>
    <a href="#/example1">Example1_container</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
