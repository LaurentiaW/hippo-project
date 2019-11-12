<template>
  <nuxt-link :to="productLink + id">
    <div class="card">
      <img :src="img" :alt="title" class="framed" />
      <div v-if="title" class="title-wrapper">
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
    img: {
      type: String,
      default: '/img/awards/placeholder.png'
    },
    title: {
      type: String,
      default: 'product - Title'
    },
    id: {
      type: String,
      default: 'product-name'
    }
  },
  data() {
    return {
      strSplit,
      link: this.$route.name
    }
  },
  computed: {
    sectionHead() {
      return strSplit(this.$props.title)
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
