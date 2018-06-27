import suggestComponent from './Suggest';

const suggest = {
  install(Vue) {
    Vue.component(suggestComponent.name, suggestComponent);
  },
};
// 支持直接用标签引入suggest.js的方式
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(suggest);
}
export default suggest;
