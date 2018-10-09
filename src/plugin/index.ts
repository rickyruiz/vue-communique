import { PluginObject } from 'vue'
import { install } from './install'
import { CommuniquePluginOptions } from './types'
import Communique from './communique'

Communique.install = install
Communique.version = '__VERSION__'

const VueCommunique: PluginObject<CommuniquePluginOptions> = {
  install: Communique.install,
  name: 'vue-communique',
}

if (typeof window !== 'undefined' && (window as any).Vue)
  (window as any).Vue.use(VueCommunique)

export default VueCommunique
