<template>
  <div class="awards-overview">
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="heading" />
        <div v-if="awards" class="grid">
          <AwardPreview
            v-for="award in awards"
            :key="award.id"
            :award="award"
            @awardSelect="onAwardSelect"
          />
        </div>
        <Award
          :award="selectedAward"
          :is-portrait="selectedAwardIsPortrait"
          :show="displayAward"
          @close="displayAward = false"
        />
      </section>
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AwardPreview from '@/components/Awards/AwardPreview.vue'
import Award from '@/components/Awards/Award.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    AwardPreview,
    Award
  },
  head() {
    return {
      title: 'Awards',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Hippo Slurry Pump Range and Pumping Systems have been awarded on multiple occassions - here is some of the awards awarded '
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'An Award Winning Solution',
      slogan: 'The Hippo Trophy Room',
      heading: 'our awards',
      displayAward: false,
      selectedAward: null,
      selectedAwardIsPortrait: false
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'about/awards/'
      })
      .then(response => {
        /* eslint-disable */
        console.log(response)
        return {
          awards: response.data.stories
        }
      })
  },
  methods: {
    onAwardSelect(award, isPortrait) {
      this.selectedAward = award
      this.displayAward = true
      this.selectedAwardIsPortrait = isPortrait
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  .grid {
    @media screen and (min-width: 360px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
}
</style>
