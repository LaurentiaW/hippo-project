<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <div class="sidenav-top">
          <h1 @click="$emit('close')">
            <nuxt-link to="/">Hippo Slurry Pumps</nuxt-link>
          </h1>
          <i class="icon icon-close" @click="$emit('close')">X</i>
        </div>
        <ul class="sidenav-wrapper">
          <SubNavLinks
            v-for="(item, i) in items"
            :key="i"
            :title="item.title"
            :slug="item.to"
            @click.native="$emit('close')"
          />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import SubNavLinks from '@/components/Nav/SubNavLinks'

export default {
  name: 'TheSidenav',
  components: {
    SubNavLinks
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        {
          title: 'Pump Range',
          to: '/pump-range'
        },
        {
          title: 'Pump Systems',
          to: '/pump-systems'
        },
        // {
        //   title: 'Services',
        //   to: '/services'
        // },
        // {
        //   title: 'Resources',
        //   to: '/Resources'
        // },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: var(--white);
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.sidenav-top {
  position: relative;
  top: 6%;
}

h1 {
  font-size: 1.5rem;
}

h1 a {
  color: var(--main-clr);
  text-decoration: none;
  font-style: normal;
}

.sidenav-wrapper {
  position: absolute;
  top: 35%;
  left: 20px;
  transform: translateY(-50%);
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
}

.nav-item {
  margin: 10px;
}

.nav-item a {
  text-decoration: none;
  padding: 20px 0;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  text-decoration: underline;
}

i.icon {
  font-style: normal;
  font-size: 1.5rem;
  color: var(--main-clr);
  position: absolute;
  top: -2.5rem;
  right: 0;
}
</style>
