<template>
  <section>
    <AppSectionHeading>
      <template v-slot:section-heading>
        DEVELOPED FOR AFRICA,
      </template>
      <template v-slot:sec-head-pt>
        RELIED ON WORLDWIDE
      </template>
    </AppSectionHeading>
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
