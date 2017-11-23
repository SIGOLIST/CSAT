<template>
  <div class="container">
      <nuxt-link to="/events">events</nuxt-link>
      <transition name="search" mode="in-out">      
        <search/>
      </transition>
  </div>
</template>

<script>
import Search from '~/components/search'
export default {
  components: { Search },
  transition: {
    name: "search",
    mode: "in-out"
  }
}
</script>

<style> 
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-enter-active, .search-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.search-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(300px);
  opacity: 0
}

</style>
