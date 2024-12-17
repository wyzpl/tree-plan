<template>
    <el-tooltip content="暂无实现">
        <div class="footer">
            <el-icon>
                <ArrowLeft />
            </el-icon>
            <span>图片名称</span>
            <el-icon>
                <ArrowRight />
            </el-icon>
        </div>
    </el-tooltip>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="sass" scoped>
.footer 
    height: 28px
    display: flex
    align-items: center
    justify-content: center
    gap:25px
    padding: 10px 20px
    background-color: #fff
    border-top: 1px solid rgba(0, 0, 0, 0.1)

.el-icon
    cursor: pointer
</style>