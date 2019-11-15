<template>
  <section>
    <AppSectionHeading :heading="heading" />
    <div class="affiliates">
      <ul class="grid">
        <li v-for="(logo, i) in associations" :key="i">
          <a :href="logo.url" target="_blank">
            <img :src="logo.logo" :alt="logo.title" :title="logo.title" />
          </a>
        </li>
      </ul>
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
    associations: Array
  },
  data() {
    return {
      heading: 'ASSOCIATIONS & AFFILIATES'
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 1rem;
  align-items: center;
}

img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
