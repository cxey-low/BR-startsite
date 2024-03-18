<script setup lang="ts">
import MultiNumber from './MultiNumber.vue'
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import {} from ''

const getTime = () => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return {
        hour: hour,
        minute: minute
    }
}

const time = computed(() => {
    return ref(getTime())
})
</script>
<template>
    <MultiNumber :number="time.value.hour"></MultiNumber>
    <Icon icon="fad:digital-colon"></Icon>
    <MultiNumber :number="time.value.minute"></MultiNumber>
</template>
