<template>
  <div>
    <AppHero :tagline="pumpSystem.tagline" :slogan="pumpSystem.slogan" />
    <main>
      <AppSectionHeading :heading="pumpSystem.title" />
      <div class="product-grid">
        <div class="intro">
          <p>{{ pumpSystem.objective }}</p>
        </div>
        <figure class="side">
          <img
            :src="pumpSystem.img"
            :alt="`diagram of the ${pumpSystem.title}`"
          />
        </figure>
        <div v-if="pumpSystem.components" class="system-components section">
          <h4>Components of {{ pumpSystem.title }}</h4>
          <p>The {{ pumpSystem.title }} consist of:</p>
          <ul>
            <li v-for="component in pumpSystem.components" :key="component.id">
              {{ component.id }}: {{ component.item }}
            </li>
          </ul>
        </div>
        <div class="additional-content">
          <div v-if="pumpSystem.limitations" class="limitations section">
            <h4>Limitations of {{ pumpSystem.title }}</h4>
            <ul>
              <li v-for="(limitation, i) in pumpSystem.limitations" :key="i">
                {{ limitation }}
              </li>
            </ul>
          </div>
          <div v-if="pumpSystem.duty" class="duty section">
            <AppSectionHeading
              :heading="`${dutyTitle} of the ${pumpSystem.title}`"
            />
            <img
              :src="pumpSystem.duty.img"
              :alt="`Duties achieved by the ${pumpSystem.title}'`"
            />
            {{ pumpSystem.duty.text }}
          </div>
          <div v-if="pumpSystem.pumpData" class="pump-data section">
            <AppSectionHeading :heading="pumpData" />
            <img
              :src="pumpSystem.pumpData.img"
              :alt="`Pump Data of the ${pumpSystem.title}`"
            />
          </div>
          <div v-if="pumpSystem.controlPanel" class="control-panel section">
            <AppSectionHeading :heading="controlPanel" />
            <img
              :src="pumpSystem.controlPanel.img"
              :alt="`Control Panel of the ${pumpSystem.title}`"
            />
            <ul>
              <li v-for="(item, i) in pumpSystem.controlPanel.items" :key="i">
                <h4>{{ i + 1 }}. {{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import { titleCase } from '@/mixins/titleCase.js'
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  head() {
    return {
      title: 'The ' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pumpSystem.objective
        }
      ]
    }
  },
  components: {
    AppHero,
    AppSectionHeading,
    AppCallToAction
  },
  data() {
    return {
      titleCase,
      dutyTitle: 'Duty',
      pumpData: 'Pump Data',
      controlPanel: 'Control Panel',
      pumpSystem: {
        title: 'High Head Series Submersible Pumping System',
        tagline: 'High Head Series',
        slogan: 'The Problem Solver',
        id: 'high-head-series-submersible-pumping-system',
        objective:
          'To pump liquid containing solids at a high head using several submersible pumps in series',
        summary: 'Mine dewatering, in particular shaft bottom dewatering',
        duty: {
          img:
            'https://hazletonpumps.co.za/wp-content/uploads/2017/08/medium-4p-50hz.jpg',
          text:
            'Maximum head and volume is determined by the access area available to lower the submersible pump down to shaft bottom. Standard volumes up to 200l/s with the stage head(HS) of 200m can be achieved'
        },
        components: [
          {
            id: '1',
            item:
              'Hippo Submersible Slurry Pumps - as many as required to achieve the volumes required'
          },
          {
            id: '2',
            item:
              'Interstage Inlet can be provided between stages to accommodate the pumping of liquid at any level provided that non-return valves ()are installed'
          }
        ],
        options: '',
        'pump-data': '',
        'control-panel': '',
        limitations: [
          'The weight - determined by the capacity of lifting equipment',
          'The area available to lower the pumps',
          'Total power available'
        ]
      }
    }
  },
  computed: {
    id() {
      return titleCase(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-grid {
  padding-left: 0.5rem;
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'diagram intro'
      'diagram system-components'
      ' .      additional-content';
  }

  .side {
    grid-area: diagram;
    img {
      max-height: 80vh;
      @media (min-width: 768px) {
        max-height: initial;
        width: 100%;
      }
      display: block;
      width: auto;
      margin: {
        left: auto;
        right: auto;
      }
    }
  }

  .intro {
    grid-area: intro;
  }

  .system-components {
    grid-area: system-components;
  }

  .additional-content {
    grid-area: additional-content;
  }

  figure {
    margin-bottom: 2rem;
  }

  .pump-curves {
    img {
      height: auto;
      width: 95%;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>
