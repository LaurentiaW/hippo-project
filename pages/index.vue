<template>
  <div>
    <AppHero />
    <main>
      <AppFeaturedProducts />
      <AppIndustries />
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppFeaturedProducts from '@/components/Products/AppFeaturedProducts.vue'

export default {
  components: {
    AppHero,
    AppIndustries,
    AppFeaturedProducts
  }
}
</script>

<style lang="scss" scoped></style>
