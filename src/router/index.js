import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
//const Router = new VueRouter({ routes })
/*
const routerView = {
  name: 'router-view',
  render: h => h('div'),
};
Vue.component('router-view', routerView);
*/
export default new VueRouter({ routes })