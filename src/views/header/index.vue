<template>
    <header class="top-header">
        <div id="logo">TO NORTH</div>
        <el-dropdown placement="bottom-start" @command="handleCommand">
            <span class="dropdown-link">
                操作
            </span>
            <template #dropdown>
                <el-dropdown-menu :show-arrow="false">
                    <el-dropdown-item command="label">
                        <el-icon style="margin-right: 10px">
                            <DocumentAdd />
                        </el-icon>
                        新增 / 编辑标签</el-dropdown-item>
                    <el-dropdown-item command="image">
                        <el-icon style="margin-right: 10px">
                            <Upload />
                        </el-icon>导入图片</el-dropdown-item>
                    <!-- <el-dropdown-item command="annotation">
                        <el-icon style="margin-right: 10px">
                            <Upload />
                        </el-icon>导入标注</el-dropdown-item>
                    <el-dropdown-item command="export">
                        <el-icon style="margin-right: 10px">
                            <Download />
                        </el-icon>导出标注</el-dropdown-item> -->
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <!-- <el-dropdown placement="bottom-start" @command="handleCommand">
            <span class="dropdown-link">
                设置
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="label">视图管理</el-dropdown-item>
                    <el-dropdown-item command="upload">切换皮肤</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown> -->
    </header>

    <EditLabel ref="editLabelRef" />
    <UploadImg ref="uploadImgRef" />
</template>

<script setup lang="ts">
import { Upload, DocumentAdd, Download } from '@element-plus/icons-vue'

const editLabelRef = ref(null)
const uploadImgRef = ref(null)


const handleCommand = (command: string) => {
    switch (command) {
        case 'image':
            uploadImgRef.value.open()
            break;
        case 'label':
            editLabelRef.value.open()
            break;
        default:
            break;
    }
}
</script>

<style lang="sass" scoped>
.top-header 
    height: 36px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    align-items: center
    padding:  10px
    gap: 30px
    cursor: pointer

    #logo
        width: 160px
    
.el-tooltip__trigger:focus-visible 
    outline: unset

.dropdown-link
    color: #333
    font-size: 14px
    font-weight: bold

</style>
<style>
.el-popper[data-popper-placement^=bottom]>.el-popper__arrow {
    display: none !important;
}

.el-dropdown__popper .el-dropdown-menu {
    min-width: 150px;
}
</style>