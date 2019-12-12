<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'CommuniqueNotificationListItem',

  props: {
    tag: {
      type: String,
      default: 'li',
    },

    notification: {
      type: Object as PropType<CommuniqueNotification>,
      required: true,
    },
  },

  data() {
    return {
      isNotificationVisible: true,
    }
  },

  methods: {
    close(): void {
      this.isNotificationVisible = false
    },

    remove(): void {
      this.$communique.removeFromQueue(this.notification)
    },
  },
})
</script>

<template>
  <Component
    :is="tag"
    :data-variant="notification.variant"
    role="status"
    aria-live="polite"
    aria-atomic="false"
    class="CommuniqueNotificationListItem"
  >
    <Component
      :is="notification.component"
      v-if="isNotificationVisible"
      :notification="notification"
      v-bind="notification.$attrs"
      @close="close"
      @hook:destroyed="remove"
    />
  </Component>
</template>

<style scoped>
.CommuniqueNotificationListItem {
  pointer-events: auto;
  transition-property: all;
}
</style>
