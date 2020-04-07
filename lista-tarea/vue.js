var app = new Vue({

	el: '#app',
	data: {
		titulo: 'Lista de Tareas',
		tareas: [
			{
				texto: 'Aprende Vuej.Js',
				terminada: false
			},
			{
				texto: 'Aprende Angular 2',
				terminada: false
			},
			{
				texto: 'Aprende IONIC2',
				terminada: false
			}
		],
		nuevaTarea: ''
	},
	methods:{
		
		addTarea: function(){

			let texto = this.nuevaTarea.trim();

			if( texto ){

				this.tareas.push({
				texto : texto,
					terminada : false
				});
			}

			this.nuevaTarea = '';
		},
		deleteTarea: function( tarea ){

			this.tareas.splice( tarea, 1 );
		}
	}
});