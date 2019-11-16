<template>
  <Component
    :is="tag"
  >
    <CommuniqueNotification
      v-for="notification in $_communique.queue"
      :key="notification.uid"
      :notification="notification"
    />
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'
import CommuniqueNotification from './CommuniqueNotification.vue'

export default Vue.extend({
  name: 'CommuniqueContainer',

  components: {
    CommuniqueNotification,
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
})
</script>
