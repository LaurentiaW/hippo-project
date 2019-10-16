<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-wrapper">
        <ul>
          <li>
            <span>
              <a href="https://wwww.hazletonpumps.co.za"
                >A Hazleton Pumps Intl Brand</a
              ></span
            >
          </li>
          <li>
            Phone:
            <a href="tel:+27(0)12-666-8203">+27(0)12-666-8203</a>
          </li>
          <li>
            Email Address:
            <a href="mailto:info@hipposlurrypumps.com"
              >info@hipposlurrypumps.com</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="header-container">
      <header class="the-header">
        <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
        <!-- <TheSideNavToggle @toggle="$emit('sidenavToggle')" /> -->
        <div class="logo">
          <nuxt-link to="/">
            <TheLogo name="brand-logo" />
          </nuxt-link>
        </div>
        <div class="navigation-items">
          <ul class="nav-list">
            <SubNavLinks
              v-for="(item, i) in items"
              :key="i"
              :title="item.title"
              :slug="item.to"
            />
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Nav/TheSideNavToggle'
import TheLogo from '@/components/Icons/TheLogo'
import SubNavLinks from '@/components/Nav/SubNavLinks'
export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
    SubNavLinks,
    TheLogo
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

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  background-color: var(--grey);
  color: var(--dark-grey);

  a {
    text-decoration: none;
    color: var(--dark-grey);
    font-weight: normal;
    font-style: normal;
  }

  span {
    display: none;
  }

  .top-bar-wrapper {
    max-width: 1000px;
    margin: auto;
    > ul {
      padding: 0.5rem 1rem;
      margin: 0;
      font-size: 1rem;
    }
  }
}

.header-container {
  /* height: 60px; */
  width: 100%;
}

.the-header {
  /* height: 60px; */
  max-width: 1000px;
  margin: auto;
  z-index: 100;
  box-sizing: border-box;
  padding: 1rem;
  color: var(--main-clr);
  display: flex;
  align-items: center;
}

.logo h1 {
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .top-bar-wrapper > ul {
    display: flex;
    justify-content: space-between;
  }

  .top-bar ul li:last-child {
    padding: 0;
  }

  .top-bar span {
    display: inline-block;
  }

  .navigation-items {
    display: block;
  }
  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .the-header {
    justify-content: space-between;
  }
}
</style>
