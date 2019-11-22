<template>
  <Transition
    appear
    :name="notification.effect"
  >
    <li
      class="NotificationDefault"
      @click="notification.remove"
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
    </li>
  </Transition>
</template>

<script lang="ts">
import { CommuniqueNotification } from 'types'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'NotificationDefault',

  props: {
    notification: {
      type: Object as PropType<CommuniqueNotification>,
      required: true,
    },
  },
})
</script>

<style scoped>
.NotificationDefault {
  background-color: var(--backgroundColor);
  color: var(--color);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  max-width: 300px;
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
