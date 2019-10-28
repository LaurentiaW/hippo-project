<template>
  <div>
    <AppHero />
    <main>
      <AppFeaturedProducts />
      <WorkProcess />
      <Services />
      <AppGeo />
      <AppIndustries />
      <AppAffiliates />
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppFeaturedProducts from '@/components/Products/AppFeaturedProducts.vue'
import WorkProcess from '@/components/products/WorkProcess.vue'
import Services from '@/components/products/Services.vue'
import AppGeo from '@/components/AppGeo.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppAffiliates from '@/components/AppAffiliates.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppFeaturedProducts,
    WorkProcess,
    Services,
    AppGeo,
    AppIndustries,
    AppAffiliates,
    AppCallToAction
  }
}
</script>

<style lang="scss" scoped></style>
