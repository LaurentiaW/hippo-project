<template>
  <section>
    <AppSectionHeading :heading="heading" />
    <p>
      <slot name="intro"
        >The Hippo Slurry Pump Range was designed and developed to meet the
        harsh and continuous conditions set by the Mining and mineral processing
        industries found in Southern Africa.</slot
      >
    </p>
    <Map />
    <p>
      <slot name="main"
        >Creating a slurry pump range that is capable of running dry and operate
        in a wide variety of temperatures the Hippo Pump Range is the ideal
        solution for dealing with high volume dewatering situation to harsh and
        abrasive applications; with a custom build solution for each
        application.
      </slot>
      <br />
      <slot name="closing">
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
  },
  data() {
    return {
      heading: 'DEVELOPED FOR AFRICA, RELIED ON WORLDWIDE'
    }
  }
}
</script>

<style lang="scss" scoped></style>
