<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 83.784 68"
      class="icon"
    >
      <use :id="name" xlink:href="@/assets/icons/icon-logo.svg#icon-logo"></use>
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
      default: 83.784
    },
    height: {
      type: [Number, String],
      default: 68
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
