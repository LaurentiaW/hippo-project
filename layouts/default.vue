<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader'
import TheSideNav from '@/components/Nav/TheSideNav'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    TheHeader,
    TheSideNav,
    AppFooter
  },
  data() {
    return {
      displaySidenav: false
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
