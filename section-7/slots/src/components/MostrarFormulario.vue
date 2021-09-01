<template>

    <form class="form">
        
        <slot name="titulo"></slot>
        <slot name="elementos"></slot>
        <slot></slot>
    </form>
</template>

<script>
export default {
  name: 'MostrarFormulario',
}
</script>

<style scoped>
    h3{
        color:green;
    }
</style>