<template>
  <UiContainer>
    <PromoCard
    v-for="promo in promotions"
    :key="promo.id"
    :label="promo.label"
    :imgPath="promo.imagePath"
    ></PromoCard>
  </UiContainer>
</template>

<script setup lang="ts">
import UiContainer from '@/components/ui/UiContainer.vue';
import PromoCard from '@/components/shop/PromoCard.vue';
import promotions from '@/data/promotions.json';

</script>
<style scoped>

</style>
