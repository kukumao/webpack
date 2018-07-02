import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/nav/home/index';
// DEMO管理
import DemoMgr from 'views/demo/index';
import DemoMgrChildRoutes from 'views/demo/router';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/',
      redirect: 'DemoMgr'
    }, {
      path: 'demoMgr',
      component: DemoMgr,
      children: DemoMgrChildRoutes
    }]
  }]
});
