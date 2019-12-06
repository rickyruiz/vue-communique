<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'SomeNotification',

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
      class="SomeNotification"
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
      <p>
        {{ notification.icon }}
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.SomeNotification {
  font-weight: bold;
}

.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.scale-enter-to,
.scale-leave {
  opacity: 1;
  transform: none;
}

.scale-enter-active,
.scale-leave-active {
  transition-property: opacity, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: none;
}

.slide-enter-active,
.slide-leave-active {
  transition-property: opacity, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
