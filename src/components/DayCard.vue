<script setup lang="ts">
import type { WeekDay } from '@/models/WeekDay';

const props = defineProps<{
    diaSeleccionado: WeekDay
}>();

const classSelected: string = 'bg-blue-500 text-gray-50'

</script>

<template>
    <div class="text-4xl font-medium text-black m-1 mt-6" :class="{
        [classSelected]: diaSeleccionado.selected === true
    }">
    <p>{{ diaSeleccionado.name }}</p>
    </div>

</template>

<style scoped>
p{
    text-align: center;
    border-width: 1px;
}
</style>
