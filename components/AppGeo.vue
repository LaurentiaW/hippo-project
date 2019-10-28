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
    <p>
      <slot name="open-p"
        >The Hippo Slurry Pump Range was designed and developed to meet the
        harsh and continuous conditions set by the Mining and mineral processing
        industries found in Southern Africa.</slot
      >
    </p>
    <Map />
    <p>
      <slot name="main-one"
        >Creating a slurry pump range that is capable of running dry and operate
        in a wide variety of temperatures the Hippo Pump Range is the ideal
        solution for dealing with high volume dewatering situation to harsh and
        abrasive applications; with a custom build solution for each
        application.
      </slot>
      <br />
      <slot name="main-two">
        Our pumps and pump systems have proven to be equally effective in other
        parts of the world including Canada, South America, Australia,
        Middle-East and Russia.
      </slot>
    </p>
  </section>
</template>

<script>
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import Map from '@/components/Icons/Map'

export default {
  components: {
    AppSectionHeading,
    Map
  }
}
</script>

<style lang="scss" scoped></style>
