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

  computed: {
    computedStyle(): Record<string, string> {
      return {
        pointerEvents: 'auto',
        transitionProperty: 'all',
        // transitionDuration: '1s',
      }
    },
  },

  methods: {
    onNotificationClose(): void {
      this.isNotificationVisible = false
    },

    onNotificationDestroyed(): void {
      this.$communique.removeFromQueue(this.notification)
    },
  },
})
</script>

<template>
  <Component
    :is="tag"
    :style="computedStyle"
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
      @close="onNotificationClose"
      @hook:destroyed="onNotificationDestroyed"
    />
  </Component>
</template>
