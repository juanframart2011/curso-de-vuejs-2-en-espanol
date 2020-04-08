<template>

    <div class="container">
        <div class="jumbotron">
            <div slot="titulo">
                <h3>Iniciar Sesión</h3>
            </div>
            
            <div slot="elementos">
                
                <div class="form-group">
                    <label for="correo">Correo Electronico</label>
                    <input type="email" class="form-control" id="correo" placeholder="Escribe tu correo electronico">
                </div>
                <div class="form-group">
                    <label for="clave">Contraseña</label>
                    <input type="email" class="form-control" id="clave" placeholder="Escribe tu Contraseña">
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
    name: 'IniciarSesion',
    destroyed(){
        
    }
}
</script>

<style scoped>
    h3{
        color:red;
    }
</style>