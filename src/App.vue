<template>
  <div id="app">
    <Suggest/>
  </div>
</template>

<script>
import Suggest from './components/Suggest';

export default {
  name: 'App',
  components: {
    Suggest,
  },
};
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
