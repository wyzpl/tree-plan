<template>
    <el-dialog v-model="dialogVisible" title="导入图片" :show-close="false" :close-on-click-modal="false"
        :close-on-press-escape="false" :align-center="true" center width="500">
        <el-upload class="upload-content" drag action="" multiple :show-file-list="false" :auto-upload="false"
            :on-change="handleChangeFile">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                将文件拖放到此处或 <em>点击上传</em>
            </div>
            <!-- <template #tip>
                <div class="el-upload__tip">
                    小于500kb的jpg/png文件
                </div>
            </template> -->
        </el-upload>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancelDialog">取消</el-button>
                <el-button type="primary" @click="handleConfirmDialog" :disabled="!fileList.length">
                    上传
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'

import type { UploadProps, UploadUserFile } from 'element-plus'

const dataStore = useDataStore()

const dialogVisible = ref(false)

const fileList = ref<UploadUserFile[]>([])

const handleChangeFile: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
    fileList.value = uploadFiles.map(item => {
        return {
            ...item,
            url: window.URL.createObjectURL(item.raw)
        }
    })
}

const open = () => {
    dialogVisible.value = true
}
const close = () => {
    dialogVisible.value = false
    fileList.value = []
}

/* 关闭 */
const handleCancelDialog = () => {
    close()
}

const handleConfirmDialog = () => {
    dataStore.setData(fileList.value)
    close()
}

defineExpose({
    open
})
</script>

<style lang="sass">
.el-upload-dragger
    height: 280px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
.el-button
    width: 120px
    height: 32px
</style>