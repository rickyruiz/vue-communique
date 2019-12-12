<script lang="ts">
import { warn } from '@/plugin/utils/warn'
import { CommuniqueNotification } from 'types'
import Vue from 'vue'
import CommuniqueNotificationList from './CommuniqueNotificationList.vue'

export default Vue.extend({
  name: 'CommuniqueContainer',

  components: {
    CommuniqueNotificationList,
  },

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },

  computed: {
    lists(): Record<string, CommuniqueNotification[]> {
      const result: Record<string, CommuniqueNotification[]> = {}

      // Create a list for each position
      for (const position of this.$communique.positionNames) {
        result[position] = []
      }

      for (const notification of this.$communique.queue) {
        const { position } = notification

        if (!position) continue

        const list = result[position]

        warn(
          list,
          `invalid CommuniqueNotification position: ${notification.position}.\nValid positions: ${this.$communique.positionNames}.`
        )

        if (!list) continue

        list.push(notification)
      }

      return result
    },
  },
})
</script>

<template>
  <Component
    :is="tag"
    class="CommuniqueContainer"
  >
    <CommuniqueNotificationList
      v-for="(list, position) in lists"
      :key="position"
      :notifications="list"
      :position="position"
    />
  </Component>
</template>

<style scoped>
.CommuniqueContainer {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: repeat(3, calc(100% / 3)) / repeat(3, 1fr);
}
</style>
