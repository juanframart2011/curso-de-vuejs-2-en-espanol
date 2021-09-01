<template>

    <div class="container">
        <div class="jumbotron">

            <div slot="titulo">
                <h3>Cambiar Contraseña</h3>
            </div>
            
            <div slot="elementos">
                
                <div class="form-group">
                    <label for="correo">Correo Electronico</label>
                    <input type="email" class="form-control" id="correo" placeholder="Escribe tu correo electronico">
                </div>
            </div>
            
            <div>
                <button class="btn btn-rpimary">Iniciar Sesión</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CambiarClave'
}
</script>

<style scoped>
    h3{
        color:red;
    }
</style>