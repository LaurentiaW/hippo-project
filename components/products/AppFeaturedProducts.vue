<template>
  <section>
    <AppSectionHeading />
    <div class="flex">
      <div class="pump-range">
        <nuxt-link to="/pump-range">
          <h4 class="upper center">Pump Range</h4>
          <img
            src="/img/pump-range.jpg"
            alt="The Hippo Slurry Pump Range"
            class="framed"
          />
        </nuxt-link>
      </div>
      <div class="divider"></div>
      <div class="pump-systems">
        <nuxt-link to="/pump-systems">
          <h4 class="upper center">Pump Systems</h4>
          <img
            src="/img/pumping-systems.jpg"
            alt="Hippo Slurry Pumps designs pumping systems to address customers needs"
            class="framed"
          />
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

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-around;
}

.divider {
  width: 2rem;
}
</style>
