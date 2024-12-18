<template>
    <div class="footer">
        <el-tooltip content="暂未实现">
            <el-button text :icon="ArrowLeft" disabled></el-button>
        </el-tooltip>
        <span>{{ current.name }}</span>
        <el-tooltip content="暂未实现">
            <el-button text :icon="ArrowRight" disabled></el-button>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'

const dataStore = useDataStore()

const { current, data } = storeToRefs(dataStore)



</script>

<style lang="sass" scoped>
.footer 
    height: 28px
    display: flex
    align-items: center
    justify-content: center
    gap:45px
    padding: 10px 20px
    background-color: #fff
    border-top: 1px solid rgba(0, 0, 0, 0.1)

.el-button
    width: 32px
</style>