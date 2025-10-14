<script setup lang="ts">
import type { WeekDay } from '@/models/WeekDay';

const props = defineProps<{
    diaSeleccionado: WeekDay
}>();

const classSelected: string = 'bg-blue-500 text-gray-50'

</script>

<template>
    <div class="text-xl font-medium text-black" :class="{
        [classSelected]: diaSeleccionado.selected === true
    }">{{ diaSeleccionado.name }}</div>
</template>

<style scoped>

</style>
