<script setup lang="ts">
import type { Prenda } from '@/models/Prenda';

    
    const props = defineProps<{
        prenda: Prenda
    }>();

    

</script>

<template >
    <div class="card">
        <li>
            <ul>ID: {{ prenda.id }}</ul>
            <ul>Nombre: {{ prenda.nombre }}</ul>
            <ul>Talle: {{ prenda.talle }}</ul>
            <ul>Color: {{ prenda.color }} </ul>
            <ul>Precio: {{ prenda.precio }}</ul>
            <ul>Stock: {{ prenda.stock }}</ul>
        </li>
    </div>
</template>

<style scoped>
    .card{
        justify-content: center;
        align-items: right;
        border: 1px;
        border-color: black;
        margin: 15px;
    }

    .no-stock{
        background-color: red;
    }

    .low-stock{
        background-color: yellow;
    }

    .normal-stock{
        background-color: green;
    }
</style>
