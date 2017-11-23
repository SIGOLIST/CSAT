<template>
  <div class="container">
    <logo v-if="showState"/>
    <search class="search"/>
  </div>
</template>

<script>
import logo from '~/components/header'
import Search from '~/components/search'
export default {
  components: { Search, logo },
  data() {
    return {
      showState: true,
    }
  },
  transition: {
    name: 'index',
    mode: 'out-in'
  },

}
</script>

<style lang="scss" scoped> 
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  margin-top: -5rem
}
.header {
  position: absolute;
  top:0;
  left: 0;
  right:0;
}
.index-enter-active {
  animation: page-out 1s cubic-bezier(1,0,1,1);
}

.index-leave {
  animation: page-in 1s cubic-bezier(1,0,1,1);  
}

.index-leave-active {
  transition: all 1s cubic-bezier(1,0,1,1);  
  animation: page-in 1s cubic-bezier(1,0,1,1);
}
@keyframes page-in {
  0% { transform: translateY(0rem) }
  100% { transform: translateY(-50%) }
}
@keyframes page-out {
  0% { transform: translateY(-50%) }
  100% { transform: translateY(0rem) }
}


</style>
