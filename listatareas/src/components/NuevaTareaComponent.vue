<template>

	<div class="input-group">
		<input type="text" v-model="nuevaTarea" class="form-control" @keyup.enter="addTarea()">
		<span class="input-group-btn">
			<button @click="addTarea()" class="btn btn-primary mb-2">Agregar</button>
		</span>
	</div>
</template>

<script>
	export default {
        
        data(){
        	return{
        		nuevaTarea: ''
        	}
        },
        props:['tareas'],
        methods:{
        	
        	addTarea: function(){

				let texto = this.nuevaTarea.trim();

				if( texto ){

					this.tareas.push({
					texto : texto,
						terminada : false
					});

					this.$emit( 'incrementarContador', 1 );
				}

				this.nuevaTarea = '';
			}
        }
    }
</script>