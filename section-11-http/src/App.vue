<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <TituloComponent msg='Lista de Tareas' />
  <NuevaTareaComponent/>

  <ListTaskComponent tasks='tasks' />
</template>

<script>
import ListTaskComponent from './components/ListTaskComponent.vue';
import NuevaTareaComponent from './NuevaTareaComponent.vue';
import TituloComponent from './components/TituloComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      tasks: [{
        texto: 'text 1',
        terminada: true
      },
      {
        texto: 'text 2',
        terminada: true
      }]
    }
  },
  components: {
    ListTaskComponent,
    NuevaTareaComponent,
    TituloComponent
  },
  created(){
    
    fetch("https://tareas-vue-32bb7-default-rtdb.firebaseio.com/tareas.json")
    .then(response =>{
      return response.json();
    })
    .then(  response =>{
      console.info( response );
      for( let id in response ){
        this.tasks.push( response[id] );
      }
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
