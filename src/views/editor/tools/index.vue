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
    width: 99.9%
    height: 28px
    border: 1px solid #535bf2
    display: flex
    align-items: center
    gap:10px
    padding: 0 10px

.el-button.is-circle
    width: 26px
    height: 26px

</style>