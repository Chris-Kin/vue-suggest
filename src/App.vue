<template>
  <div id="app">
    <span>所在城市：</span>
    <Suggest
      class="dis-ib w300"
      :data="list"
      v-model="target"
      @on-select="handleSelect"
      @on-input-change="handleSuggest"
    />
  </div>
</template>

<script>
import Suggest from './components/Suggest';

export default {
  name: 'App',
  components: {
    Suggest,
  },
  data() {
    return {
      list: [],
      target: '',
    };
  },
  methods: {
    handleSelect() {

    },
    handleSuggest(val) {
      const newList = [];
      const count = Math.round((Math.random(0, 1) * 10)) + 3;
      for (let i = 0; i < count; i += 1) {
        newList.push({
          code: i,
          name: `${val}--${i}`,
        });
      }
      this.list = newList;
    },
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
