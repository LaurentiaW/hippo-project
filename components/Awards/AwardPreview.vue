<template>
  <!-- <nuxt-link :to="'/awards/' + award.id"> -->
  <div class="award" @click="$emit('awardToggle')">
    <figure class="framed">
      <img
        ref="certificate"
        :src="award.img"
        :alt="award.title"
        :class="isPortrait ? portrait : landscape"
        class="absolute-center"
      />
    </figure>
    <ul class="center">
      <li>
        <h4 class="truncate upper">{{ award.title }}</h4>
      </li>
      <li class="truncate">{{ award.institution }}</li>
      <li class="truncate">{{ award.date }}</li>
    </ul>
  </div>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  name: 'AwardPreview',
  props: {
    award: Object
  },
  data() {
    return {
      isPortrait: false,
      portrait: 'portrait',
      landscape: 'landscape',
      isModalVisible: false
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
    }
    // toggleAward(id) {
    //   /*eslint-disable */
    //   console.log(id)
    // }
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
.absolute-center {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.truncate {
  width: 35vw;
  margin: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul {
  margin: 0;
  li {
    margin: 0;
  }
}
</style>
