import _Vue from 'vue'
import CommuniqueProvider from './components/CommuniqueProvider.vue'
import CommuniqueContainer from './components/CommuniqueContainer.vue'
import Communique from './communique'

export let _Vue_: typeof _Vue

export let _installed = false

export function install<CommuniquePluginOptions>(
  Vue: typeof _Vue,
  options?: CommuniquePluginOptions
): void {
  if (_installed && _Vue === Vue) return

  _installed = true

  _Vue_ = Vue

  Vue.prototype.$_communique = new Communique(options)

  Vue.component('CommuniqueProvider', CommuniqueProvider)
  Vue.component('CommuniqueContainer', CommuniqueContainer)
}
