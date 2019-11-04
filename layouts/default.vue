<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader'
import TheSidenav from '@/components/Nav/TheSidenav'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    AppFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  head() {
    return {
      titleTemplate: '%s - Hippo Slurry Pump Range & Pumping Systems',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The award winning Hippo Slurry Pump Range for heavy duty applications'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
</style>
