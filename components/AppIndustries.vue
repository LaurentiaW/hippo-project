<template>
  <section>
    <AppSectionHeading>
      <template v-slot:section-heading>
        OUR EXPERIENCE
      </template>
      <template v-slot:sec-head-pt>
        INCLUDES
      </template>
    </AppSectionHeading>
    <div class="grid">
      <article
        v-for="industry in industries"
        :key="industry.id"
        class="industry-blok"
      >
        <div class="icon-wrapper">
          <img :src="industry.img" alt="industry.title" />
        </div>
        <div class="txt-wrapper">
          <h4>{{ industry.title }}</h4>
          <p>{{ industry.text }}</p>
        </div>
      </article>
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
      industries: [
        {
          title: 'Mining',
          text:
            'All sectors of Mining & Mineral extraction: Coal, Platinum, Gold, Iron Ore & Diamonds',
          id: 'mining',
          img: '/svg/industries/mining.svg'
        },
        {
          title: 'Chemical & Processing',
          text:
            'Including Oil Sands, Britton Tar, Petrochemical, fertilizer and explosive industries',
          id: 'liquid',
          img: '/svg/industries/chemical-processing.svg'
        },
        {
          title: 'Power Generation, Municipal Services and Waste Management',
          text: 'Ash, water treatment and waste disposal',
          id: 'power',
          img: '/svg/industries/powergeneration.svg'
        },
        {
          title: 'Sand, Grave, Ceramic & General Constructions',
          text: 'High concentration of abrasive solids',
          id: 'quarry',
          img: '/svg/industries/sand.svg'
        },
        {
          title: 'Foundries & Steel Production',
          text: 'Cooling, water returns & concentrated abrasive solids',
          id: 'industrial',
          img: '/svg/industries/foundries.svg'
        },
        {
          title: 'Nuclear',
          text: 'Specifically designed for high temperatures and contamination',
          id: 'nuclear',
          img: '/svg/industries/nuclear.svg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

article {
  display: flex;
}

.txt-wrapper {
  overflow: hidden;
  flex: 1;
  height: 42px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p {
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
}

h4 {
  color: var(--comp-clr);
  font-size: 1rem;
}
.industry-blok > * {
}

.icon-wrapper {
  width: 42px;
  height: 42px;
  background-color: rgba(126, 124, 124, 0.54);
  position: relative;
  margin: 0 1rem 0 0;
  img {
    height: 41px;
    position: absolute;
    right: -0.5rem;
  }
}
</style>
