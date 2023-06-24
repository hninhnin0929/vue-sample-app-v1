<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">Home Page</router-link>
    <router-link to="/Login">Login Page</router-link>
    <router-link to="/Profile/Hnin">Hnin's Profile Page</router-link>
    <router-link to="/Profile/Snow">Snow's Profile Page</router-link>
    <router-link to="/Profile/Nara">Nara's Profile Page</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
    
}
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
