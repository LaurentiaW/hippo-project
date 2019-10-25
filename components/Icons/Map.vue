<template>
  <div class="world-map">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 824 505"
      class="icon"
    >
      <use :id="name" xlink:href="@/assets/icons/world-map.svg#world-map"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'brand-logo'
    },
    width: {
      type: [Number, String],
      default: 824
    },
    height: {
      type: [Number, String],
      default: 505
    }
  }
}
</script>

<style scoped>
#invert-logo {
  /* --animal-clr: var(--main-clr); */
  --animal-clr: rgba(247, 170, 41, 0.54);
  --brand-clr: var(--white);
}
</style>
