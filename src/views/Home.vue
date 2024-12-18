<template>
    <div class="container">
        <div class="home-view">
            <div class="content">
                <h1 id="logo">TO NORTH</h1>
                <div id="des"></div>

                <UploadBtn msg="上传图片" style="margin-top: 50px;" @click="handleShowUpload" />
            </div>
        </div>
    </div>

    <UploadImg ref="uploadImgRef" />

</template>

<script setup lang="ts">
import Typed from 'typed.js';

const uploadImgRef = ref(null)

onMounted(() => {
    new Typed('#des', {
        strings: ['前端数据标注工具, 上传图片后开始使用'],
        typeSpeed: 100,
        cursorChar: ''

    });
})

const handleShowUpload = () => {
    uploadImgRef.value.open()
}
</script>

<style scoped>
.home-view {
    width: 100%;
    height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 9;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#logo {
    font-size: 60px;
    background: linear-gradient(to right, yellow, rgba(190, 20, 128));
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
}
</style>