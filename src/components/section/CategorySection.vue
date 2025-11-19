<template>
  <UiContainer>
    <CategoryCard
    v-for="cat in categories"
    :key="cat.id"
    :card-label="cat.label"
    :card-sub-label="`${String(cat.stock)} ${cat.stock === 1 ? 'item' : 'items'}`"
    :img-path="cat.imagePath"
    />
  </UiContainer>
</template>

<script setup lang="ts">
import UiContainer from '@/components/ui/UiContainer.vue';
import CategoryCard from '@/components/shop/CategoryCard.vue';
import categories from '@/data/categories.json';
</script>

<style scoped>

</style>
