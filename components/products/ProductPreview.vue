<template>
  <nuxt-link :to="productLink + pump.id">
    <div class="card">
      <img :src="pump.img" :alt="pump.title" class="framed" />
      <div class="title-wrapper">
        <h4>
          {{ sectionHead[0] }}
        </h4>
        <h4>
          {{ sectionHead[1] }}
        </h4>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { strSplit } from '@/mixins/strSplit.js'

export default {
  props: {
    pump: Object
  },
  data() {
    return {
      strSplit,
      link: this.$route.name
    }
  },
  computed: {
    sectionHead() {
      return strSplit(this.pump.title)
    },
    productLink() {
      if (this.link.includes('Range')) {
        return '/pump-range/'
      } else {
        return '/pump-systems/'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  height: 150px;
  padding: 0.5rem;
  img {
    height: 90%;
    margin: auto 1rem auto 0;
    width: auto;
  }
  h4 {
    text-transform: uppercase;
  }
}
</style>
