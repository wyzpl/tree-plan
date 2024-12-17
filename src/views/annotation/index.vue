<template>
    <div class="label-view">
        <div class="label-title">标注记录</div>
        <el-scrollbar :view-style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingRight: '10px' }"
            height="95vh">

            <div v-for="(item, index) in annotationList" @mouseenter="appStore.setHoverAnnotationId(item.id)"
                @mouseleave="appStore.setHoverAnnotationId(null)" :key="item.id" class="label-item">
                <div style="width:20px;height:20px;" :style="{ 'backgroundColor': item.stroke }"></div>

                <!-- 无标签 -->
                <div class="no-labels" v-if="labelStore.labelList.length === 0">
                    <div class="dropdown-link" @click="handleAddLabel"
                        :style="{ borderBottom: `1px solid ${item.stroke}` }">
                        <span>{{ item.name }} </span>
                    </div>
                </div>
                <!-- 有标签 -->
                <div v-else>
                    <el-dropdown @command="handleChangeName" placement="bottom-start" trigger="click">
                        <div class="dropdown-link" :style="{ borderBottom: `1px solid ${item.stroke}` }">
                            <span>{{ item.name }} </span>
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :command="{ command: label, item }"
                                    v-for="label in labelStore.labelList">
                                    {{ label.name }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <!-- 图形类型 -->
                <div class="shape-icon">
                    <img src="@/assets/icon/rect.svg" width="16" height="16" alt="" srcset=""
                        v-if="item.tag === 'Rect'">
                    <img src="@/assets/icon/circle.svg" width="16" height="16" alt="" srcset=""
                        v-if="item.tag === 'Ellipse'">
                </div>

                <!-- 可见性 -->
                <el-button circle size="samll">
                    <img src="@/assets/icon/visible.svg" width="16" height="16" alt="" srcset="">
                    <!-- <img src="@/assets/icon/invisible.svg" width="16" height="16" alt="" srcset=""> -->
                </el-button>

                <!-- 删除 -->
                <el-button circle size="samll" :icon="Delete" @click="appStore.removeAnnotation(item.id)"></el-button>
            </div>

        </el-scrollbar>
    </div>
    <EditLabel ref="editLabelRef" />

</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
const appStore = useAppStore()
const labelStore = useLabelStore()

const { annotationList } = storeToRefs(appStore)

/* 选择标签 */
const handleChangeName = (command: any) => {
    command.item.name = command.command.name
    command.item.stroke = command.command.color
    command.item.fill = rgbToRgba(command.command.color)
}

const editLabelRef = ref()
/* 新增标签 */
const handleAddLabel = () => {
    editLabelRef.value.open()
}
</script>

<style scoped lang="sass">
.label-view 
    width: 280px
    min-width: 280px
    background-color: #fff
    border-left: 1px solid rgba(0, 0, 0, 0.1)
    padding: 10px 0 10px 10px

    .label-item
        flex: 1
        display: flex
        align-items: center
        justify-content: space-between
        padding: 10px
        border-radius: 4px
        gap: 10px
        cursor: pointer
        transition: all 0.3s ease-in-out
        &:hover
            background-color: #f5f5f5

        .label-color
            width: 20px
            height: 20px
            border-radius: 50%
            cursor: pointer
        .dropdown-link
            width: 100px
            height: 26px
            line-height: 26px
            flex:1

        .shape-icon
            width: 28px
            height: 24px
            border-radius: 4px
            background-color: #fff
            border: 1px solid rgba(0,0,0,.1)
            display: flex
            align-items: center
            justify-content: center

    .label-title
        font-weight: bold
        margin-bottom: 20px
        
    .label-list
        margin-top: 10px
        display: flex
        flex-direction: column
        gap: 10px

    .no-labels
        .dropdown-link
            font-size: 14px
            color: #606266

.el-button 
    width: 26px !important
    height: 26px
    margin-left: 0 !important

</style>