<template>
  <div class="container">
    <h6>
      <slot name="cta">
        Let's solve problems together
      </slot>
    </h6>
    <h3>
      <slot name="link">
        <a href="mailto:info@hipposlurrypumps.com">
          info@hipposlurrypumps.com
        </a>
        <a href="tel:+27(0)126668203">
          +27(0)12 666 8203
        </a>
      </slot>
    </h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

h6 {
  color: var(--main-clr);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 16px;
}
</style>
