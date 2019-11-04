<template>
  <div class="award">
    <figure class="framed">
      <img
        ref="certificate"
        :src="award.img"
        :alt="award.title"
        :class="isPortrait ? portrait : landscape"
      />
    </figure>
    <ul class="center">
      <li>
        <h4>{{ award.title }}</h4>
      </li>
      <li>{{ award.institution }}</li>
      <li>{{ award.date }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  height: 152px;
  img {
    display: block;
    width: auto;
    // margin: auto;
    margin-right: auto;
    margin-left: auto;
    &.portrait {
      height: 130px;
    }
    &.landscape {
      height: 95px;
    }
  }
}
</style>
