// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'web-base-css/dist/index.css';

import App from './App';
import suggest from '../dist/suggest';

Vue.config.productionTip = false;
Vue.use(suggest);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
