<template>
  <div id="app">
    <div id="main">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <h1>问卷调查表填写</h1>
    </div>
    <router-view style="margin: 0 auto; width: 80%"/>
  </div>
</template>

<style>
  #app{margin: 0 auto; height: 800px; width: 500px}
  a{text-decoration: none; color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display: inline-block; width: 100px}
  #body p{ color: rgba(0,55,247,0.53); font-size: 20px; font-weight: bolder;display:inline-block;width: 50px}
</style>
