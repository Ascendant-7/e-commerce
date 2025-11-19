<template>
  <button>{{ label }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  label: string
}>();
</script>

<style scoped>

</style>
