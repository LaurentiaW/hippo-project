<template>
  <div>
    <AppHero />
    <main>
      <AppIndustries />
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppIndustries from '@/components/AppIndustries.vue'

export default {
  components: {
    AppHero,
    AppIndustries
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: var(--white);
  margin: 0 0.5rem;
  -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
</style>
