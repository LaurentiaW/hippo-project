<template>
  <div>
    <AppHero />
    <main>
      <AppFeaturedProducts />
      <WorkProcess />
      <Services />
      <AppIndustries />
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppFeaturedProducts from '@/components/Products/AppFeaturedProducts.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'
import WorkProcess from '@/components/products/WorkProcess.vue'
import Services from '@/components/products/Services.vue'

export default {
  components: {
    AppHero,
    AppIndustries,
    AppFeaturedProducts,
    AppCallToAction,
    WorkProcess,
    Services
  }
}
</script>

<style lang="scss" scoped></style>
