<template>
  <UiCard class="card">
    <div class="promo-desc">
      <h5 class="promo-label">{{ label }}</h5>
      <UiButton class="quicksand" :label="`Shop Now &rarr;`"></UiButton>
    </div>
    <div class="img-box">
      <img ref="img" class="img" :src="imgPath" :alt="imgPath" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import UiCard from '@/components/ui/UiCard.vue'
import UiButton from '@/components/ui/UiButton.vue'

// properties
defineProps<{
  label: string
  imgPath: string
}>()
</script>

<style scoped>
.card {
  /* dimension */
  height: 250px;
  width: 600px;

  /* style */
  border-radius: 20px;

  /* color */
  background-color: whitesmoke;
}
.img-box {
  /* color */
  background-color: whitesmoke;

  /* dimension */
  height: 100%;

  /* behavior */
  overflow: hidden;

  /* style */
  padding: 20px;
}
.img {
  /* dimension */
  height: 75%;

  /* position */
  translate: 12% 10%;

  /* behavior */
  object-fit: cover;
}
</style>
