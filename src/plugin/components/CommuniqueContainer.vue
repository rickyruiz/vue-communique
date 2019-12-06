<script lang="ts">
import { warn } from '@/plugin/utils/warn'
import { CommuniquePosition } from '@/plugin/communique'
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

    gap: {
      type: String,
      default: '0 10%',
    },
  },

  computed: {
    computedStyle(): Record<string, string> {
      return {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'grid',
        grid: `
          "${CommuniquePosition.TopLeft} ${CommuniquePosition.TopCenter} ${CommuniquePosition.TopRight}" 33%
          "${CommuniquePosition.CenterLeft} ${CommuniquePosition.Center} ${CommuniquePosition.CenterRight}" 33%
          "${CommuniquePosition.BottomLeft} ${CommuniquePosition.BottomCenter} ${CommuniquePosition.BottomRight}" 33%
          / 1fr 1fr 1fr
        `,
        gridGap: this.gap,
        alignContent: 'space-between',
      }
    },

    positions(): string[] {
      return Object.values(CommuniquePosition)
    },

    lists(): Record<string, CommuniqueNotification[]> {
      const result: Record<string, CommuniqueNotification[]> = {}

      // Create a list for each position
      for (const position of this.positions) {
        result[position] = []
      }

      for (const notification of this.$communique.queue) {
        const { position } = notification

        if (!position) continue

        const list = result[position]

        warn(
          list,
          `Invalid CommuniqueNotification position: ${notification.position}.\nValid positions: ${this.positions}.`
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
    :style="computedStyle"
  >
    <CommuniqueNotificationList
      v-for="(list, position) in lists"
      :key="position"
      :notifications="list"
      :position="position"
    />
  </Component>
</template>
