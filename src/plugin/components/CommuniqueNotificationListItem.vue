<template>
  <div
    :style="computedStyle"
    class="CommuniqueNotificationListItem"
  >
    <Component
      :is="computedNotificationComponent"
      :style="computedNotificationStyle"
      :data-variant="notification.variant"
      :notification="notification"
      v-bind="notification.$attrs"
    />
  </div>
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

  computed: {
    computedStyle(): Record<string, string> {
      return {
        pointerEvents: 'auto',
      }
    },

    computedNotificationComponent() {
      return this.$communique.getNotificationComponent(this.notification)
    },

    computedNotificationStyle() {
      return this.$communique.getNotificationStyle(this.notification)
    },
  },
})
</script>
