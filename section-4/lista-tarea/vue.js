let data = {
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
	};

Vue.component( 'titulo',{
	template: '<h2>{{ titulo }}</h2>',
	data: function(){

		return { titulo: 'Lista de Tareas' }
	}
})

Vue.component( 'nueva-tarea',{
	template: `<div class="input-group">
					<input type="text" v-model="nuevaTarea" class="form-control" @keyup.enter="addTarea()">
					<span class="input-group-btn">
						<button @click="addTarea()" class="btn btn-primary mb-2">Agregar</button>
					</span>
				</div>`,
	data: function(){

		return data
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
		}
	}
})

Vue.component( 'lista-de-tareas',{
	template: `<ul class="list-group">
					    <li class="list-group-item" v-for="( tarea, i ) in tareas" :class="{ terminada: tarea.terminada }">
					    	{{ tarea.texto }}
					    	<span class="pull-right">

					    		<button @click="tarea.terminada = !tarea.terminada" class="btn btn-success btn-xs glyphicon glyphicon-ok"></button>

					    		<button @click="deleteTarea( i )" class="btn btn-danger btn-xs glyphicon glyphicon-ok"></button>
					    	</span>
					    </li>
					</ul>`,
	data: function(){

		return data;
	},
	methods:{

		deleteTarea: function( tarea ){

			data.splice( tarea, 1 );
		}
	}
})

var app = new Vue({

	el: '#app',
	data: data
});