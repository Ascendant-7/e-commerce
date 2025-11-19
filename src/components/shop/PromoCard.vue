<template>
  <UiCard class="promocard">
    <div class="promo-desc">
      <h1 class="promo-label">{{ label }}</h1>
      <UiButton :label="`Shop Now &rarr;`"></UiButton>
    </div>
    <div class="img-wrapper">
      <img :src="imgPath" :alt="imgPath">
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '@/components/ui/UiCard.vue';
import UiButton from '@/components/ui/UiButton.vue';
import { defineProps } from 'vue';

defineProps<{
  label: string,
  imgPath: string
}>();
</script>

<style scoped>

</style>
