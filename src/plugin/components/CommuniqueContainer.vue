<template>
  <Component
    :is="tag"
  >
    <Component
      :is="$communique.getNotificationComponent(notification)"
      v-for="notification in $communique.queue"
      :key="notification.id"
      :notification="notification"
      :data-variant="notification.variant"
      :style="$communique.getNotificationStyle(notification)"
    />
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommuniqueContainer',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
})
</script>
