<template>
  <div class="header">
    <div class="container has-text-centered">
      <h1 class="title">
        CSAT
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "header",
    mode: "out-in"
  }
}
</script>

<style src="~/assets/header.scss" lang="scss" scoped>
.header-leave {
  opacity: 0;
}
.header-leave-active {
  transition: all1s cubic-bezier(1,0,1,1);
}
</style>
