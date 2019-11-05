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
            @awardToggle="displayAward = !displayAward"
          />
        </div>
        <Award :show="displayAward" @close="displayAward = false" />
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
  data() {
    return {
      tagline: 'An Award Winning Solution',
      slogan: 'The Hippo Trophy Room',
      heading: 'our awards',
      displayAward: false,
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
  }
  // methods: {
  //   showModal() {
  //     this.isModalVisible = true
  //   },
  //   closeModal() {
  //     this.isModalVisible = false
  //   }
  // }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
}
</style>
