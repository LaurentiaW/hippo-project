<template>
  <div class="hero container">
    <h4>
      <slot name="tag">
        Hippo Slurry Pumps
      </slot>
      <span name="tag-pt">
        <slot>
          stands for
        </slot>
      </span>
    </h4>
    <h3>
      <slot name="main">
        CUSTOMISE TECHNOLOGY
      </slot>
      <br />
      <slot name="main-pt">
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
