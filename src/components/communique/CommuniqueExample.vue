<template>
  <div>
    <input
      v-model="title"
      type="text"
    >
    <input
      v-model="message"
      type="text"
    >
    <select
      v-model="position"
    >
      <option
        v-for="item in positions"
        :key="item"
        :value="item"
        v-text="item"
      />
    </select>
    <select
      v-model="variant"
    >
      <option
        v-for="item in variants"
        :key="item"
        :value="item"
        v-text="item"
      />
    </select>
    <select
      v-model="transition"
    >
      <option
        v-for="item in transitions"
        :key="item"
        :value="item"
        v-text="item"
      />
    </select>
    <select
      v-if="components.length > 0"
      v-model="component"
    >
      <option
        v-for="item in components"
        :key="item"
        :value="item"
        v-text="item"
      />
    </select>
    <button
      @click="push"
      v-text="'Push'"
    />
  </div>
</template>

<script lang="ts">
import { CommuniquePosition } from '@/plugin/communique'
import Vue from 'vue'

export default Vue.extend({
  name: 'CommuniqueExample',

  data() {
    return {
      // Communique notification props
      component: this.$communique.componentNames[0],
      variant: this.$communique.variantNames[0],
      position: CommuniquePosition.TopLeft,
      transition: 'scale',
      title: 'Notification',
      message: 'hello world',

      // Dropdown options
      components: this.$communique.componentNames,
      variants: this.$communique.variantNames,
      positions: CommuniquePosition,
      transitions: ['scale', 'slide'],
    }
  },

  watch: {
    '$communique.queue'(queue) {
      console.log('queue changed', queue)
    },
  },

  mounted() {
    console.log('components:', this.$communique.components)
    console.log('default component:', this.$communique.defaults.component)
    console.log('variant config:', this.$communique.variants)
  },

  methods: {
    async push(): Promise<void> {
      const notification = await this.$communique.dispatch({
        title: this.title,
        message: this.message,
        component: this.component,
        variant: this.variant,
        transition: this.transition,
        position: this.position,
        // styles: {
        //   backgroundColor: 'dodgerblue',
        //   color: 'white',
        //   padding: '1em',
        // },
      })

      console.log('pushed', notification)
    },
  },
})
</script>
