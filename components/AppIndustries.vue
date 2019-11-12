<template>
  <section>
    <AppSectionHeading :heading="heading" />
    <div class="grid">
      <article
        v-for="(industry, i) in industries"
        :key="i"
        class="industry-blok"
      >
        <div class="icon-wrapper">
          <img :src="industry.img" alt="industry.title" />
        </div>
        <div class="txt-wrapper">
          <h4>{{ industry.title }}</h4>
          <p>{{ industry.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import AppSectionHeading from '@/components/AppSectionHeading.vue'
export default {
  components: {
    AppSectionHeading
  },
  props: {
    industries: Object
  },
  data() {
    return {
      heading: 'EXPERIENCE INCLUDES'
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 350px) {
    grid-template-columns: 1fr 1fr;
  }
  grid-gap: 1rem;
}

article {
  display: flex;
}

.txt-wrapper {
  overflow: hidden;
  flex: 1;
  height: 42px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (min-width: 768px) {
    display: initial;
    height: 100px;
    max-width: 300px;
  }
}

p {
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
}

h4 {
  color: var(--comp-clr);
  font-size: 1rem;
}

.icon-wrapper {
  width: 42px;
  height: 42px;
  background-color: rgba(126, 124, 124, 0.54);
  position: relative;
  margin: 0 1rem 0 0;
  img {
    height: 41px;
    position: absolute;
    right: -0.5rem;
  }
}
</style>
