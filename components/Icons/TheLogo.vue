<template>
  <div class="logo">
    <svg class="icon" width="82.63" height="68" viewbox="100 50 450 450">
      <!-- <svg class="icon"> -->
      <!-- <use :id="name" xlink:href="#logo" /> -->
      <use :id="name" xlink:href="@/assets/icons/icon-logo.svg#icon-logo"></use>
      <!-- <use :id="name" xlink:href="@/static/svg/logo.svg#logo" /> -->
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'brand-logo'
    }
    // width: {
    //   type: [Number, String],
    //   default: 100
    // },
    // height: {
    //   type: [Number, String],
    //   default: 100
    // }
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
