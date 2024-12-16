<template>
    <div class="label-view">
        <div class="label-title">标注记录</div>
        <el-scrollbar :view-style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingRight: '10px' }"
            height="90vh">

            <div v-for="(item, index) in annotationList" @mouseenter="appStore.setHoverAnnotationId(item.id)"
                @mouseleave="appStore.setHoverAnnotationId(null)" :key="item.id" class="label-item">
                <div style="width:20px;height:20px;" :style="{ 'backgroundColor': item.stroke }"></div>
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
                <span style="margin-left:20px">
                    <img src="@/assets/icon/visible.svg" width="16" height="16" alt="" srcset="">
                    <!-- <img src="@/assets/icon/invisible.svg" width="16" height="16" alt="" srcset=""> -->
                </span>
                <span style="margin-left:20px" @click="appStore.removeAnnotation(item.id)">
                    <img src="@/assets/icon/delete.svg" width="16" height="16" alt="" srcset="">
                </span>
            </div>
        </el-scrollbar>

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

</script>

<style scoped lang="sass">
.label-view 
    width: 280px
    min-width: 280px
    background-color: #fff
    border-left: 1px solid rgba(0, 0, 0, 0.1)

    .label-item
        flex: 1
        display: flex
        align-items: center
        justify-content: space-between
        padding: 10px
        border-radius: 4px
        cursor: pointer
        transition: all 0.3s ease-in-out
        &:hover
            background-color: #f5f5f5

        .label-color
            width: 20px
            height: 20px
            border-radius: 50%
            cursor: pointer

    .label-title
        font-weight: bold
        
    .label-list
        margin-top: 10px
        display: flex
        flex-direction: column
        gap: 10px

</style>