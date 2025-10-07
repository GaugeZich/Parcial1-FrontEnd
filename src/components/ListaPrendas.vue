<script setup lang="ts">
    import type { Prenda } from '@/models/Prenda';
    import PrendaItem from './PrendaItem.vue';

    const props = defineProps<{
        prendasMostradas: Prenda[];
    }>();
    
    console.log(props.prendasMostradas)
</script>

<template>
    <div class="container">
        <div class="grid">
            <div class="md:flex-row sm:flex-col">
                <PrendaItem v-for="prenda in prendasMostradas" :prenda/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        justify-content: center;
        display: flex;
    }
</style>
