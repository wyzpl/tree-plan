<template>
    <div class="tools">
        <el-button circle v-for="item in toolsStore.shapeList" :key="item.tag" @click="toolsStore.setShape(item.tag)">
            <img :src="item.icon" width="14" height="14" alt="" />
        </el-button>

    </div>
</template>

<script setup lang="ts">
import { useToolsStore } from '@/store/tools'

const toolsStore = useToolsStore()
</script>

<style lang="sass" scoped>
.tools 
    position: absolute
    top:20px
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