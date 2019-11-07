<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <h1>Thanks!</h1>
      <p>
        We've received your messages and our time will be in contact with you
        shortly!
      </p>
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'

export default {
  head() {
    return {
      title: 'Thank You - Form received',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your contact form has been received - thank you!'
        }
      ]
    }
  },
  components: {
    AppHero
  }
}
</script>

<style lang="scss" scoped></style>
