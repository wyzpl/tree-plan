<script setup lang="ts">
import MainView from './views/index.vue'
import HomeView from './views/Home.vue'

const isStart = computed(() => useDataStore().data.length > 0)
</script>

<template>
  <HomeView v-if="!isStart" />
  <MainView v-else />
</template>

<style scoped></style>
