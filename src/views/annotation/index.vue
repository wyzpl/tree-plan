<template>
    <div class="label-view">
        <div class="label-title">标注记录</div>
        <div class="label-list">
            <div v-for="(item, index) in annotationList" @mouseenter="appStore.setHoverAnnotationId(item.id)"
                @mouseleave="appStore.setHoverAnnotationId(null)" :key="item.id">
                <el-color-picker v-model="item.stroke" color-format="rgb" @change.stop="handleChangeLabelColor(item)" />
                <el-dropdown @command="handleChangeName" trigger="click" style="border-bottom: 1px solid red;">
                    <span class="el-dropdown-link">
                        <span>{{ item.name }} </span>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :command="{ command: label, item }" v-for="label in labelStore.labelList">
                                {{ label.name }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span style="margin-left:20px">{{ item.tag }}</span>
                <span style="margin-left:20px">切换显示</span>
                <span style="margin-left:20px" @click="appStore.removeAnnotation(item.id)">删除 </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import { useLabelStore } from '@/store/label'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { rgbToRgba } from '@/utils'

const appStore = useAppStore()
const labelStore = useLabelStore()

const { annotationList } = storeToRefs(appStore)

/* 选择标签 */
const handleChangeName = (command: any) => {
    command.item.name = command.command.name
    command.item.stroke = command.command.color
    command.item.fill = rgbToRgba(command.command.color)
}

/* 切换颜色 */
const handleChangeLabelColor = (item: any) => {
    item.fill = rgbToRgba(item.stroke)
    labelStore.setLabelColor(item.name, item.stroke)
}
</script>

<style scoped lang="sass">
.label-view 
    width: 280px
    min-width: 280px
    border: 1px solid #535bf2
    padding: 10px 

    .label-title
        font-weight: bold
        
    .label-list
        margin-top: 10px
        display: flex
        flex-direction: column
        gap: 10px

</style>