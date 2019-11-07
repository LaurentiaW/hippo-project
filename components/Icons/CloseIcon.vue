<template>
  <div class="icon-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      class="icon"
    >
      <use :id="name" xlink:href="/svg/ui-icons/close.svg#icon-close"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    name: {
      type: String,
      default: 'brand-close'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped>
/* #invert-logo {
  /* --animal-clr: var(--main-clr); 
  --animal-clr: rgba(247, 170, 41, 0.54);
  --brand-clr: var(--white);
} */
</style>
