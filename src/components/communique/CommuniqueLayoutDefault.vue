<template>
  <CommuniqueProvider
    :notification="notification"
  >
    <transition
      slot-scope="{
        uid,
        title,
        message,
        effect,
        close,
      }"
      :name="effect"
    >
      <li
        class="communique__notification"
        @click="close"
      >
        <slot>
          <p
            v-if="title"
          >{{ title }}</p>
          <p>{{ message }}</p>
        </slot>
      </li>
    </transition>
  </CommuniqueProvider>
</template>

<script lang="ts">
import CommuniqueProvider from '@/plugin/components/CommuniqueProvider.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'CommuniqueLayoutDefault',

  components: {
    CommuniqueProvider,
  },

  props: {
    notification: {
      type: Object,
      default: null,
    },
  },
})
</script>

<style scoped>
.communique__notification {
  background-color: var(--backgroundColor);
  color: var(--color);
  padding: var(--padding);
  border-radius: var(--borderRadius);
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
