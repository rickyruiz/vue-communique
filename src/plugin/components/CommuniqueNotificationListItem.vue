<template>
  <Component
    :is="$communique.getNotificationComponent(notification)"
    :style="$communique.getNotificationStyle(notification)"
    :data-variant="notification.variant"
    :notification="notification"
    class="CommuniqueNotificationListItem"
    v-bind="notification.$attrs"
  />
</template>

<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'CommuniqueNotificationListItem',

  props: {
    notification: {
      type: Object as PropType<CommuniqueNotification>,
      required: true,
    },
  },
})
</script>
