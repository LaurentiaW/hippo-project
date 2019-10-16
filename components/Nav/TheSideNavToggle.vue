<template>
  <div class="wrapper">
    <div class="drawer-toggle" role="button" @click="$emit('toggle')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 25px;
  cursor: pointer;
  padding-right: 1rem;
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
