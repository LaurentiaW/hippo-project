<template>
  <section>
    <AppSectionHeading />
    <div class="flex">
      <div class="pump-range">
        <nuxt-link to="/pump-range">
          <h4 class="upper">Pump Range</h4>
          <img src="" alt="" class="framed" />
        </nuxt-link>
      </div>
      <div class="pump-systems">
        <nuxt-link to="/pump-systems">
          <h4 class="upper">Pump Systems</h4>
          <img src="" alt="" class="framed" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionHeading from '@/components/AppSectionHeading.vue'
export default {
  components: {
    AppSectionHeading
  }
}
</script>

<style lang="scss" scoped></style>
