<script setup lang="ts">
import MainBar from './Components/SearchBar/MainBar.vue'
import 'element-plus/dist/index.css'
import { ElContainer, ElHeader, ElMain, ElFooter, ElCol, ElRow } from 'element-plus'
import TimeDisplay from './Components/Time/TimeDisplay.vue'
import WallPaper from './Components/WallpaperGets/WallPaper.vue'
import img from './assets/images/LimeStartPage.jpg'
import SeparateIcon from './Components/BookmarkSite/SeparateIcon.vue'
</script>
<template>
    <WallPaper :img="img" />
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <ElRow>
                    <ElCol :span="8"> </ElCol>
                    <ElCol :span="8">
                        <h1 class="text-center">
                            <TimeDisplay />
                        </h1>
                        <MainBar />
                    </ElCol>
                    <ElCol :span="8"> </ElCol>
                </ElRow>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
