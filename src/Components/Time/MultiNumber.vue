<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import SeparateNumbers from './SeparateNumbers.vue'

const prop = defineProps({
    number: String
})

const icon = computed(() => {
    if (!prop.number) {
        return ref(['0','0'])
    }

    return ref([prop.number.substring(0, 1), prop.number.substring(1, 2)])
})
</script>

<template>
    <SeparateNumbers :number="icon.value[0]" />
    <SeparateNumbers :number="icon.value[1]" />
</template>
