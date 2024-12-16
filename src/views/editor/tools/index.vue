<template>
    <div class="tools">

        <!-- 图形工具 -->
        <el-button circle v-for="item in toolsStore.shapeOperation" :key="item.tag"
            :color="item.tag === toolsStore.shape ? '#626aef' : ''" @click="toolsStore.setShape(item.tag)">
            <img :src="item.icon" width="14" height="14" alt="" />
        </el-button>
        <el-divider direction="vertical" />

        <!-- 操作工具栏 -->
        <el-button circle v-for="item in toolsStore.drawOperation" :key="item.tag"
            @click="handleClickDrawOperation(item.tag)">
            <img :src="item.icon" width="14" height="14" alt="" />
        </el-button>
        <el-divider direction="vertical" />

        <!-- 视图工具栏 -->
        <el-button circle v-for="item in toolsStore.viewOperation" :key="item.tag"
            @click="handleClickViewOperation(item.tag)">
            <img :src="item.icon" width="14" height="14" alt="" />
        </el-button>

    </div>
</template>

<script setup lang="ts">

const toolsStore = useToolsStore()
const appStore = useAppStore()

const handleClickDrawOperation = (operation: string) => {
    toolsStore.handleClickOperation(operation)
}
const handleClickViewOperation = (operation: string) => {
    appStore.fitScreen(operation)
}

</script>

<style lang="sass" scoped>
.tools 
    position: absolute
    top: 10px
    width: 90%
    left: 50%
    transform: translateX(-50%)
    height: 28px
    display: flex
    align-items: center
    gap:10px
    padding: 10px 20px
    background-color: #fff
    border-radius: 4px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    z-index: 999

.el-button.is-circle
    width: 26px
    height: 26px

</style>