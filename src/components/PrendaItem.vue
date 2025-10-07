<script setup lang="ts">
    
    

</script>

<template >
    <div class="card">
        <li>
            <ul>ID: {{}}</ul>
            <ul>Nombre:</ul>
            <ul>Talle:</ul>
            <ul>Color:</ul>
            <ul>Precio:</ul>
            <ul>Stock:</ul>
        </li>
    </div>
</template>

<style scoped>
    .card{
        justify-content: center;
        align-items: right;
        border: 1px;
        border-color: black;
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
