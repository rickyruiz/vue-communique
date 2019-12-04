<template>
  <TransitionGroup
    :tag="tag"
    :style="computedStyle"
    name="CommuniqueNotificationList"
    class="CommuniqueNotificationList"
  >
    <CommuniqueNotificationListItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </TransitionGroup>
</template>

<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'
import CommuniqueNotificationListItem from './CommuniqueNotificationListItem.vue'

export default Vue.extend({
  name: 'CommuniqueNotificationList',

  components: {
    CommuniqueNotificationListItem,
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },

    notifications: {
      type: Array as PropType<CommuniqueNotification[]>,
      default: () => [],
    },

    position: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      place: {
        top: 'start',
        center: 'center',
        bottom: 'end',
      } as Record<string, string>,
    }
  },

  computed: {
    computedStyle(): Record<string, string> {
      const [row] = this.position.split('-')

      return {
        position: 'relative',
        display: 'grid',
        alignContent: this.place[row],
      }
    },
  },
})
</script>
