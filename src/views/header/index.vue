<template>
    <header class="top-header">
        <div>logo</div>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                文件管理
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="label">Edit Label</el-dropdown-item>
                    <el-dropdown-item command="upload">Action 2</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </header>

    <EditLabel ref="editLabelRef" />
</template>

<script setup lang="ts">

const editLabelRef = ref(null)


const handleCommand = (command: string) => {
    console.log(command)
    if (command === 'label') {
        editLabelRef.value.open()
    }
}
</script>

<style lang="sass" scoped>
.top-header 
    width: 99%
    height: 28px
    border: 1px solid #535bf2
    display: flex
    align-items: center
    padding:  10px
    gap: 10px
    cursor: pointer
</style>