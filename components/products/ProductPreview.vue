<template>
  <nuxt-link :to="'/pump-range/' + pump.id">
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
      strSplit
    }
  },
  computed: {
    sectionHead() {
      return strSplit(this.pump.title)
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
