<template>
  <h1>123456</h1>
  <h2>123456</h2>
  <h3>123456</h3>
  <h4>123456</h4>
</template>

<script lang="ts">
import { inject } from 'vue'
export interface Num {
  num: number
}
const p = inject('test')
console.log(p)
export default {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
