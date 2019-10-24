<template>
  <div>
    <AppHero />
    <main>
      <!-- <AppIndustries /> -->
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
// import AppIndustries from '@/components/AppIndustries.vue'

export default {
  components: {
    AppHero
    // AppIndustries
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: var(--white);
}
</style>
