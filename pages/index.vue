<template>
  <div>
    <div class="container">
      <Tagline />
      <Slogan />
    </div>
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
import Tagline from '@/components/AppHero/Tagline.vue'
import Slogan from '@/components/AppHero/Slogan.vue'
import AppFeaturedProducts from '@/components/products/AppFeaturedProducts.vue'
import WorkProcess from '@/components/products/WorkProcess.vue'
import Services from '@/components/products/Services.vue'
import AppGeo from '@/components/AppGeo.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppAffiliates from '@/components/AppAffiliates.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    Tagline,
    Slogan,
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
