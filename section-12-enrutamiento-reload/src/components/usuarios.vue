<template>
    <div>
        <p>Lista de usuarios</p>
        <ul class="list-group"></ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
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