<template>
  <div class="wrapper">
    <div class="drawer-toggle" role="button" @click="$emit('toggle')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <use xlink:href="/svg/ui-icons/menu.svg#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 60px;
  display: flex;
  align-items: flex-end;
}

.drawer-toggle {
  padding: 0 1rem 0 0;
}

@media (min-width: 768px) {
  .wrapper {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: var(--main-clr);
}
</style>
