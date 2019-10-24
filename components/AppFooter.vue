<template>
  <footer>
    <div class="container">
      <h3 class="main">
        CUSTOMISE TECHNOLOGY <span>|</span> INCOMPARABLE QUALITY
      </h3>
      <div class="flex">
        <TheLogo height="43.4" width="52" />
        <p>© 2019 Hippo Slurry Pumps</p>
      </div>
    </div>
  </footer>
</template>

<script>
import TheLogo from '@/components/Icons/TheLogo'
export default {
  name: 'TheFooter',
  components: {
    TheLogo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem;
  background-color: var(--white);
}

h3 {
  font-size: 14px;
  text-align: center;
  text-align: center;
  max-width: 13rem;
  margin: auto;
  @media screen and(min-width: 768px) {
    max-width: unset;
  }
  span {
    display: none;
    @media screen and(min-width: 768px) {
      display: inline;
    }
  }
}
p {
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  text-align: right;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and(min-width: 768px) {
  footer {
    position: relative;
    h3 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .logo {
      text-align: right;
    }
  }
}
</style>
