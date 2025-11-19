<template>
  <div class="container center-items">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import '@/assets/main.css';
</script>

<style scoped>
  .container {
    flex-wrap: wrap;
    gap: 16px;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
</style>
