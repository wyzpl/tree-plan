<template>
    <div class="main-view">
        <HeaderView />
        <div class="container-view">
            <Datamanager />
            <Editor />
            <AnnotationView />
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderView from './header/index.vue'
import Editor from './editor/index.vue'
import AnnotationView from './annotation/index.vue'
import Datamanager from './datamanager/index.vue'

</script>

<style scoped>
.main-view {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.container-view {
    max-width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>