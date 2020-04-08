<template>

	<div class="input-group">
		<input type="text" v-model="nuevaTarea" class="form-control" @keyup.enter="addTarea()">
		<span class="input-group-btn">
			<button @click="addTarea()" class="btn btn-primary mb-2">Agregar</button>
		</span>
	</div>
</template>

<script>
	import { bus } from './main.js'
	export default {
        
        data(){
        	return{
        		nuevaTarea: ''
        	}
        },
        props:['tareas','actualizarContador'],
        methods:{
        	
        	addTarea: function(){

				let texto = this.nuevaTarea.trim();

				if( texto ){

					this.tareas.push({
					texto : texto,
						terminada : false
					});

					//this.actualizarContador();
					bus.actualizarContador( this.tareas.length );
				}

				this.nuevaTarea = '';
			}
        },
        created(){

        	bus.actualizarContador( this.tareas.length );
        }
    }
</script>