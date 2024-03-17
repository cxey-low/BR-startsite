<script setup lang="ts">

import MainBar from './Components/SearchBar/MainBar.vue';
// import '@/assets/styles/bootstrap.css';
import 'element-plus/dist/index.css';


</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <MainBar />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
