<template>

    <form class="form-inline">
        <div class="form-group mb-2">
        <label for="staticEmail2" class="sr-only">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
        </div>
        <div class="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
    </form>

    <div>
        <span>
            <button @click="agregarTarea()" class="btn btn-primary">Agregar</button>
        </span>
    </div>
</template>
<script>
    export default{
        name: 'NuevaTareaComponent',
        data(){
            return {
                nuevaTarea: '',
                //tareas: []
            }
        },
        props: ['tareas'],
        methods:{
            agregarTarea(){
                var texto = this.nuevaTarea.trim();
                if( texto ){
                    /*this.tareas.push({
                        texto: texto,
                        terminada: false
                    });*/
                }
                this.nuevaTarea = '';

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        texto: texto,
                        terminada: false
                    })
                };

                fetch('https://tareas-vue-32bb7-default-rtdb.firebaseio.com/tareas.json',requestOptions)
                .then( response => console.info( "r => ", response ) );
            }
        }
    }
</script>