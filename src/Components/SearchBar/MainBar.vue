<script setup lang="ts">
import { ref } from 'vue'
import { getURL, SiteSelection } from './search'
// import { Icon } from '@iconify/vue';
// import $ from 'jquery'
import { Search } from '@element-plus/icons-vue'
import { ElInput, ElSelect, ElOption, ElButton } from 'element-plus'

const select = ref('bing')

const search_input = ref('')

const searchButton = () => {
    window.open(getURL(search_input.value, select.value))
}
</script>
<template>
    <form>
        <ElInput
            v-model="search_input"
            id="icon"
            style="max-width: 600px"
            class="input-with-select"
        >
            <template #prepend>
                <ElSelect style="width: 115px" filterable v-model="select">
                    <ElOption
                        v-for="site in SiteSelection"
                        :key="site.value"
                        :value="site.value"
                        :label="site.label"
                    />
                </ElSelect>
            </template>
            <template #append>
                <el-button @click="searchButton" :icon="Search" circle />
            </template>
        </ElInput>
    </form>
</template>
