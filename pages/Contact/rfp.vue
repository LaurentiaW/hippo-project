<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <AppSectionHeading :heading="heading" />
      <p>
        Need a quote? Please complete the fields below to help us to assist you
        better and faster. No need for a quote but still want to get in contact?
        <nuxt-link to="/contact">
          Click here for our contact form
        </nuxt-link>
        or otherwise, you could also contact us
        <a href="mailto:info@hipposlurrypumps.com">info@hipposlurrypumps.com</a>
      </p>
      <div class="content">
        <form name="contact" action="" method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label class="form-label" for="name">
              Name:
            </label>
            <input id="name" class="form-field" name="name" tabindex="1" />
          </div>
          <div>
            <label class="form-label" for="email">
              Email:
            </label>
            <input id="email" class="form-field" name="email" tabindex="2" />
          </div>
          <div>
            <label class="form-label" for="message">
              Message:
            </label>
            <textarea
              id="message"
              class="form-field"
              name="message"
              spellcheck="true"
              rows="10"
              cols="50"
              tabindex="3"
            ></textarea>
          </div>
          <div class="btn-wrapper relative">
            <input
              class="btn absolute-center"
              type="submit"
              value="Send message"
              tabindex="4"
            />
          </div>
        </form>
      </div>
    </main>
    <!-- <div v-if="rfq">
      <AppHero :tagline="qtagline" :slogan="qslogan" />
      <main>
        <AppSectionHeading :heading="qheading" />
        <p>
          Need a quote? Please complete the fields below to help us to assist you
        better and faster. No need for a quote but still want to get in contact?
        <a @click=!"rfq">
          Click here for our contact form
        </a>
        or alternatively, you could also contact us
        <a href="mailto:info@hipposlurrypumps.com">info@hipposlurrypumps.com</a>
        </p>
        <div class="content">
          <form
            name="rfq"
            action="/thanks"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="rfq" />
            <div>
              <label class="form-label" for="name">
                Name:
              </label>
              <input
                id="name"
                class="form-field"
                name="name"
                type="text"
                required
                tabindex="1"
              />
            </div>
            <div>
              <label class="form-label" for="email">
                Email:
              </label>
              <input id="email" class="form-field" name="email" tabindex="2" />
            </div>
            <div>
              <label class="form-label" for="message">
                Message:
              </label>
              <textarea
                id="message"
                class="form-field"
                name="message"
                spellcheck="true"
                rows="10"
                cols="50"
                tabindex="3"
              ></textarea>
            </div>
            <div class="btn-wrapper relative">
              <input
                class="btn absolute-center"
                type="submit"
                value="Send message"
                tabindex="4"
              />
            </div>
          </form>
        </div>
      </main>
    </div> -->
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading
  },
  data() {
    return {
      tagline: 'HOW CAN WE HELP YOU TODAY?',
      slogan: 'get in touch ',
      heading: 'THE CONTACT FORM'
    }
  }
}
</script>

<style lang="scss" scoped></style>
