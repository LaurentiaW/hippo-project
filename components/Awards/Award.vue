<template>
  <div class="award-wrapper">
    <div v-if="show" class="modal-backdrop" @click="$emit('close')"></div>
    <div v-if="show" class="award">
      <div>
        <i class="icon icon-close" @click="$emit('close')">
          <CloseIcon name="brand-close" />
        </i>
        <figure class="framed">
          <img src="/img/awards/1.png" alt="award name" />
        </figure>
        <ul class="center">
          <li>place</li>
          <li><h4 class="upper">AWARD NAME</h4></li>
          <li>institution</li>
          <li>date</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon'

export default {
  name: 'Award',
  components: {
    CloseIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
}
.award {
  width: 95vw;
  max-width: 700px;
  background-color: var(--white);
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 30px;
  @media screen and (min-width: 450px) {
    width: 85vw;
  }
  i.icon {
    font-style: normal;
    font-size: 1.5rem;
    color: var(--main-clr);
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  figure {
    margin-top: 2rem;
    img {
      max-width: 300px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
