<template>
    <div class="data-manager">
        <el-scrollbar :view-style="{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px' }" height="95vh">
            <div class="data-item" :class="item.url === dataStore.current.url ? 'active' : ''" v-for="item in data"
                @click="dataStore.setCurrent(item)">
                <img :src="item.url" alt="">
            </div>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
const dataStore = useDataStore()

const { data } = storeToRefs(dataStore)

</script>

<style lang="sass" scoped>
.data-manager 
    width: 300px
    min-width: 300px
    background-color: #fff
    border-right:1px solid rgba(0, 0, 0, 0.1)

    .data-item
        flex-basis: 47%
        border-radius: 4px
        height: 88px
        cursor: pointer
        border: 1px solid rgba(0, 0, 0, )
        transition: all 0.2s linear
        overflow: hidden
        img
            width: 100%
            height: 100%
            border-radius: 2px

        &:hover
            transform: translateY(-2px)
            box-shadow: 7px 7px 0 -2px #39a2db
        &.active
            transform: translateY(-2px)
            box-shadow: 7px 7px 0 -2px #f85959
</style>