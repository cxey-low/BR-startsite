<script setup lang="ts">
import MainBar from './Components/SearchBar/MainBar.vue'
import '@/assets/styles/bootstrap.css'
import 'element-plus/dist/index.css'
import { ElContainer, ElHeader, ElMain, ElFooter, ElCol, ElRow } from 'element-plus'
import TimeDisplay from './Components/Time/TimeDisplay.vue'
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <ElRow>
                    <ElCol :span="8"> </ElCol>
                    <ElCol :span="8">
                        <TimeDisplay />
                        <MainBar />
                    </ElCol>
                    <ElCol :span="8"> </ElCol>
                </ElRow>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
