<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-wrapper">
        <ul>
          <li>
            <span>
              <a href="https://www.hazletonpumps.co.za" target="_blank"
                >A Hazleton Pumps Intl Brand</a
              ></span
            >
          </li>
          <li>
            <a href="tel:+27(0)12-666-8203" class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <use xlink:href="/svg/ui-icons/call.svg#icon-call"></use>
              </svg>
              +27(0)12-666-8203</a
            >
          </li>
          <li>
            <a href="mailto:info@hipposlurrypumps.com" class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <use xlink:href="/svg/ui-icons/email.svg#icon-email"></use>
              </svg>
              info@hipposlurrypumps.com</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="header-container">
      <header class="the-header container">
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
        <button class="request-quote">
          request <br />
          a quote
        </button>
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
  background-color: var(--comp-clr);
  color: var(--white);

  a {
    text-decoration: none;
    color: var(--white);
    font-weight: normal;
    font-style: normal;
  }

  .top-bar-wrapper {
    max-width: 1000px;
    margin: auto;
    > ul {
      padding: 0.5rem 0.25rem;
      margin: 0;
      font-size: 0.875rem;
      display: flex;
      justify-content: space-between;
      li {
        &:first-child {
          display: none;
          @media (min-width: 768px) {
            display: inline;
          }
        }
      }
      .icon {
        display: flex;
        align-items: center;
        > svg {
          margin: 0 0.25rem 0 0;
        }
      }
    }
  }
}

.header-container {
  width: 100%;
  background-color: var(--white);
}

.request-quote {
  font-family: 'Roboto Condensed', sans-serif;
  position: absolute;
  right: 1rem;
  padding-left: 2.5rem;
  font-size: 14px;
  clip-path: circle(88.6% at 90% 90%);
  @media (min-width: 768px) {
    position: unset;
  }
}

.the-header {
  z-index: 100;
  box-sizing: border-box;
  padding: 0.5rem 0 1rem;
  color: var(--main-clr);
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto auto;
  }
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
  .top-bar ul li:last-child {
    padding: 0;
  }

  .navigation-items {
    display: block;
  }
  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
