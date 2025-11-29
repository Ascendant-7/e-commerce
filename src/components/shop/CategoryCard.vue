<template>
  <UiCard
    class="card center-items"
    :class="{ highlighted: isHovered }"
    :style="{ backgroundColor: bgColor, outline: `${isHovered ? 2 : 0}px solid ${outlineColor}` }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- image container and content -->
    <div class="img-box center-items">
      <img ref="img" class="img" :src="imgPath" :alt="cardLabel" @load="onImageLoad" />
    </div>
    <!-- description container and content -->
    <div class="desc center-items">
      <p class="label" :style="{ color: labelColor }">{{ cardLabel }}</p>
      <p class="sublabel" :style="{ color: subLabelColor }">{{ cardSubLabel }}</p>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import '@/assets/main.css'
import UiCard from '@/components/ui/UiCard.vue'
import useDominantColor from '@/composables/useDominantColor.ts'

// properties
defineProps<{
  imgPath?: string
  cardLabel?: string
  cardSubLabel?: string
}>()

// states
const isHovered = ref(false)

// element references
const img = ref(null)

// composables
const { bgColor, outlineColor, labelColor, subLabelColor, getDominantColor } = useDominantColor()

// events
const onImageLoad = () => getDominantColor(img.value)
</script>

<style scoped>
.card {
  /* dimension */
  width: 100px;
  aspect-ratio: 3 / 4;

  /* color */
  background-color: #f5f5f5;

  /* item structure */
  gap: 5%;
  flex-direction: column;
}

.highlighted {
  box-shadow: 10px 10px 20px 0px #18181824;
}

.img-box {
  /* dimension */
  height: 40%;
  width: 100%;

  /* behavior */
  overflow: hidden;
}

.desc {
  /* dimension */
  width: 100%;

  /* item structure */
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.label {
  font-weight: bold;
  font-size: 0.75em;
}

.sublabel {
  color: gray;
  font-size: 0.6em;
}

img {
  /* dimension */
  height: 100%;
  width: 60%;

  /* behavior */
  object-fit: cover;
}

p {
  margin: 0;
}
</style>
