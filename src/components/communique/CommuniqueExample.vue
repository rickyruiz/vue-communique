<template>
  <div>
    <input
      v-model="message"
      type="text"
    >
    <select
      v-model="variant"
    >
      <option
        v-for="variant in variants"
        :key="variant"
        :value="variant"
        v-text="variant"
      />
    </select>
    <select
      v-model="effect"
    >
      <option
        v-for="effect in effects"
        :key="effect"
        :value="effect"
        v-text="effect"
      />
    </select>
    <select
      v-model="layout"
    >
      <option
        v-for="layout in layouts"
        :key="layout"
        :value="layout"
        v-text="layout"
      />
    </select>
    <button
      @click="push"
      v-text="'Push'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CommuniqueVariant, CommuniqueEffect } from '@/plugin/communique'

export default Vue.extend({
  name: 'CommuniqueExample',

  data() {
    return {
      // Communique notification props
      layout: 'default',
      variant: CommuniqueVariant.Primary,
      effect: CommuniqueEffect.Scale,
      message: 'hello world',

      // Dropdown options
      layouts: this.$_communique.layouts.map(({ name }) => name),
      variants: CommuniqueVariant,
      effects: CommuniqueEffect,
    }
  },

  watch: {
    '$_communique.queue'() {
      console.log('queue changed')
    },
  },

  mounted() {
    console.log('layouts:', this.$_communique.layouts)
    console.log('default layout:', this.$_communique.defaultLayout)
    console.log('variant styles:', this.$_communique.variantStyles)
  },

  methods: {
    async push(): Promise<void> {
      this.$_communique.notify({
        message: this.message,
        layout: this.layout,
        variant: this.variant,
        effect: this.effect,
        // variantStyles: {
        //   primary: {
        //     backgroundColor: 'dodgerblue',
        //     color: 'white',
        //     padding: '1em',
        //   },
        //   secondary: {
        //     backgroundColor: '#41B883',
        //     color: 'white',
        //     padding: '1em',
        //   },
        // },
      })
    },
  },
})
</script>
