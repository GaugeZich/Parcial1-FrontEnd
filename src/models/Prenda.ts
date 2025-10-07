export interface Prenda {
    id: number,
    nombre: string,
    talle: string,
    color: string,
    precio: number,
    stock: number
}

defineProps<{
    prendasMostradas: Prenda[];
}>();