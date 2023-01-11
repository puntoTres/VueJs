<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter title="Entraron" v-bind:start="40"/>
  <Counter title="goku" v-bind:start="1"/>
</template>

<script>
/*Importamos todos los componentes */
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {//Defino el documento importado
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
