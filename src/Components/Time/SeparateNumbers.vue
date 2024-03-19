<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { defineProps, ref, computed } from 'vue'
const prop = defineProps({
    number: String
})

const icon = computed(() => {
    return ref(`ri:number-${prop.number}`)
})
</script>

<template>
    <Icon :icon="icon.value" />
</template>
