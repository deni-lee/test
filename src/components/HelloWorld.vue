<template>
  <div class="hello">
    <button @click="increase">增加</button> 
    <button @click="decrease">減少</button>
  </div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  methods: {
    ...mapMutations(["increment","decrement"]),
    ...mapActions(['myIncrease','myDecrease']),
    increase() {
      // this.$store.commit('increment')
      // this.increment()
      this.myIncrease();
    },
    decrease() {
      // this.$store.commit('decrement')
      // this.decrement()
      this.myDecrease();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
