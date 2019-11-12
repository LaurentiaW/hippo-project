<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main v-editable="blok">
      <section class="profile">
        <AppSectionHeading :heading="heading" />
        <div class="about flex">
          <div class="text-wrapper">
            <p v-for="(p, i) in intro_paragraph" :key="i">
              {{ p.text }}
            </p>
          </div>
          <div class="images-wrapper">
            <div v-for="(img, i) in intro_images" :key="i" class="images">
              <div class="img">
                <h4 class="upper center">{{ img.image_title }}</h4>
                <img :src="img.image" :alt="img.image_title" class="framed" />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="history">
        <AppSectionHeading :heading="headingHistory" />
        <div class="grid">
          <AppBoxes
            v-for="(box, i) in boxes"
            :id="i"
            :key="i"
            :heading="box.heading"
            :img="box.img"
            :details="box.details"
          />
        </div>
      </section>
      <section class="awards">
        <AppSectionHeading :heading="headingAwards" />
        <div class="flex">
          <div class="img-wrapper">
            <h4 class="upper center">{{ awards_room.image_title }}</h4>
            <figure class="framed">
              <img :src="awards_room.image" :alt="awards_room.image_title" />
            </figure>
          </div>
          <p>
            <nuxt-link to="/about/awards">
              <p>
                {{ awards_room_content }}
              </p>
            </nuxt-link>
          </p>
        </div>
      </section>
      <section class="news">
        <AppSectionHeading :heading="headingNews" />
        <p>
          {{ news_room.text }}
        </p>
        <a
          href="http://www.miningweekly.com/page/press-office-home/company:hazleton-pumps-2017-01-31"
          target="_blank"
          >Visit our parent company, Hazleton Pumps Intl,
          <span class="emphasize">news' room</span> for more updates</a
        >
      </section>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppBoxes from '@/components/AppBoxes.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    AppBoxes,
    AppCallToAction
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Want to know more about Hippo Slurry Pump brand - find more information regarding our profile, history, news and awards'
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'WHO WE ARE',
      slogan: 'THE HIPPO STORY, in short',
      heading: 'ABOUT HIPPO SLURRY PUMPS',
      headingHistory: 'THE HIPPO TIME LINE',
      headingAwards: 'Our Awards',
      headingNews: 'The News Room ',
      story: { content: {} }
    }
  },
  asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version
      })
      .then(response => {
        /* eslint-disable */
        console.log(response.data)
        return {
          blok: response.data.story.content.body,
          intro_paragraph: [
            response.data.story.content.body[0],
            response.data.story.content.body[1]
          ],
          intro_images: [
            response.data.story.content.body[2],
            response.data.story.content.body[3]
          ],
          boxes: [
            response.data.story.content.body[4],
            response.data.story.content.body[5],
            response.data.story.content.body[6]
          ],
          awards_room: response.data.story.content.body[10],
          awards_room_content: response.data.story.content.body[7].text,
          news_room: response.data.story.content.body[9]
        }
      })
      .catch(response => {
        context.error({
          statusCode: response.response.status,
          message: response.response.data
        })
      })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action === 'input') {
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
.flex {
  display: flex;
  > * {
    flex: 1;

    &:first-child {
      margin-right: 0.5rem;
    }
  }
}

.about {
  img {
    max-width: 330px;
    display: block;
    margin: {
      right: auto;
      left: auto;
    }
  }
}

.grid {
  display: grid;
  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}

p {
  white-space: pre-line;
}
</style>
