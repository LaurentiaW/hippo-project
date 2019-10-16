<template>
  <li class="nav-item">
    <nuxt-link :to="slug">{{ title }}</nuxt-link>
    <span class="divider">|</span>
  </li>
</template>

<script>
export default {
  name: 'SubNavLinks',
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-item {
  margin: 1rem 0;
}

.divider {
  display: none;
}

.nav-item a {
  text-decoration: none;
  color: var(--comp-clr);
  font-size: 1.125rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-style: normal;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: var(--main-clr);
}

.nav-item a:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-item:first-child {
    margin-left: 0;
  }

  .divider {
    margin-left: 10px;
    display: inline;
  }

  .nav-item:last-child .divider {
    display: none;
  }
}
</style>
