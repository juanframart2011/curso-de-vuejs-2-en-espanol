import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.filter( 'suspensivo', function( texto ){
  return texto.substring( 0, 10 ) + '...';
});