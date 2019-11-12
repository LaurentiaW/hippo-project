<template>
  <section>
    <AppSectionHeading />
    <div class="flex">
      <div class="pump-range">
        <nuxt-link to="/pump-range">
          <h4 class="upper center">{{ pumpRange.title }}</h4>
          <img :src="pumpRange.img" :alt="pumpRange.img_text" class="framed" />
        </nuxt-link>
      </div>
      <div class="divider"></div>
      <div class="pump-systems">
        <nuxt-link to="/pump-systems">
          <h4 class="upper center">{{ pumpSystem.title }}</h4>
          <img
            :src="pumpSystem.img"
            :alt="pumpSystem.img_text"
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
  },
  props: {
    pumpSystem: Object,
    pumpRange: Object
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
