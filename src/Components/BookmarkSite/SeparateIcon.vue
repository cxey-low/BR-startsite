<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import { ElImage } from 'element-plus'
import { getICO, SITES } from './sites'

const props = defineProps({
    site: String
})

const img = computed(() => {
    return ref(getICO(props.site || ''))
})
</script>
<template>
    <ElImage :src="img.value" />
</template>
