var app = new Vue({

	el: '#vm',
	data: {
		imagen: 'http://lorempixel.com/300/200/',
		texto: 'Welcome Course VueJs 2',
		textHtml: '<strong>Welcome...........</strong>',
		mostrar: true,
		parrafo: 1,
		paises: [
			'México',
			'España',
			'Colombia'
		]
	},
	computed:{
		
		total: function(){

			return this.primero + this.segundo + this.tercero + this.cuarto;
		}
	}
});