var app = new Vue({

	el: '#vm',
	data: {
		mensaje: 'Aprende Vue.js Fácil',
		src: 'https://vuejs.org/images/logo.png'
	},
	methods:{
		
		destruir: function(){

			this.$destroy();
		}
	},
	beforeCreate: function(){

		console.log( "beforeCreate()" );
	},
	created: function(){

		console.log( "created()" );
	},
	beforeMount: function(){

		console.log( "beforeMount()" );
	},
	mounted: function(){

		console.log( "mounted()" );
	},
	beforeUpdate: function(){

		console.log( "beforeUpdate()" );
	},
	update: function(){

		console.log( "update()" );
	},
	beforeDestroy: function(){

		console.log( "beforeDestroy()" );
	},
	destroy: function(){

		console.log( "destroy()" );
	}
});