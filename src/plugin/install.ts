import _Vue_ from 'vue'
import mixin from './mixin'
import CommuniqueContainer from './components/CommuniqueContainer.vue'

export let Vue: typeof _Vue_

export let _installed = false

export function install(_Vue: typeof _Vue_): void {
  if (_installed && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vue-communique] already installed. Vue.use(Communique) should be called only once.'
      )
    }
    return
  }

  _installed = true

  Vue = _Vue

  Vue.mixin(mixin)

  Vue.component('CommuniqueContainer', CommuniqueContainer)
}
