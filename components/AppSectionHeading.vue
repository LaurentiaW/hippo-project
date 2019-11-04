<template>
  <div>
    <h2>
      {{ sectionHead[0] }}
      <br />
      <slot name="sec-head-pt">
        {{ sectionHead[1] }}
      </slot>
    </h2>
  </div>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'

export default {
  props: {
    heading: {
      type: String,
      default: 'HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS'
    }
  },
  data() {
    return {
      strSplit
    }
  },
  computed: {
    sectionHead() {
      return strSplit(this.$props.heading)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 2rem;
}

h2 {
  border-left: 4px solid var(--main-clr);
  padding-left: 0.5rem;
}
</style>
