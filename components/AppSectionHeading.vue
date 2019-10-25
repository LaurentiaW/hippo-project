<template>
  <div>
    <h2>
      <slot name="section-heading">
        THE HIPPO SLURRY PUMP RANGE
      </slot>
      <br />
      <slot name="sec-head-pt">
        &amp; PUMP SYSTEMS
      </slot>
    </h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 2rem;
}

h2 {
  border-left: 4px solid var(--main-clr);
  padding-left: 0.5rem;
}
</style>
