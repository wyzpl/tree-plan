<template>
    <header class="top-header">
        <div id="logo">{{ typed }}</div>
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
import Typed from 'typed.js';

const logo = ref('')

onMounted(() => {
    logo.value = new Typed('#logo', {
        strings: ['TreePlan Annotation'],
        typeSpeed: 50,
        cursorChar: ''
    });
})

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
    height: 36px
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
    display: flex
    align-items: center
    padding:  10px
    gap: 30px
    cursor: pointer
</style>