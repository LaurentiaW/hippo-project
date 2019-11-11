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
            :img="award.img"
            :title="award.title"
            :institution="award.institution"
            :date="award.date"
            :place="award.place"
            @awardSelect="onAwardSelect"
          />
        </div>
        <Award
          :img="selectedImg"
          :title="selectedTitle"
          :institution="selectedInstitution"
          :date="selectedDate"
          :place="selectedPlace"
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
      selectedTitle: null,
      selectedImg: null,
      selectedInstitution: null,
      selectedDate: null,
      selectedPlace: null,
      selectedAwardIsPortrait: false,
      awards: []
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
          awards: response.data.stories.map(award => {
            return {
              id: award.id,
              img: award.content.img,
              title: award.content.title,
              institution: award.content.institution,
              date: award.content.date,
              place: award.content.place
            }
          })
        }
      })
  },
  methods: {
    onAwardSelect(title, img, institution, date, place, isPortrait) {
      /*eslint-disable */
      console.log(title, img, institution, date, place, isPortrait)
      this.selectedTitle = title
      this.selectedImg = img
      this.selectedInstitution = institution
      this.selectedDate = date
      this.selectedPlace = place
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
