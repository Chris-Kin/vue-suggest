# vue2.0-suggest

> Suggest component based on Vue2.0

## api
```js
/*
 * disable - 组件的禁用状态
 * debounce - on-input-change的节流周期，默认300ms
 * placeholder - placeholder，默认「请输入」
 * label - 渲染在下拉项中的内容，默认「name」，当使用slot指定option的渲染内容时，该属性被忽略
 * code - 下拉项选中时同步给model的字段，默认「code」
 * data - 下拉列表数据
 * on-input-change - 输入框内容改变事件
 * on-select - 下拉项选中事件
 * on-option-hover - 下拉项鼠标mouseover事件
 * on-selection-leave - 下拉框mouseleave事件
 */
```

## usage
### npm
1. install the package
```bash
$ npm install vue2.0-suggest
```
2. register the component
import suggest from 'vue2.0-suggest'
Vue.use(suggest);
3. use
```js
<Suggest
  class="dis-ib w300"
  :data="list"
  v-model="target"
  @on-select="handleSelect"
  @on-input-change="handleSuggest"
/>
```
### CDN
not supported yet

## example
```js
<template>
  <div id="app">
    <span>city：</span>
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

export default {
  name: 'App',
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
```
