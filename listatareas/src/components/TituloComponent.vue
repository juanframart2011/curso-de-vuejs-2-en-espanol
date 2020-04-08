<template>

	<h2>{{ titulo }}</h2>
</template>

<script>
	export default {
        
        props:{
        	titulo:{
        		type: String,
        		default: 'Tareas'
        	}
        },
        methods:{
        	tituloMayuscular(){
        		return this.titulo.toUpperCase();
        	}
        }
    }
</script>