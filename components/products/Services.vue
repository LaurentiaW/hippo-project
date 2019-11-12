<template>
  <section>
    <AppSectionHeading :heading="heading" />
    <p>
      {{ services }}
    </p>
  </section>
</template>

<script>
import AppSectionHeading from '@/components/AppSectionHeading.vue'
export default {
  components: {
    AppSectionHeading
  },
  props: {
    services: {
      type: String,
      default: 'intro to the services offered by Hippo Slurry Pumps'
    }
  },
  data() {
    return {
      heading: 'SERVICES & AFTER SALES CARE'
    }
  }
}
</script>

<style lang="scss" scoped></style>
