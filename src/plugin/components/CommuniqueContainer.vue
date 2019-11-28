<template>
  <Component
    :is="tag"
    :style="computedStyle"
    class="CommuniqueContainer"
  >
    <CommuniqueNotificationList
      :notifications="$communique.queue"
    />
  </Component>
</template>

<script lang="ts">
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
    computedStyle(): Record<string, string> {
      return {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }
    },
  },
})
</script>
