import { CommuniquePluginOptions } from 'types'
import Vue, { ComponentOptions } from 'vue'
import createPluginContext from './context'

export default function(
  pluginOptions: CommuniquePluginOptions
): ComponentOptions<Vue> {
  return {
    beforeCreate(): void {
      createPluginContext(this, pluginOptions.inject)
    },
  }
}
