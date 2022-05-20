/* eslint-disable vue/require-v-for-key */
<template>
	<div class="container">
		<div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li" active-class="active" to="/" exact><a>Inicio</a></router-link>
                <router-link tag="li" active-class="active" to="/" exact><a>Usuario</a></router-link>
            </ul>
            <h3 class="text muted">Aplicación usuarios</h3>
        </nav>
    </div>
		<div class="jumbotron">
            <div>
                <p>Lista de usuarios</p>
                <ul class="list-group">
                    <span>ID: {{ id }}</span>
                    <li class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
                        {{ usuario.name }}
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            //id: this.$route.params.id,
            usuarios: {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                return res.json();
            })
            .then(usuarios =>{
                this.usuarios = usuarios;
            });
    }
}
</script>

<style>
</style>