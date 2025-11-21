<template>
  <UiCard class="promocard">
    <div class="promo-desc">
      <h5 class="promo-label">{{ label }}</h5>
      <UiButton class="quicksand" :label="`Shop Now &rarr;`"></UiButton>
    </div>
    <div class="img-wrapper">
      <img class="promo-img" :src="imgPath" :alt="imgPath" />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '@/components/ui/UiCard.vue'
import UiButton from '@/components/ui/UiButton.vue'
import { defineProps } from 'vue'

defineProps<{
  label: string
  imgPath: string
}>()
</script>
<style scoped>
.promocard {
  height: 250px;
  width: 600px;
  border-radius: 20px;
}
.img-wrapper {
  background-color: whitesmoke;
  height: 100%;
  overflow: hidden;
  padding: 20px;
}
.promo-img {
  object-fit: cover;
  height: 75%;
  translate: 12% 10%;
}
</style>
