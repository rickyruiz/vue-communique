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
      v-model="effect"
    >
      <option
        v-for="item in effects"
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
import { CommuniqueVariant, CommuniqueEffect, CommuniquePosition } from '@/plugin/communique'
import Vue from 'vue'

export default Vue.extend({
  name: 'CommuniqueExample',

  data() {
    return {
      // Communique notification props
      component: '',
      variant: CommuniqueVariant.Success,
      position: CommuniquePosition.TopLeft,
      effect: CommuniqueEffect.Scale,
      title: 'Notification',
      message: 'hello world',

      // Dropdown options
      components: ['', ...this.$communique.components.map(({ name }) => name)],
      variants: CommuniqueVariant,
      positions: CommuniquePosition,
      effects: CommuniqueEffect,
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
    console.log('variant styles:', this.$communique.variantStyles)
  },

  methods: {
    async push(): Promise<void> {
      const notification = await this.$communique.notify({
        title: this.title,
        message: this.message,
        component: this.component,
        variant: this.variant,
        effect: this.effect,
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
