<script setup lang="ts">
import CategorySection from '@/components/section/CategorySection.vue'
import PromoSection from '@/components/section/PromoSection.vue'
</script>

<template>
  <div class="center-items app">
    <CategorySection class="quicksand" />
    <PromoSection class="quicksand" />
  </div>
</template>

<style scoped>
.app {
  flex-direction: column;
  gap: 20px;
}
</style>
