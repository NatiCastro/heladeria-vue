<template>
  <NavBar />
  <router-view></router-view>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
#app {
  font-family:'Noto Sans', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
