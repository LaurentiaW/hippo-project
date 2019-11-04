<template>
  <div
    class="bg-img"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url( ${img})`
    }"
  >
    <h4>{{ id + 1 }}. {{ heading }}</h4>
    <p>{{ details }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String]
    },
    heading: {
      type: String
    },
    details: {
      type: String
    },
    img: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  padding: 0.25rem 0.75rem;
  background-color: var(--grey);
  color: var(--white);
  opacity: 0.84;
}

p {
  padding: 0 0.75rem 0.25rem 0.75rem;
  color: var(--white);
}

.bg-img {
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1rem;
}
</style>
