<template>
  <div
    id="app"
  >
    <img
      src="./assets/logo.png"
    >
    <CommuniqueExample />
    <CommuniqueContainer
      class="CommuniqueContainer"
    />
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
  color: #2c3e50;
  margin-top: 60px;
}

.CommuniqueContainer {
  box-sizing: border-box;
  padding: 15px;
}

.CommuniqueNotificationList-move {
  transition: transform 200ms;
}

.CommuniqueNotificationList-leave-active {
  position: absolute;
  width: 100%;
}
</style>
