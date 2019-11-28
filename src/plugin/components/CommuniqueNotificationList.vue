<template>
  <TransitionGroup
    :tag="tag"
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
  },
})
</script>

<style lang="scss" scoped>
</style>