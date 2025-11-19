<template>
  <UiContainer class="card">
    <slot></slot>
  </UiContainer>
</template>

<script setup lang="ts">
import UiContainer from "@/components/ui/UiContainer.vue";
</script>

<style scoped>
  .card {
    border-radius: 10%;
    overflow: hidden;
  }
</style>
