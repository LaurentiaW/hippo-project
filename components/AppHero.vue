<template>
  <div class="hero container">
    <Tagline />
    <Slogan />
  </div>
</template>

<script>
import Tagline from '@/components/AppHero/Tagline.vue'
import Slogan from '@/components/AppHero/Slogan.vue'
export default {
  components: {
    Tagline,
    Slogan
  }
}
</script>

<style lang="scss" scoped></style>
