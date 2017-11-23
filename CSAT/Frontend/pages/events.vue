<template>
  <div class="container">
    <search class="search"/>
    <List/>
    
  </div>
</template>

<script>
import List from '~/components/list.vue'
import Search from '~/components/search'

export default {
  components: { List, Search },
  transition: {
    name: 'events',
    mode: 'out-in'
  }
}
</script>

<style lang="scss" scoped> 
.events-leave {
  animation: page-in 1s cubic-bezier(1,0,1,1);  
}

.events-leave-active {
  transition: all 1s cubic-bezier(1,0,1,1);  
  animation: page-in 1s cubic-bezier(1,0,1,1);
}
@keyframes page-in {
  0% { transform: translateY(0rem) }
  100% { transform: translateY(-50%) }
}

</style>