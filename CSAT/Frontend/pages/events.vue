<template>
  <div class="container">
    <transition name="list">    
    <List/>
    </transition>
    
  </div>
</template>

<script>
import List from '~/components/list.vue'
export default {
  components: { List },
  transition: {
    name: "list",
    mode: "in-out"
  }
}
</script>

<style> 
.list-enter-active, .list-leave-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.list-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0
}
</style>