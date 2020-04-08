import Vue from 'vue'
import App from './App.vue'

Vue.directive( 'decorar',{

	bind( el, binding, vnode ){

		el.style.fontFamily = binding.value;

		if( binding.arg == 'grande' ){
			el.style.fontSize = '50px';
		}

		if( binding.modifiers['negrilla'] ){

			el.style.fontWeight = 'bold';
		}
	}
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
