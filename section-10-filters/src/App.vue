<template>
  <div class="container">
    <div class="jumbotron">
      <span>{{ mensaje | mayusculas }}</span>
      <hr>
      <span>{{ mensaje }}</span>
      <hr>
      <span>{{ mensaje | suspensivo }}</span>
      <hr>
      <span>{{ mensaje | suspensivo | mayusculas }}</span>
      <hr>
      <span>{{ temperatura }}</span>
      <hr>
      <span>{{ temperatura | aFahrenheit }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      mensaje: 'Aprende VueJS 2 free',
      temperatura: 30
    }
  },
  filters:{
    mayusculas( mensaje ){
      return mensaje.toUpperCase();
    },
    aFahrenheit( temperatura ){

      return (9/5 * temperatura) + 32 + 'F';
    }
  }
}
</script>

<style>
</style>