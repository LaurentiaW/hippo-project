<template>
  <!-- <div class="award" @click="$emit('awardToggle', 'onAwardSelect')"> -->
  <div class="award" @click="onAwardSelect">
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
      this.$emit('awardSelect', this.award)
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
