<template>
  <div>
    <AppHero>
      <template #yellow-tag>
        THE HIPPO SLURRY
      </template>
      <template #blue-tag>
        PUMP RANGE
      </template>
      <template #main-top>
        THE AWARD WINNING
      </template>
      <template #main-bottom>
        HEAVY DUTY PUMP RANGE
      </template>
    </AppHero>
    <main>
      <section>
        <AppSectionHeading>
          <template v-slot:section-heading>
            SUBMERSIBLE
          </template>
          <template v-slot:sec-head-pt>
            CONFIGURATIONS
          </template>
        </AppSectionHeading>
        <div class="grid">
          <ProductPreview
            v-for="(pump, i) in submersibleConfig"
            :key="i"
            :pump="pump"
          />
        </div>
      </section>
      <section>
        <AppSectionHeading>
          <template v-slot:section-heading>
            VERTICAL
          </template>
          <template v-slot:sec-head-pt>
            CONFIGURATIONS
          </template>
        </AppSectionHeading>
        <div class="grid">
          <ProductPreview
            v-for="(pump, i) in verticalConfig"
            :key="i"
            :pump="pump"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import ProductPreview from '@/components/products/ProductPreview.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    ProductPreview
  },
  data() {
    return {
      pumps: [
        {
          titleTop: 'Submersible Bottom',
          titleBottom: 'Suction Pump',
          type: 'SB',
          configuration: 'Submersible',
          id: 'hippo-submersible-bottom-suction-slurry-pump',
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Submersible-Bottom-Suction-diagram-cut-through-147x300.jpg'
        },
        {
          titleTop: 'Submersible Top',
          titleBottom: 'Suction Pump',
          type: 'ST',
          configuration: 'Submersible',
          id: 'hippo-submersible-top-suction-slurry-pump',
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Submersible-Top-Suction-diagram-cut-through-161x300.jpg'
        },
        {
          titleTop: 'Vertical Spindle',
          titleBottom: 'Vortex Pump',
          type: 'VV',
          configuration: 'Vertical',
          id: 'hippo-vertical-spindle-vortex-slurry-pump',
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Vertical-Vortex-diagram-cut-through-197x300.jpg'
        }
      ]
    }
  },
  computed: {
    submersibleConfig() {
      return this.pumps.filter((pump) => pump.configuration === 'Submersible')
    },
    verticalConfig() {
      return this.pumps.filter((pump) => pump.configuration === 'Vertical')
    }
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
