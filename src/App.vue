<template>
  <div
    id="app"
  >
    <img
      src="./assets/logo.png"
    >
    <CommuniqueExample />
    <CommuniqueContainer />
  </div>
</template>

<script lang="ts">
import CommuniqueContainer from '@/plugin/components/CommuniqueContainer.vue'
import Vue from 'vue'
import CommuniqueExample from './components/communique/CommuniqueExample.vue'

export default Vue.extend({
  name: 'App',

  components: {
    CommuniqueExample,
    CommuniqueContainer,
  },
})
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
