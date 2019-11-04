<template>
  <h3>
    {{ splitSlogan[0] }}
    <br />
    {{ splitSlogan[1] }}
  </h3>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'

export default {
  props: {
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
    splitSlogan() {
      return strSplit(this.$props.slogan)
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 2.5rem;
}
</style>
