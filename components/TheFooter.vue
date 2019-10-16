<template>
  <footer>
    <div class="container">
      <div class="flex">
        <TheLogo name="invert-logo" />
        <h3 class="main">
          CUSTOMISE TECHNOLOGY <span>|</span> INCOMPARABLE QUALITY
        </h3>
      </div>
      <p>© 2019 Hippo Slurry Pumps All Rights Reserved</p>
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
  padding: 1em;
  background-color: var(--comp-clr);
  background-image: linear-gradient(19deg, #1c2757 0%, #222a4c 100%);
}
.container {
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
.logo {
  text-align: center;
}

h3 {
  color: var(--white);
  font-size: 1.15rem;
}
p {
  color: var(--white);
  font-size: 13px;
  font-family: 'Roboto Condensed', sans-serif;
}

@media screen and(min-width: 768px) {
  .flex {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: space-between;
    .logo {
      text-align: right;
    }
  }
}
</style>
