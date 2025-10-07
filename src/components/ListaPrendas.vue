<script setup lang="ts">
    import type { Prenda } from '@/models/Prenda';
    import PrendaItem from './PrendaItem.vue';

    const props = defineProps<{
        prendasMostradas: Prenda[];
    }>();
    

</script>

<template>
    <div class="container">
        <div class="md:flex-row sm:flex-col">
            <PrendaItem v-for="prendas in props.prendasMostradas"/>
        </div>
    </div>
</template>

<style scoped>
    .container{
        justify-content: center;
        display: flex;
    }
</style>
