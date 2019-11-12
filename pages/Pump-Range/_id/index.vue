<template>
  <div v-if="pump" v-editable="blok">
    <AppHero :tagline="pump.hero[0].tagline" :slogan="pump.hero[0].slogan" />
    <main>
      <AppSectionHeading :heading="pump.title" />
      <div class="product-grid">
        <div class="intro">
          <h4>Type: {{ pump.type }}</h4>
          <p>{{ pump.description }}</p>
        </div>
        <figure class="side">
          <img :src="pump.img" :alt="`diagram of the ${pump.title}`" />
        </figure>
        <div v-if="pump.design_features" class="design-features section">
          <h4>Design Features</h4>
          <ul>
            <li v-for="feature in pump.design_features" :key="feature.key">
              {{ feature.key }}: {{ feature.feature }}
            </li>
          </ul>
        </div>
        <div class="additional-content">
          <div v-if="pump.benefits" class="benefits section">
            <h4>Benefits</h4>
            <ul>
              <li v-for="(benefit, i) in pump.benefits" :key="i">
                {{ i + 1 }}. {{ benefit.text }}
              </li>
            </ul>
          </div>

          <section
            v-if="pump.application.length > 0"
            class="application section"
          >
            <!-- <AppSectionHeading heading="Application" /> -->
            <h4>Application</h4>
            <div class="flex">
              <figure
                v-for="(img, i) in pump.application"
                :key="i"
                class="framed"
              >
                <img
                  :src="img.image"
                  :alt="
                    `an image of a ${title} in operation ${img.image_title}`
                  "
                />
                <figcaption class="center">{{ img.image_title }}</figcaption>
              </figure>
            </div>
          </section>

          <section v-if="pump.alternative_agitator" class="section">
            <AppSectionHeading :heading="headings.alternativeAgitator" />
            <div class="flex">
              <figure
                v-for="(img, i) in pump.alternative_agitator"
                :key="i"
                class="framed"
              >
                <img :src="img.img" :alt="img.title" />
                <figcaption class="center">{{ img.title }}</figcaption>
              </figure>
            </div>
          </section>

          <section class="pump-data">
            <AppSectionHeading :heading="headings.pumpData" />
          </section>
          <section class="pump-curves">
            <AppSectionHeading :heading="headings.pumpCurves" />
            <div class="flex">
              <figure
                v-for="(img, i) in pump.pump_curves"
                :key="i"
                class="framed"
              >
                <img :src="img.pump_curve" :alt="img.title" />
                <figcaption class="center">{{ img.title }}</figcaption>
              </figure>
            </div>
          </section>
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
          content: this.pump.description
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
      headings: {
        pumpCurves: 'Pump Curves',
        alternativeAgitator: 'Alternative Agitator',
        pumpData: 'Pump Data'
      }
    }
  },
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/pump-range/' + context.params.id, {
        version
      })
      .then(response => {
        /* eslint-disable */
        console.log(response.data)
        return {
          blok: response.data.story.content,
          pump: response.data.story.content
        }
      })
  },
  computed: {
    id() {
      return titleCase(this.$route.params.id)
    }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
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

  .design-features {
    grid-area: design-features;
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
  .application {
    figure {
      img {
        height: 50vh;
        width: auto;
        display: block;
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
}
</style>
