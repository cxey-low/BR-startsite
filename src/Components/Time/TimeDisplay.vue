<script setup lang="ts">
import MultiNumber from './MultiNumber.vue'
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { onMounted } from 'vue'

const getTime = () => {
    function time_string(time: number) {
        if (time >= 10) {
            return time.toString()
        } else {
            return '0' + time.toString()
        }
    }

    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return {
        hour: time_string(hour),
        minute: time_string(minute)
    }
}

const hour = ref(getTime().hour)
const minute = ref(getTime().minute)

let time = computed(() => {
    return ref([hour.value, minute.value])
})

onMounted(() => {
    setInterval(() => {
        hour.value = getTime().hour
        minute.value = getTime().minute
    }, 1000 * 60)
})
</script>
<template>
    <MultiNumber :number="time.value[0]"></MultiNumber>
    <Icon icon="fad:digital-colon"></Icon>
    <MultiNumber :number="time.value[1]"></MultiNumber>
</template>
