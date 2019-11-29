import { CommuniquePluginOptions } from 'types'
import Vue, { VueConstructor } from 'vue'
import createPluginMixin from './mixin'

export let VueWithPlugin: VueConstructor<Vue> | undefined

export function install(
  _Vue: VueConstructor<Vue>,
  options?: CommuniquePluginOptions
): void {
  if (Vue && _Vue === VueWithPlugin) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vue-communique] already installed. Vue.use(Communique) should be called only once.'
      )
    }
    return
  }

  options = options || {
    // Default `CommuniquePluginOptions`
    inject: true,
  }

  VueWithPlugin = _Vue

  VueWithPlugin.mixin(createPluginMixin(options))
}
