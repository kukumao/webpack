{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import 'normalize.css';// A modern alternative to CSS resets
import Element from 'element-ui';
import '@/assets/style/index.scss'; // global css
import App from './App';
import router from './router';
import { initAxios } from '@/common/fetch';
import { init } from '@/common/bus';
// 使用element-ui
Vue.use(Element);
// 创建axios实例
initAxios();
init();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
