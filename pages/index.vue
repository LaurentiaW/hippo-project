<template>
  <div>
    <AppHero />
    <main>
      <AppFeaturedProducts
        :pump-system="pump_system"
        :pump-range="pump_range"
      />
      <section class="work-process">
        <AppSectionHeading :heading="headingWorkProcess" />
        <div class="grid">
          <AppBoxes
            v-for="(box, i) in boxes"
            :id="i"
            :key="i"
            :heading="box.heading"
            :img="box.img"
            :details="box.details"
          />
        </div>
      </section>
      <Services :services="services" />
      <AppGeo>
        <template v-slot:intro>
          {{ geo.intro }}
        </template>
        <template v-slot:main>
          {{ geo.main }}
        </template>
        <template v-slot:closing>
          <br />
          {{ geo.closing }}
        </template>
      </AppGeo>
      <AppIndustries :industries="industries" />
      <AppAffiliates :associations="associations" />
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppFeaturedProducts from '@/components/products/AppFeaturedProducts.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppBoxes from '@/components/AppBoxes.vue'
import Services from '@/components/products/Services.vue'
import AppGeo from '@/components/AppGeo.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppAffiliates from '@/components/AppAffiliates.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppFeaturedProducts,
    AppSectionHeading,
    AppBoxes,
    Services,
    AppGeo,
    AppIndustries,
    AppAffiliates,
    AppCallToAction
  },
  head() {
    return {
      title: 'Hippo Home'
    }
  },
  data() {
    return {
      headingWorkProcess: 'OUR PROCESS'
    }
  },
  asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version
      })
      .then(response => {
        /* eslint-disable */
        console.log(response.data)
        return {
          //   blok: response.data.story.content.body,
          pump_range: response.data.story.content.body[0],
          pump_system: response.data.story.content.body[1],
          boxes: [
            response.data.story.content.body[2],
            response.data.story.content.body[3],
            response.data.story.content.body[4]
          ],
          services: response.data.story.content.body[5].text,
          geo: response.data.story.content.body[6],
          industries: [
            response.data.story.content.body[7],
            response.data.story.content.body[8],
            response.data.story.content.body[9],
            response.data.story.content.body[10],
            response.data.story.content.body[11],
            response.data.story.content.body[12]
          ],
          associations: [
            response.data.story.content.body[13],
            response.data.story.content.body[14],
            response.data.story.content.body[15],
            response.data.story.content.body[16],
            response.data.story.content.body[17]
          ]
        }
      })
      .catch(response => {
        context.error({
          statusCode: response.response.status,
          message: response.response.data
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.work-process {
  .grid {
    display: grid;
    @media (min-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }
  }

  h4 {
    padding: 0.25rem 0.75rem;
    background-color: var(--grey);
    color: var(--white);
    opacity: 0.84;
  }

  p {
    padding: 0 0.75rem 0.25rem 0.75rem;
    color: var(--white);
  }

  .bg-img {
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 1rem;
  }
}
p {
  white-space: pre-line;
}
</style>
