<template>
  <UiCard
  class="category-card center-items"
  :class="{ highlighted: isHovered }"
  :style="{ backgroundColor: bgColor, outline: `${isHovered ? 2 : 0}px solid ${outlineColor}`}"
  @mouseover="isHovered = true"
  @mouseleave="isHovered = false"
  >
    <div class="img-wrapper center-items">
      <img
      ref="cardImage"
      class="card-img"
      :src="imgPath"
      :alt="cardLabel"
      @load="onImageLoad"
      >
    </div>
    <div class="card-desc center-items">
      <p class="card-label" :style="{ color: labelColor }">{{ cardLabel }}</p>
      <p class="card-sublabel" :style="{ color: subLabelColor }">{{ cardSubLabel }}</p>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
  import {defineProps, ref} from 'vue';
  import UiCard from '@/components/ui/UiCard.vue';
  import '@/assets/main.css';
  import useDominantColor from '@/composables/useDominantColor.ts';
  defineProps<{
    imgPath?: string,
    cardLabel?: string,
    cardSubLabel?: string
  }>();
  const isHovered = ref(false);
  const { bgColor, outlineColor, labelColor, subLabelColor, getDominantColor } = useDominantColor();
  const cardImage = ref(null);
  const onImageLoad = () => {
    getDominantColor(cardImage.value);
  }
</script>

<style scoped>
  /* .category-card, .img-wrapper, .card-img, .card-desc, .card-label, .card-sublabel {
    border: 1px solid blue;
  } */
  .category-card {
    width: 100px;
    aspect-ratio: 3 / 4;
    gap: 5%;
    flex-direction: column;
    background-color: #f5f5f5;
  }
  .highlighted {
    box-shadow: 10px 10px 20px 0px #18181824;
  }
  .img-wrapper {
    height: 40%;
    width: 100%;
    overflow: hidden;
  }
  .card-img {
    object-fit: cover;
    height: 100%;
    width: 60%;
  }
  .card-desc {
    width: 100%;
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
  .card-label {
    font-weight: bold;
    font-size: 0.75em;
  }
  .card-sublabel {
    color: gray;
    font-size: 0.6em;
  }
  p { margin: 0 }
</style>
