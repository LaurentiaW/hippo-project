<template>
  <div>
    <p>Single Pump page {{ $route.name }}</p>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <AppSectionHeading :heading="heading" />
      <div class="product-grid">
        <div class="intro">
          <h4>Type: {{ pump.type }}</h4>
          <p>{{ pump.description }}</p>
        </div>
        <figure class="side">
          <img :src="pump.img" :alt="`diagram of the ${pump.title}`" />
        </figure>
        <div class="design-features section">
          <h4>Design Features</h4>
          <ul>
            <li v-for="feature in pump.designFeatures" :key="feature.key">
              {{ feature.key }}: {{ feature.feature }}
            </li>
          </ul>
        </div>
        <div class="additional-content">
          <div class="benefits section">
            <h4>Benefits</h4>
            <ul>
              <li v-for="(benefit, i) in pump.benefits" :key="i">
                {{ i + 1 }}. {{ benefit }}
              </li>
            </ul>
          </div>

          <div v-if="pump.application" class="application section">
            <h4>Application</h4>
            <div class="flex">
              <figure
                v-for="(img, i) in pump.applicaiton"
                :key="i"
                class="framed"
              >
                <img
                  :src="img.img"
                  :alt="`an image of a ${pump.title} in operation ${img.text}`"
                />
              </figure>
            </div>
          </div>

          <div v-if="pump.alternativeAgitator.images" class="section">
            <AppSectionHeading :heading="pump.alternativeAgitator.title" />
            <div class="flex">
              <figure
                v-for="(img, i) in pump.alternativeAgitator.images"
                :key="i"
                class="framed"
              >
                <img :src="img.img" :alt="img.title" />
                <figcaption class="center">{{ img.title }}</figcaption>
              </figure>
            </div>
          </div>

          <div v-if="pump.pumpData" class="pump-data">
            <AppSectionHeading :heading="pump.pumpData.title" />
          </div>

          <div class="pump-curves">
            <AppSectionHeading :heading="pump.pumpCurves.title" />
            <div class="flex">
              <figure
                v-for="(img, i) in pump.pumpCurves.images"
                :key="i"
                class="framed"
              >
                <img :src="img.img" :alt="img.title" />
                <figcaption class="center">{{ img.title }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    AppCallToAction
  },
  data() {
    return {
      tagline: 'THE HIPPO SLURRY PUMP RANGE',
      slogan: 'THE AWARD WINNING HEAVY DUTY PUMP RANGE',
      heading: 'SUBMERSIBLE BOTTOM SUCTION',
      pump: {
        tagline: 'Submersible Bottom Suction Slurry Pump',
        slogan: 'The Problem Solver',
        title: 'Submersible Bottom Suction',
        type: 'SB',
        configuration: 'Submersible',
        description:
          'The "go to" pump when you are stuck with a complex slurry and dewatering application The top suction design is used to pump excess liquid away while the maximum amount of solids remain in the sump to be removed mechanically',
        id: 'hippo-submersible-bottom-suction-slurry-pump',
        img:
          'https://hazletonpumps.co.za/wp-content/uploads/2017/07/Submersible-Bottom-Suction-diagram-cut-through-147x300.jpg',
        designFeatures: [
          {
            key: 'a',
            feature:
              'Lifting Bracket allows lowering of the pump while in operation'
          },
          {
            key: 'b',
            feature:
              'Terminal Cover and cables are epoxy sealed to prevent moisture entering should the cables be damaged'
          },
          {
            key: 'c',
            feature:
              'Angular contact bearings mounted back-to-back which restricts all axial movement should the pump be surging'
          },
          {
            key: 'd',
            feature:
              'Stator Motor designed to operate at any supply voltage and is vacuum impregnated'
          },
          {
            key: 'e',
            feature:
              'Discharge pumped into jacketed motor enclosure assisting to dissipate any heat built up'
          },
          {
            key: 'f',
            feature:
              'Oil-filled motor housing lubricates the bearing and mechanical seals and dissipates the heat away from the winding'
          },
          {
            key: 'g',
            feature:
              'Double mechanical seals with moisture detector operate at submergence pressure'
          },
          {
            key: 'h',
            feature:
              'Cantilever shaft separates the motor from the pump end resulting in the mechanical seal operating at submergence pressure and not at discharge pressure'
          },
          {
            key: 'i',
            feature:
              'Twin volute discharge balances all the radial forces on the shaft improving the bearing life'
          }
        ],
        benefits: [
          'Designed to efficiently and effectively pump high density abrasive and corrosive slurries',
          'Proven reliability as a result of unique design features',
          'Can operate at partial flow and can "run dry" continuously'
        ],
        alternativeAgitator: {
          title: 'Alternative Agitator',
          images: [
            {
              img:
                'https://hazletonpumps.co.za/wp-content/uploads/2017/07/sbo.png',
              title: 'type sbo-open vane impeller with agitator'
            },
            {
              img:
                'https://hazletonpumps.co.za/wp-content/uploads/2017/07/sbc.png',
              title: 'type sbc-open vane impeller with agitator'
            }
          ]
        },
        pumpCurves: {
          title: 'Pump Curves',
          images: [
            {
              img:
                'https://hazletonpumps.co.za/wp-content/uploads/2017/08/medium-2p-50hz.jpg',
              title: 'Medium 2pole 50hz'
            }
          ]
        }
      }
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
      'diagram design-features'
      ' .      additional-content';
  }

  .side {
    grid-area: diagram;
  }

  .intro {
    grid-area: intro;
  }

  .design-features {
    grid-area: design-features;
  }

  .additional-content {
    grid-area: additional-content;
  }

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
  // .section {
  //   margin-top: 2rem;
  // }

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
