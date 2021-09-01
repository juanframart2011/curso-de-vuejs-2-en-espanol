var app = new Vue({

	el: '#vue',
	data: {
		mensaje: 'Aprende Vue.js Fácil',
		src: 'https://vuejs.org/images/logo.png'
	},
	methods:{
		
		mostrarMensaje: function(){

			return 'Aprende vue.js fácilmente -- MM'
		}
	}
});