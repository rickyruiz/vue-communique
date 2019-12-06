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

    gap: {
      type: String,
      default: '1rem',
    },
  },

  computed: {
    place(): [string, string, number] {
      const [row] = this.position.split('-')

      const layout = {
        top: ['start', 'stretch', -1],
        center: ['center', 'stretch', -1],
        bottom: ['end', 'stretch', 1],
      } as Record<string, [string, string, number]>

      return layout[row]
    },

    computedClass(): string[] {
      return ['CommuniqueNotificationList', `CommuniqueNotificationList--${this.position}`]
    },

    computedStyle(): Record<string, string> {
      const [alignContent, justifyContent] = this.place

      return {
        position: 'relative',
        display: 'grid',
        gridAutoFlow: 'row',
        alignContent,
        justifyContent,
        gridGap: this.gap,
        listStyleType: 'none',
        padding: '0px',
        margin: '0px',
      }
    },

    notificationStyle(): (notificationId: number) => Record<string, string> {
      const [,, orderFactor] = this.place
      return (notificationId: number) => ({
        order: `${notificationId * orderFactor}`,
      })
    },
  },
})
</script>

<template>
  <TransitionGroup
    :tag="tag"
    :style="computedStyle"
    :class="computedClass"
    :data-position="position"
    name="CommuniqueNotificationList"
  >
    <CommuniqueNotificationListItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
      :style="notificationStyle(notification.id)"
    />
  </TransitionGroup>
</template>
