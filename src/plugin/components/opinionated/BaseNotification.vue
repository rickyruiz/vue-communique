<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'CommuniqueBaseNotification',

  props: {
    notification: {
      type: Object as PropType<CommuniqueNotification>,
      required: true,
    },
  },
})
</script>

<template>
  <Transition
    appear
    :name="notification.effect"
  >
    <div
      class="CommuniqueBaseNotification"
      :style="notification.styles"
      @click="$emit('close')"
    >
      <p
        v-if="notification.title"
      >
        {{ notification.title }}
      </p>
      <p>
        {{ notification.message }}
      </p>
    </div>
  </Transition>
</template>
