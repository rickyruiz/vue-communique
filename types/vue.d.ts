/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue'
import { Communique } from './communique'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    communique?: Communique;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    /**
     * A `Communique` instance, injected via a mixin by VueCommunique.
     *
     * This property is not available in the component options when using `inject: false`.
     */
    $communique: Communique;
  }
}
