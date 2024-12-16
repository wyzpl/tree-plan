<template>
    <header class="top-header">
        <div id="logo"></div>
        <el-dropdown @command="handleCommand">
            <span class="dropdown-link">
                文件管理
            </span>
            <template #dropdown>
                <el-dropdown-menu :show-arrow="false">
                    <el-dropdown-item command="label">Edit Label</el-dropdown-item>
                    <el-dropdown-item command="upload">Action 2</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <el-dropdown @command="handleCommand">
            <span class="dropdown-link">
                视图管理
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

    #logo
        width: 160px
    
.el-tooltip__trigger:focus-visible 
    outline: unset

.dropdown-link
    color: #333
    font-size: 14px
    font-weight: bold

</style>