<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="submersibleHeading" />
        <div v-if="pumps" class="grid">
          <ProductPreview
            v-for="pump in submersibleConfig"
            :id="pump.id"
            :key="pump.id"
            :title="pump.title"
            :img="pump.img"
          />
        </div>
      </section>
      <section>
        <AppSectionHeading :heading="verticalHeading" />
        <div class="grid">
          <ProductPreview
            v-for="pump in verticalConfig"
            :id="pump.id"
            :key="pump.id"
            :title="pump.title"
            :img="pump.img"
          />
        </div>
      </section>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import ProductPreview from '@/components/products/ProductPreview.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    ProductPreview,
    AppCallToAction
  },
  head() {
    return {
      title: 'Pump Range',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Award winning Hippo Pump Range consist of submersible and vertical configurations'
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'THE HIPPO SLURRY PUMP RANGE',
      slogan: 'THE AWARD WINNING HEAVY DUTY PUMP RANGE',
      submersibleHeading: 'SUBMERSIBLE CONFIGURATIONS',
      verticalHeading: 'Vertical CONFIGURATIONS'
    }
  },
  computed: {
    submersibleConfig() {
      /* eslint-disable */
      // console.log(`Pumps array ${pumps}`)
      return this.pumps.filter(pump => pump.configuration === 'submersible')
    },
    verticalConfig() {
      return this.pumps.filter(pump => pump.configuration === 'vertical')
    }
  },
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories', {
        version,
        starts_with: 'pump-range/'
      })
      .then(response => {
        /* eslint-disable */
        console.log(response)
        return {
          pumps: response.data.stories.map(pump => {
            return {
              id: pump.slug,
              title: pump.content.title,
              img: pump.content.img,
              slug: pump.full_slug,
              configuration: pump.content.configuration,
              description: pump.content.description,
              type: pump.content.type,
              tagline: pump.content.hero.tagline,
              slogan: pump.content.hero.slogan,
              benefits: pump.content.benefits,
              designFeatures: pump.content.design_features,
              name: pump.name,
              application: pump.content.application
            }
          })
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 1rem;
  @media screen and(min-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
