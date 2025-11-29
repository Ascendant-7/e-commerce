<template>
  <button @click="ShopNow(promotion)">Shop Now &rarr;</button>
</template>

<script setup lang="ts">
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
