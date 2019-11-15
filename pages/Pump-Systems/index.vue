<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="heading" />
        <div class="grid">
          <ProductPreview
            v-for="pumpSystem in pumpSystems"
            :id="pumpSystem.slug"
            :key="pumpSystem.id"
            :title="pumpSystem.content.title"
            :img="pumpSystem.content.img"
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
      title: 'Pumping Systems',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Hippo Pump Range engineerd as part of innovative pumping systems to solve complex problems'
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'SLURRY PUMPING SYSTEMS',
      slogan: 'INNOVATIVE ENGINEERING SOLUTIONS',
      heading: 'PUMPING SYSTEMS'
    }
  },
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories', {
        version,
        starts_with: 'pump-systems/'
      })
      .then(response => {
        return {
          pumpSystems: response.data.stories
        }
      })
  }
}
</script>

<style lang="scss" scoped></style>
