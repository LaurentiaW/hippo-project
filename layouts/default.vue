<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Nav/TheHeader'
import TheSideNav from '@/components/Nav/TheSideNav'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter
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
