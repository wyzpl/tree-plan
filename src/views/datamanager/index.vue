<template>
    <div class="data-manager">
        <el-scrollbar :view-style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingRight: '10px' }"
            height="95vh">
            <p v-for="item in 200" :key="item" class="data-item">{{ item }}</p>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
.data-manager 
    width: 280px
    min-width: 280px
    background-color: #fff
    padding: 10px 0 10px 10px
    border-right:1px solid rgba(0, 0, 0, 0.1)

    .data-item
        flex-basis: 40%
        height: 80px
        border: 1px solid #535bf2
        padding: 0 10px
</style>