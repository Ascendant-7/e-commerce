<template>
  <div class="page quicksand flex-center">
    <div class="container">
      <CategoryCard
        v-for="cat in categories"
        :key="cat.id"
        :card-label="cat.label"
        :card-sub-label="String(cat.stock)"
        :img-path="cat.imagePath"
      />
    </div>
    <div class="container">
      <PromoCard
        v-for="promo in promotions"
        :key="promo.id"
        :label="promo.label"
        :img-path="promo.imagePath"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories, fetchPromotions } from '@/services/api'
import type Category from '@/interfaces/Category'
import type Promotion from '@/interfaces/Promotion'
import CategoryCard from '@/components/CategoryCard.vue'
import PromoCard from '@/components/PromoCard.vue'
import '@/assets/main.scss'

// data references
const categories = ref<Category[]>([])
const promotions = ref<Promotion[]>([])

// events
onMounted(async () => {
  categories.value = await fetchCategories()
  promotions.value = await fetchPromotions()
})
</script>

<style scoped></style>
