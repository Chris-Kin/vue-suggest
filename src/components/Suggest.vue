/*
 * @File: suggest组件
 * @wiki:
 * @Author: mingyan.yu
 * @Date: 2018-05-30 19:52:23
 * @USAGE:

      <Suggest
        :data="list"
        @on-select="handleSelect"
        @on-input-change="handleSuggest"
      >
        <div class="green" slot-scope="{ item }">
          {{ item.name }}
        </div>
      </Suggest>

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

<template>
  <div class="container">
    <input
      type="text"
      v-model="keyword"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="handleInputBlur"
      @focus="handleInputFocus"
      @input="handleInputChange"
    />
    <section class="option-wrapper" @mouseleave="handleMouseLeave" :class="{ show: isShowOption }">
      <div
        class="option"
        :key="el[code]"
        :class="{select: el.isSelect}"
        v-for="el in dataSource"
        @click="handleSelect(el)"
        @mouseover="handleHover(el)"
      >
        <slot :item="el">{{el[label]}}</slot>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    label: {
      type: String,
      default: 'name',
    },
    code: {
      type: String,
      default: 'code',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isShowOption: false,
      keyword: '',
      executing: false,
    };
  },
  computed: {
    dataSource() {
      return JSON.parse(JSON.stringify(this.data));
    },
  },
  methods: {
    handleInputFocus() {
      this.isShowOption = true;
    },
    handleInputBlur() {
      // fix: 立即失焦导致慢点击option无效
      setTimeout(() => {
        this.isShowOption = false;
      }, 100);
    },
    handleInputChange() {
      if (this.executing) {
        return;
      }
      this.$emit('on-input-change', this.keyword);
      this.executing = true;
      setTimeout(() => {
        this.executing = false;
      }, this.debounce);
    },
    handleSelect(item) {
      this.keyword = item[this.label];
      this.$emit('on-select', item);
      this.$emit('input', item[this.code]);
      this.dataSource.forEach((el) => {
        if (el[this.code] === item[this.code]) {
          el.isSelect = true;
        } else {
          el.isSelect = false;
        }
      });
    },
    handleHover(item) {
      this.$emit('on-option-hover', item);
    },
    handleMouseLeave() {
      this.$emit('on-selection-leave');
    },
  },
};
</script>
<style lang="less" scoped>
  .container {
    position: relative;
    text-align: left;
  }
  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    display: block;
    border-radius: 5px;
    padding: 0 10px;
    color: #495060;
    &:disabled {
      background-color: #f0f0f0;
      cursor: not-allowed;
    }
  }
  .option-wrapper {
    width: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 3px;
    box-shadow: 0 3px 3px #ccc;
    background-color: #fff;
    overflow: scroll;
    transition: all .2s;
    max-height: 0;
    &.show {
      max-height: 250px;
    }
    .option {
      padding: 0 10px;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
      &.select {
        color: #fff;
        background-color: #2d8cf0e6;
      }
    }
  }
</style>
