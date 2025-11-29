<template>
  <UiButton label="Shop Now &rarr;" @click="ShopNow(promotion)"></UiButton>
</template>

<script setup lang="ts">
import UiButton from '../ui/UiButton.vue'

// properties
defineProps<{
  promotion: string
}>()

// events
function ShopNow(promotion: string) {
  alert("Let's shop: " + promotion)
}
</script>

<style scoped></style>
