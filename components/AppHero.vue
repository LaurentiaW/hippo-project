<template>
  <div class="hero">
    <div class="hero-img">
      <slot name="img">
        <img
          src="/hero-hippo.jpg"
          alt="A hippo - the animal that embodies the values of the Hippo Slurry Pump Range. Photo by Henning Borgersen on Unsplash"
        />
      </slot>
    </div>
    <div class="hero-text">
      <h2><slot name="message"> The Hippo Slurry Pump Range</slot></h2>
      <h4>
        <slot name="tagline">
          CUSTOMISE TECHNOLOGY <span>|</span> INCOMPARABLE QUALITY</slot
        >
      </h4>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  height: 350px;
  z-index: 1;
  position: relative;
  .hero-img {
    img {
      object-fit: cover;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      width: 100%;
      height: 350px;
    }
  }
  .hero-text {
    position: absolute;
    bottom: 5%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.54);
    padding: 1rem;
    @media screen and (min-width: 622px) {
      white-space: nowrap;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
