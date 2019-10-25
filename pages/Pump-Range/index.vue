<template>
  <div>
    <AppHero>
      <template v-slot:tag>
        Hippo Slurry Pump
      </template>
      <template v-slot:tag-pt>
        Pump Range
      </template>
      <template v-slot:main>
        THE AWARD WINNING
      </template>
      <template v-slot:main-pt>
        HEAVY DUTY PUMP RANGE
      </template>
    </AppHero>
    <main>
      <h1>Pump Range</h1>
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    AppHero
  }
}
</script>

<style lang="scss" scoped></style>
