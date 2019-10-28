<template>
  <section>
    <AppSectionHeading>
      <template v-slot:section-heading>
        ASSOCIATIONS &
      </template>
      <template v-slot:sec-head-pt>
        AFFILIATES
      </template>
    </AppSectionHeading>
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
  data() {
    return {
      associations: [
        {
          logo: '/logos/saceec.png',
          title: 'South Africa Capital Equipment Export Council',
          url: 'https://www.saceec.com/'
        },
        {
          logo: '/logos/safa.jpg',
          title: 'South Africa Flameproof Associations',
          url: 'http://www.saflameproof.org.za/'
        },
        {
          logo: '/logos/sassda.png',
          title: 'South Africa Stainless Steel Development Association',
          url: 'https://sassda.co.za/'
        },
        {
          logo: '/logos/saif.png',
          title: 'South African Institute of Foundrymen',
          url: 'http://www.foundries.org.za/'
        },
        {
          logo: '/logos/SAPSDA.bmp',
          title: 'South Africa Pump Systems Development Association',
          url: 'https://www.sapsda.co.za/'
        }
      ]
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
