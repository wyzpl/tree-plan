<template>
    <el-dialog v-model="labelDialogVisible" :show-close="false" :close-on-click-modal="false"
        :close-on-press-escape="false" :align-center="true" title="编辑标签" width="500" center>
        <div style="margin-bottom:20px;text-align: center; font-weight: bold;font-size: 18px;">创建标签、编辑标签
        </div>
        <div class="label-item" v-for="item in labelList" :key="item.id">
            <el-input v-model="item.name" placeholder="请输入标签名称" />
            <el-color-picker v-model="item.color" color-format="rgb" @change="handleChangeLabelColor(item)" />
            <el-button type="danger" :icon="Delete" circle @click="labelStore.deleteLabel(item.id)" />
        </div>

        <el-button :icon="Plus" style="width: 100%;" @click="handlePushLabel"></el-button>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancelDialog">取消</el-button>
                <el-button type="primary" @click="handleConfirmDialog">
                    保存
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { Delete, Plus } from '@element-plus/icons-vue'
import { nanoid } from 'nanoid'

const labelStore = useLabelStore()

const defaultLabelList = JSON.parse(JSON.stringify(labelStore.labelList))

const { labelList } = storeToRefs(labelStore)

const labelDialogVisible = ref(false)

const handleChangeLabelColor = (item: any) => {
    console.log("🏸 ~ item:", item)
}

const checkNames = (data: any) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === "") {
            return false;
        }
    }
    return true;
}
const handlePushLabel = () => {
    /* 如果有标签名为空，则不新增标签 */
    let flag = checkNames(labelList.value)
    if (!flag) {
        return ElNotification({
            title: 'Error',
            message: '标签名称不能为空',
            type: 'error',
        })
    }
    labelList.value.push({
        id: nanoid(),
        name: '',
        color: '#535bf2',
    })
}

/* 关闭 */
const handleCancelDialog = () => {
    labelList.value = defaultLabelList
    close()
}

const handleConfirmDialog = () => {
    let flag = checkNames(labelList.value)
    if (!flag) {
        return ElNotification({
            title: 'Error',
            message: '标签名称不能为空',
            type: 'error',
        })
    } else {

        close()
    }
}

const open = () => {
    labelDialogVisible.value = true
}
const close = () => {
    labelDialogVisible.value = false
}

defineExpose({
    open, close
})
</script>

<style lang="sass" scoped>
.label-item
    display: flex
    align-items: center
    gap: 20px
    margin-bottom: 20px

.el-button
    width: 120px
    height: 32px
</style>