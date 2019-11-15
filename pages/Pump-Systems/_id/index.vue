<template>
  <div v-if="pumpSystem">
    <AppHero
      :tagline="pumpSystem.hero[0].tagline"
      :slogan="pumpSystem.hero[0].slogan"
    />
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
          <div v-if="pumpSystem.Limitations" class="limitations section">
            <h4>Limitations of {{ pumpSystem.title }}</h4>
            <ul>
              <li v-for="(limitation, i) in pumpSystem.Limitations" :key="i">
                {{ limitation.text }}
              </li>
            </ul>
          </div>
          <hr />
          <section>
            <div v-if="pumpSystem.duty" class="duty section">
              <AppSectionHeading
                :heading="`${dutyTitle} of the ${pumpSystem.title}`"
              />
              <img
                :src="pumpSystem.duty[0].image"
                :alt="
                  `Duties achieved by the ${pumpSystem.duty[0].image_title}`
                "
                :title="
                  `Duties achieved by the ${pumpSystem.duty[0].image_title}`
                "
              />
              {{ pumpSystem.duty[0].text }}
            </div>
            <div v-if="pumpSystem.pumpData" class="pump-data section">
              <AppSectionHeading :heading="pumpData" />
              <img
                :src="pumpSystem.pumpData.img"
                :alt="`Pump Data of the ${pumpSystem.title}`"
              />
            </div>
          </section>
          <section
            v-if="pumpSystem.control_panel"
            class="control-panel section"
          >
            <AppSectionHeading :heading="controlPanel" />
            <img
              :src="pumpSystem.control_panel[6].image"
              :alt="`Control Panel of the ${pumpSystem.title}`"
              :title="`Control Panel of the ${pumpSystem.title}`"
            />
            <ul>
              <li v-for="item in pumpSystem.control_panel" :key="item.id">
                <h4>{{ item.id }}. {{ item.item }}</h4>
                <p>{{ item.description }}</p>
              </li>
            </ul>
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
      controlPanel: 'Control Panel'
    }
  },
  // computed: {
  //   controlPanelItems() {
  //     return this.pumpSystem.control_panel.filter(
  //       item => item.component === 'component'
  //     )
  //   }
  // },
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get('cdn/stories/pump-systems/' + context.params.id, {
        version
      })
      .then(response => {
        /* eslint-disable */
        console.log(response.data)
        return {
          blok: response.data.story.content,
          pumpSystem: response.data.story.content
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
