<template>
    <div class="data-manager">
        <el-scrollbar :view-style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingRight: '10px' }"
            height="95vh">
            <div class="data-item" v-for="item in 200">
                <img :src="Img" alt="">
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import Img from '@/assets/1 (308).jpg'
</script>

<style lang="sass" scoped>
.data-manager 
    width: 280px
    min-width: 280px
    background-color: #fff
    padding: 10px 0 10px 10px
    border-right:1px solid rgba(0, 0, 0, 0.1)

    .data-item
        flex-basis: 47%
        border-radius: 4px
        height: 88px
        cursor: pointer
        border: 1px solid rgba(0, 0, 0, )
        overflow: hidden
        img
            width: 100%
            height: 100%
            border-radius: 2px
            transition: all 0.2s linear

            &:hover
                transform: scale(1.2)

        &:hover
            border: 1px solid #409EFF

        

        
            
</style>