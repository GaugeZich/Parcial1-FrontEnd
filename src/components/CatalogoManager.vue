<script setup lang="ts">
    import ListaPrendas from './ListaPrendas.vue';

</script>

<template>
    <div class="container">
        <button>Ordenar</button>
        <button>Resetear</button>
        <hr><br>
        <ListaPrendas></ListaPrendas>
    </div>
</template>

<style scoped>
    .container{
        align-items: center;
        justify-content: center;
    }

    button{
        color:white;
        background-color: rgb(70, 98, 255);
        padding: 12px;
        border-radius: 12px;
        margin: 15px;
    }
</style>
