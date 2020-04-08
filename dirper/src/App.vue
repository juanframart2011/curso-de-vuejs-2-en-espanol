<template>
	<div id="app">
		<div class="container">
			<div class="jumbotron">
				<span v-decorar:grande.negrilla="{ familia: 'Helvetica'}">Aprende Vue.js 2 Fácilmente</span>
				<span v-decorar-local:grande.negrilla="{ familia: 'Helvetica'}">Aprende Vue.js 2 Fácilmente</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'App',
	directives:{
		'decorar-local' : {

			bind( el, binding, vnode ){

				el.style.fontFamily = binding.value;

				if( binding.arg == 'grande' ){
					el.style.fontSize = '50px';
				}

				if( binding.modifiers['negrilla'] ){

					el.style.fontWeight = 'bold';
				}
			}
		}
	}
}
</script>

<style></style>