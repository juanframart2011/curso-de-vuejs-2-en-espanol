<template>
    <div class="container" id="app">
        <div class="jumbotron">
            <titulo :titulo="titulo"></titulo>
            {{ numTareas }}
            <nueva-tarea :tareas="tareas" @incrementarContador="numTareas += $event"></nueva-tarea>
            <lista-tareas :tareas="tareas"></lista-tareas>
        </div>
    </div>
</template>

<script>
    
    import ListaTareas from './components/ListaTareasComponent.vue'
    import NuevaTarea from './components/NuevaTareaComponent.vue'
    import Titulo from './components/TituloComponent.vue'

    export default {

        components:{

            ListaTareas,
            NuevaTarea,
            Titulo
        },
        name: 'App',
        data(){
            return{
                titulo: '- Lista Tareas -',
                numTareas: 3,
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
                ]
            }
        }
    }
</script>

<style>
</style>