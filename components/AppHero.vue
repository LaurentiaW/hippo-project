<template>
  <div class="hero container">
    <h4>
      <slot name="yellow-tag">
        Hippo Slurry Pumps
      </slot>
      <span>
        <slot name="blue-tag">
          stands for
        </slot>
      </span>
    </h4>
    <h3>
      <slot name="main-top">
        CUSTOMISE TECHNOLOGY
      </slot>
      <br />
      <slot name="main-bottom">
        INCOMPARABLE QUALITY
      </slot>
    </h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  h4 {
    text-transform: uppercase;
    color: var(--main-clr);
    span {
      color: var(--comp-clr);
    }
  }
}
</style>
