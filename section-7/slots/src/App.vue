<template>

    <div class="container">
        <div class="jumbotron">
            <button type="button" class="btn btn-primary" @click="componenteSeleccionado = 'iniciarSesion'">Iniciar Sesión</button>
            <button type="button" class="btn btn-primary" @click="componenteSeleccionado = 'cambiarClave'">Cambiar Contraseña</button>

            <keep-alive>
                <component :is="componenteSeleccionado"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import CambiarClave from './components/CambiarClave.vue'
import IniciarSesion from './components/IniciarSesion.vue'
import MostrarFormulario from './components/MostrarFormulario.vue'

export default {
    name: 'App',
    components: {
        iniciarSesion: IniciarSesion,
        cambiarClave: CambiarClave,
        mostrarFormulario: MostrarFormulario
    },
    data(){
        return{
            componenteSeleccionado: 'iniciarSesion'
        }
    }
}
</script>

<style scoped>
    h3{
        color:red;
    }
</style>