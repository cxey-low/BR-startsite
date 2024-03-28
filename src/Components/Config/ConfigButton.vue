<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElButton, ElDialog, ElTable,ElTableColumn , ElInput, ElTabs, ElTabPane } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import { Config } from './config'

const isConfigOpen = ref(false)


const searchConfig = computed(() => {
    const config = new Config()

    return ref(Config.mapToSearchConfig(config.searchMap))


})


</script>
<template>
    <ElButton :icon="Setting" @click="isConfigOpen = true" />
    <ElDialog v-model="isConfigOpen">

        <template #title>

            <h3>Config</h3>
        </template>
        <template #content>
            <ElTabs type="border-card">
                <ElTabPane label="Search">
                    <ElTable :data="searchConfig.value">
                        <ElTableColumn ></ElTableColumn>

                    </ElTable>
                </ElTabPane>
            </ElTabs>
        </template>
    </ElDialog>
</template>