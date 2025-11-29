<template>
  <div class="card">
    <div class="desc">
      <h5 class="label">{{ label }}</h5>
      <ShopButton :promotion="label" />
    </div>
    <div class="img-box">
      <img ref="img" class="img" :src="imgPath" :alt="imgPath" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/main.scss'
import ShopButton from './ShopButton.vue'

// properties
defineProps<{
  label: string
  imgPath: string
}>()
</script>

<style scoped lang="scss">
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
