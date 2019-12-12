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
      default: 'ul',
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

  computed: {
    order(): number {
      const [row] = this.position.split('-')

      const orders = {
        top: -1,
        center: -1,
        bottom: 1,
      } as Record<string, number>

      return orders[row]
    },

    computedClass(): string[] {
      return ['CommuniqueNotificationList', `CommuniqueNotificationList--${this.position}`]
    },

    notificationStyle(): (index: number) => Record<string, string> {
      return (index: number) => ({
        order: `${index * this.order}`,
      })
    },
  },
})
</script>

<template>
  <TransitionGroup
    :tag="tag"
    :class="computedClass"
    :data-position="position"
    name="CommuniqueNotificationList"
  >
    <CommuniqueNotificationListItem
      v-for="(notification, index) in notifications"
      :key="notification.id"
      :notification="notification"
      :style="notificationStyle(index)"
    />
  </TransitionGroup>
</template>

<style scoped>
.CommuniqueNotificationList {
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.CommuniqueNotificationList--top-left,
.CommuniqueNotificationList--top-center,
.CommuniqueNotificationList--top-right {
  align-content: start;
}

.CommuniqueNotificationList--center-left,
.CommuniqueNotificationList--center,
.CommuniqueNotificationList--center-right {
  align-content: center;
}

.CommuniqueNotificationList--bottom-left,
.CommuniqueNotificationList--bottom-center,
.CommuniqueNotificationList--bottom-right {
  align-content: end;
}
</style>
