<template>

    <div>
        
        <h2>{{ titulo }}</h2>
        <h3>Tareas a hacer: {{ numTareas }}</h3>
    </div>
</template>

<script>
    import { bus } from './main.js'
	export default {
        
        props:['titulo','numTareas'],
        data(){

            return{
                numTareas : 0
            }
        },
        methods:{
        	tituloMayuscular(){
        		return this.titulo.toUpperCase();
        	}
        },
        created(){
            bus.$on( 'actualizarContador', ( numTareas )=>{
                this.numTareas = numTareas;
            } );
        }
    }
</script>