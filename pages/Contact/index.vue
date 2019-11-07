<template>
  <div>
    <!-- <div v-else> -->
    <div>
      <AppHero :tagline="tagline" :slogan="slogan" />
      <main>
        <AppSectionHeading :heading="heading" />
        <p>
          Need to get in contact with anyone from our team? Complete the contact
          form below or send us an email at
          <a href="mailto:info@hipposlurrypumps.com"
            >info@hipposlurrypumps.com</a
          >
          or if you
          <nuxt-link to="/contact/rfp" class="emphasize"
            >need a quote </nuxt-link
          >- complete this form so that we can help you faster
        </p>
        <div class="content">
          <form
            name="contactus"
            action="/thanks"
            method="post"
            netlify
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contactus" />
            <div>
              <label class="form-label" for="name">
                Name:
              </label>
              <input
                id="name"
                class="form-field"
                name="name"
                type="text"
                tabindex="1"
                required
              />
            </div>
            <div>
              <label class="form-label" for="email">
                Email:
              </label>
              <input
                id="email"
                class="form-field"
                name="email"
                tabindex="2"
                required
              />
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
                required
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
    </div>
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
  head() {
    return {
      title: 'Contact ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Complete this form to get in contact with The Hippo Slurry Pump Team'
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'HOW CAN WE HELP YOU TODAY?',
      slogan: 'get in touch ',
      heading: 'THE CONTACT FORM',
      qtagline: 'HOW CAN WE HELP YOU TODAY?',
      qslogan: 'get in touch ',
      qheading: 'Request for a quote'
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
}

.btn-wrapper {
  height: 3rem;
  margin: 1rem 1rem 0;
}
</style>
