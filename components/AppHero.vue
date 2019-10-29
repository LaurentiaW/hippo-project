<template>
  <div class="hero container">
    <h4>
      <slot :name="tagline">
        {{ splitTag[0] }}
      </slot>
      <span>
        {{ splitTag[1] }}
      </span>
    </h4>
    <h3>
      <slot :name="slogan">
        {{ splitSlogan[0] }}
        <br />
        {{ splitSlogan[1] }}
      </slot>
    </h3>
  </div>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'
export default {
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
  method: {
    strSplit(str) {
      return strSplit(str)
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
.hero {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  h4 {
    text-transform: uppercase;
    color: var(--main-clr);
    span {
      color: var(--comp-clr);
    }
  }
}
</style>
