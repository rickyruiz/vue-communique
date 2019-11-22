import VueCommunique from './communique'
import { install } from './install'
import { inBrowser } from './utils/dom'

VueCommunique.install = install
VueCommunique.version = '__VERSION__'

if (inBrowser && window.Vue) {
  // @ts-ignore
  window.Vue.use(VueCommunique)
}

export default VueCommunique
