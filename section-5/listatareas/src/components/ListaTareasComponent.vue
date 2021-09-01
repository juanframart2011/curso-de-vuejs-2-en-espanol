<template>

	<ul class="list-group">
	    <li class="list-group-item" v-for="( tarea, i ) in tareas" :class="{ terminada: tarea.terminada }">
	    	{{ tarea.texto }}
	    	<span class="pull-right">

	    		<button @click="tarea.terminada = !tarea.terminada" class="btn btn-success btn-xs glyphicon glyphicon-ok"></button>

	    		<button @click="deleteTarea( i )" class="btn btn-danger btn-xs glyphicon glyphicon-ok"></button>
	    	</span>
	    </li>
	</ul>
</template>

<script>
	export default {
        
        props: ['tareas'],
		methods:{

			deleteTarea: function( tarea ){

				data.splice( tarea, 1 );
			}
		}
    }
</script>
<style>
.terminada{
  color: gray;
  text-decoration: line-through;
}
</style>