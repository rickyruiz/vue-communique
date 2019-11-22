/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue'
import { Communique } from './communique'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    communique?: Communique
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $communique: Communique
  }
}
