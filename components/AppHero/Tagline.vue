<template>
  <h4>
    {{ splitTag[0] }}
    <span>
      {{ splitTag[1] }}
    </span>
  </h4>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'

export default {
  props: {
    tagline: {
      type: String,
      default: 'Hippo Slurry Pumps stands for'
    }
  },
  computed: {
    splitTag() {
      return strSplit(this.$props.tagline)
    }
  },
  methods: {
    strSplit(str) {
      return strSplit(str)
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
</style>
