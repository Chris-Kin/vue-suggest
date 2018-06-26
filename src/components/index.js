import suggestComponent from './Suggest';

const suggest = {
  install(Vue) {
    Vue.component(suggestComponent.name, suggestComponent);
  },
};

export default suggest;
