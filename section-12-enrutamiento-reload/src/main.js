import Vue from 'vue'
import App from './App.vue'/*
import VueRouter from 'vue-router'
import { routes } from './route.js'*/
import VueResource from 'vue-resource'

//Vue.use(VueRouter);
Vue.use(VueResource);

/*const router = new VueRouter()({
  routes: routes,
  mode: 'history'
})*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //router:router
}).$mount('#app')
