<template>
  <div class="award" @click="onAwardSelect">
    <figure class="framed">
      <img
        ref="certificate"
        :src="award.content.img"
        :alt="award.content.title"
        :class="isPortrait ? portrait : landscape"
        class="absolute-center"
      />
    </figure>
    <ul class="center">
      <li>
        <h4 class="truncate upper">{{ award.content.title }}</h4>
      </li>
      <li class="truncate">{{ award.content.institution }}</li>
      <li class="truncate">{{ award.content.date.slice(0, 10) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AwardPreview',
  props: {
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
      isPortrait: false,
      portrait: 'portrait',
      landscape: 'landscape'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.checkLoaded()
    })
  },
  methods: {
    checkLoaded() {
      if (this.$refs.certificate.complete) {
        this.checkImageOrientation()
      } else {
        this.$refs.certificate.addEventListener('load', () => {
          this.checkImageOrientation()
        })
      }
    },
    checkImageOrientation() {
      if (
        this.$refs.certificate.naturalHeight >
        this.$refs.certificate.naturalWidth
      ) {
        this.isPortrait = true
      }
    },
    onAwardSelect() {
      this.$emit('awardSelect', this.award, this.isPortrait)
    }
  }
}
</script>

<style lang="scss" scoped>
figure.framed {
  padding: 0;
  height: 152px;
  position: relative;
  img {
    &.portrait {
      height: 130px;
      width: auto;
    }
    &.landscape {
      width: 130px;
    }
  }
}
.truncate {
  width: 90%;
  margin: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 360px) {
    width: 35vw;
  }

  @media screen and (min-width: 768px) {
    width: 20vw;
  }
}

ul {
  margin: 0;
  li {
    margin: 0;
  }
}
</style>
