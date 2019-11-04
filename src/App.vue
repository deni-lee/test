<template>
  <div id="app">
    <h1> {{count}} </h1>
    <h5>{{myCount}}</h5>
    <HelloWorld />
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  components:{
    HelloWorld
  },
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["myCount"])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
