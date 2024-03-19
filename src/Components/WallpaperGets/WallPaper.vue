<script setup lang="ts">
import { ElImage } from 'element-plus'
import img from './LimeStartPage.jpg'
import { computed, ref } from 'vue'

const BingURL = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'
const BingBase = 'https://cn.bing.com'

let imgURL = ref(img)

function getBingURL() {
    fetch(BingURL).then((response) => {
        response.json().then((json) => {
            imgURL.value = JSON.parse(json).images[0].url
        }).catch(() => {
        })
    })
}

const background = computed(() => {
    getBingURL()
    return ref(`background: url("${imgURL.value}")`)
})

</script>
<template>
    <ElImage :style="background" class="background" :src="img" />
</template>
<style>
.background {
    background: url("./assets/images/LimeStartPage.jpg");
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
}
</style>