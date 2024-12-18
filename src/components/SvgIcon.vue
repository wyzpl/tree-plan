<template>
    <svg aria-hidden="true" style="width: 14px;height: 14px;">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    name: string;
}

const props = defineProps<Props>();
const symbolId = computed(() => `#icon-${props.name}`);
</script>
