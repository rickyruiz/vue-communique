<template>
  <ul
    class="communique"
  >
    <CommuniqueNotification
      v-for="notification in $_communique.queue"
      :key="notification.uid"
      :notification="notification"
    />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import CommuniqueNotification from './CommuniqueNotification.vue'

export default Vue.extend({
  name: 'CommuniqueWrapper',

  components: {
    CommuniqueNotification,
  },
})
</script>

<style scoped>
.communique {
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;
  left: 30px;
  bottom: 30px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
}
</style>
