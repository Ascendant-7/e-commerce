<template>
  <div
    class="card"
    :class="{ highlighted: isHovered }"
    :style="{ backgroundColor: bgColor, outline: `${isHovered ? 2 : 0}px solid ${outlineColor}` }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- image container and content -->
    <div class="img-box flex-center">
      <img ref="img" :src="imgPath" :alt="cardLabel" @load="onImageLoad" />
    </div>
    <!-- description container and content -->
    <div class="desc flex-center">
      <p class="label" :style="{ color: labelColor }">{{ cardLabel }}</p>
      <p class="sublabel" :style="{ color: subLabelColor }">{{ cardSubLabel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '@/assets/main.scss'
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

<style scoped lang="scss">
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

  /* color */
  background-color: #f5f5f5;
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
