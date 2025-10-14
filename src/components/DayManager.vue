<script setup lang="ts">
import { ref } from 'vue'
import DayCard from './DayCard.vue'
import type { WeekDay } from '@/models/WeekDay'


const dias: WeekDay[] = [
    {
        id: 1,
        name: "Lunes",
        selected: false
    },
    {
        id: 2,
        name: "Martes",
        selected: false
    },
    {
        id: 3,
        name: "Miercoles",
        selected: false
    },
    {
        id: 4,
        name: "Jueves",
        selected: false
    },
    {
        id: 5,
        name: "Viernes",
        selected: false
    },
    {
        id: 6,
        name: "Sabado",
        selected: false
    },
    {
        id: 7,
        name: "Domingo",
        selected: false
    }
]

const diaSelected = ref<(WeekDay[])>([...dias])

const classSelected: string = 'bg-blue-500 text-gray-50 hover:bg-blue-600'
const classHoverUnselected: string = 'hover:bg-gray-100'

const SeleccionarDia = (dia: number):void => {
    diaSelected.value.forEach(element => {
        if(element.id === dia){
            element.selected = true
        }else{
            element.selected = false
        }
    });
}

</script>

<template>
    <div class="container items-center">
        <div class="title">
            <h1>Gestor de dias de la semana</h1>
        </div>
        <div class="flex place-content-center flex-wrap mb-3">
            <button v-for="diaSeleccionado in diaSelected"
            :class="{
                [classSelected]: diaSeleccionado.selected === true,
                [classHoverUnselected]: diaSeleccionado.selected === false
            }"
            @click="SeleccionarDia(diaSeleccionado.id)"
            >{{ diaSeleccionado.name }}</button>
        </div>
        <hr>
        <div class="flex place-content-center flex-wrap">
            <DayCard v-for="diaSeleccionado in diaSelected" :diaSeleccionado></DayCard>
        </div>
    </div>
</template>

<style scoped>
.title{
    justify-content: center;
    display: flex;
}

button{
    border-radius: 10%;
    border-width: 1px;
    padding: 8px;
    margin: 5px;
}

h1{
    font-size: 45px;
}
</style>
