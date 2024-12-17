<template>
    <div class="tools">

        <!-- 图形工具 -->
        <template v-for="item in toolsStore.shapeOperation" :key="item.tag">
            <el-tooltip effect="dark" :content="item.name" placement="bottom">
                <el-button circle :color="item.tag === toolsStore.shape ? '#626aef' : ''"
                    @click="toolsStore.setShape(item.tag)">

                    <img :src="item.icon" width="14" height="14" alt="" />
                </el-button>
            </el-tooltip>
        </template>
        <el-divider direction="vertical" />

        <!-- 操作工具栏 -->
        <template v-for="item in toolsStore.drawOperation" :key="item.tag">
            <el-tooltip effect="dark" :content="item.name" placement="bottom">
                <el-button circle @click="handleClickDrawOperation(item.tag)">

                    <img :src="item.icon" width="14" height="14" alt="" />
                </el-button>
            </el-tooltip>
        </template>
        <el-divider direction="vertical" />

        <!-- 视图工具栏 -->
        <template v-for="item in toolsStore.viewOperation" :key="item.tag">
            <el-tooltip effect="dark" :content="item.name" placement="bottom">
                <el-button circle @click="handleClickViewOperation(item.tag)">

                    <img :src="item.icon" width="14" height="14" alt="" />
                </el-button>
            </el-tooltip>
        </template>

    </div>
</template>

<script setup lang="ts">

const toolsStore = useToolsStore()
const appStore = useAppStore()

const handleClickDrawOperation = (operation: string) => {
    if (operation === 'clear') {
        appStore.removeAnnotation(operation)
    } else {
        appStore.allowEdit(operation)
        toolsStore.setShape(null)
    }
}
const handleClickViewOperation = (operation: string) => {
    appStore.fitScreen(operation)
}

</script>

<style lang="sass" scoped>
.tools 
    height: 28px
    display: flex
    align-items: center
    justify-content: center
    gap:10px
    padding: 10px 20px
    background-color: #fff
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)

.el-button.is-circle
    width: 26px
    height: 26px

</style>