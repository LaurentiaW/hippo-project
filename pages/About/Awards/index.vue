<template>
  <div class="awards-overview">
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="heading" />
        <div class="grid">
          <AwardPreview
            v-for="(award, i) in awards"
            :key="i"
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
      selectedAwardIsPortrait: false,
      awards: [
        {
          id: '1',
          title: 'Award of Excellence',
          date: '2017-05-25',
          institution: 'South African Flame Proof Association',
          category: 'Most Innovative Product or Engineering Solution',
          place: 'runner up',
          img: '/img/awards/1.png'
        },
        {
          id: '2',
          title: '3rd Annual SA Premier Business Awards 2014/2015',
          date: '2015-04-09',
          institution: 'the dti (Department of Trade and Industries)',
          category: 'SMME Category',
          place: 'Winner',
          img: '/img/awards/2.png'
        },
        {
          id: '3',
          title: 'Award of Excellence',
          date: '2017-05-25',
          institution: 'South African Flame Proof Association',
          category: 'Most Innovative Product or Engineering Solution',
          place: 'runner up',
          img: '/img/awards/1.png'
        },
        {
          id: '4',
          title: '3rd Annual SA Premier Business Awards 2014/2015',
          date: '2015-04-09',
          institution: 'the dti (Department of Trade and Industries)',
          category: 'SMME Category',
          place: 'Winner',
          img: '/img/awards/2.png'
        }
      ]
    }
  },
  methods: {
    onAwardSelect(award, isPortrait) {
      // /*eslint-disable */
      // console.log(award, isPortrait)
      this.selectedAward = award
      this.displayAward = true
      this.selectedAwardIsPortrait = isPortrait
      // if (selectedAward != null) {
      //   /*eslint-disable */
      //   console.log(selectedAward, selectedAwardIsPortrait)
      // }
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
