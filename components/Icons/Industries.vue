<template>
  <div>
    <AppSectionHeading />
    <div class="grid">
      <article
        v-for="industry in industries"
        :key="industry.id"
        class="industry-blok card"
      >
        <div class="icon-wrapper">
          <img :src="industry.img" alt="industry.title" />
        </div>
        <h3>{{ industry.title }}</h3>
        <!-- <p>{{ industry.text }}</p> -->
      </article>
    </div>
  </div>
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
.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.industry-blok {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey);
  padding: 1rem;
  margin: 0;
}

.industry-blok > * {
  text-align: center;
}

.icon-wrapper {
  width: 42px;
  height: 42px;
  background-color: var(--dark-grey);
  position: relative;
  img {
    height: 41px;
    width: auto;
    position: absolute;
    right: 0;
  }
}
</style>
