<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="submersibleHeading" />
        <div class="grid">
          <ProductPreview
            v-for="(pump, i) in submersibleConfig"
            :key="i"
            :pump="pump"
          />
        </div>
      </section>
      <section>
        <AppSectionHeading :heading="verticalHeading" />
        <div class="grid">
          <ProductPreview
            v-for="(pump, i) in verticalConfig"
            :key="i"
            :pump="pump"
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
  data() {
    return {
      tagline: 'THE HIPPO SLURRY PUMP RANGE',
      slogan: 'THE AWARD WINNING HEAVY DUTY PUMP RANGE',
      submersibleHeading: 'SUBMERSIBLE CONFIGURATIONS',
      verticalHeading: 'Vertical CONFIGURATIONS',
      pumps: [
        {
          title: 'Submersible Bottom Suction Pump',
          type: 'SB',
          configuration: 'Submersible',
          id: 'hippo-submersible-bottom-suction-slurry-pump',
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Submersible-Bottom-Suction-diagram-cut-through-147x300.jpg'
        },
        {
          title: 'Submersible Top Suction Pump',
          type: 'ST',
          configuration: 'Submersible',
          id: 'hippo-submersible-top-suction-slurry-pump',
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Submersible-Top-Suction-diagram-cut-through-161x300.jpg'
        },
        {
          title: 'Vertical Spindle Vortex Pump',
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
      return this.pumps.filter(pump => pump.configuration === 'Submersible')
    },
    verticalConfig() {
      return this.pumps.filter(pump => pump.configuration === 'Vertical')
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
