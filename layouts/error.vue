<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <h1>{{ message }}</h1>
      <p v-if="statusCode === 404">
        <nuxt-link to="/">
          Return to the Hippo <span class="underline">homepage</span>!
        </nuxt-link>
      </p>
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    AppHero
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message
    }
  },
  data() {
    return {
      tagline: 'So this is embarrassing',
      slogan: 'There is a slight error'
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  }
}
</script>

<style lang="scss" scoped></style>
