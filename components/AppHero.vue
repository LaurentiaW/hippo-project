<template>
  <div class="hero container">
    <h4>
      {{ splitTag[0] }}
      <span>
        {{ splitTag[1] }}
      </span>
    </h4>
    <h3>
      {{ splitSlogan[0] }}
      <br />
      {{ splitSlogan[1] }}
    </h3>
    <!-- <Tagline :tagline="hero.tagline" />
    <Slogan :slogan="hero.slogan" /> -->
  </div>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'
// import Tagline from '@/components/AppHero/Tagline.vue'
// import Slogan from '@/components/AppHero/Slogan.vue'
export default {
  components: {
    // Tagline,
    // Slogan
  },
  props: {
    tagline: {
      type: String,
      default: 'Hippo Slurry Pumps stands for'
    },
    slogan: {
      type: String,
      default: 'CUSTOMISE TECHNOLOGY INCOMPARABLE QUALITY'
    }
  },
  data() {
    return {
      strSplit
    }
  },
  computed: {
    splitTag() {
      return strSplit(this.$props.tagline)
    },
    splitSlogan() {
      return strSplit(this.$props.slogan)
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  margin-top: 2.5rem;
  text-transform: uppercase;
  color: var(--main-clr);
  span {
    color: var(--comp-clr);
  }
}
h3 {
  margin-bottom: 2.5rem;
}
</style>
