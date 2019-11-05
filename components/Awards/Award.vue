<template>
  <div class="award-wrapper">
    <div v-if="show" class="modal-backdrop" @click="$emit('close')"></div>
    <div v-if="show" class="award">
      <div class="award">
        <i class="icon icon-close" @click="$emit('close')">X</i>
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
export default {
  name: 'Award',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.award {
  width: 95vw;
  background-color: var(--white);
  z-index: 10000;
  position: absolute;
  top: 1rem;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  i.icon {
    font-style: normal;
    font-size: 1.5rem;
    color: var(--main-clr);
    position: absolute;
    top: 0;
    right: 1rem;
  }
  figure {
    margin-top: 2rem;
  }
}
</style>
