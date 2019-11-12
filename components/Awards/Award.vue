<template>
  <div v-if="award" class="award-wrapper">
    <div v-if="show" class="modal-backdrop" @click="$emit('close')"></div>
    <div v-if="show" class="award">
      <div>
        <i class="icon icon-close" @click="$emit('close')">
          <CloseIcon name="comp-close" />
        </i>
        <figure class="framed">
          <img
            :src="award.content.img"
            :alt="award.content.title"
            :class="[isPortrait === true ? portrait : landscape]"
          />
        </figure>
        <ul class="center">
          <li>{{ award.content.place }}</li>
          <li>
            <h4 class="upper">{{ award.content.title }}</h4>
          </li>
          <li>{{ award.content.institution }}</li>
          <li>{{ award.content.date.slice(0, 10) }}</li>
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
    },
    isPortrait: {
      type: Boolean,
      default: false
    },
    // img: {
    //   type: String,
    //   default: '/img/awards/placeholder.png'
    // },
    // title: {
    //   type: String,
    //   default: 'Award- Title'
    // },
    // institution: {
    //   type: String,
    //   default: 'Institution'
    // },
    // date: {
    //   type: String,
    //   default: 'date'
    // },
    // place: {
    //   type: String,
    //   default: 'place'
    // }
    award: Object
  },
  data() {
    return {
      portrait: 'portrait',
      landscape: 'landscape'
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
      &.portrait {
        max-height: 60vh;
        width: auto;
      }
    }
  }
}
</style>
