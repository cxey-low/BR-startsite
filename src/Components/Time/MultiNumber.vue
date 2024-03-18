<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import SeparateNumbers from './SeparateNumbers.vue'

const prop = defineProps({
    number: Number
})

function to2Number() {
    let number1 = prop.number % 10
    let number2 = prop.number - number1

    return [number1, number2]
}

const icon = computed(() => {
    return ref(to2Number())
})
</script>
<template>
    <SeparateNumbers :number="icon.value[1]" />
    <SeparateNumbers :number="icon.value[2]" />
</template>
