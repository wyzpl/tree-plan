<template>
    <el-upload class="upload-demo" drag multiple :show-file-list="false" :auto-upload="false"
        :on-change="handleChangeFile">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
            将文件拖放到此处或 <em>点击上传</em>
        </div>
    </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

const dataStore = useDataStore()


const fileList = ref<UploadUserFile[]>([])

const handleChangeFile: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
    fileList.value = uploadFiles.map(item => {
        return {
            ...item,
            url: window.URL.createObjectURL(item.raw)
        }
    })
    dataStore.setData(fileList.value)
    fileList.value = []
}
</script>

<style>
.el-upload-dragger {
    width: 400px;
    background-color: rgba(0, 0, 0, .5) !important
}
</style>