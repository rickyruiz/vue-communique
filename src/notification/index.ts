import Communique from '@/plugin'
import ICommunique from 'types'
import Vue from 'vue'
import layouts from './layouts/index'
import variantStyles from './variant-styles'

Vue.use(Communique)

const communique = new Communique({
  layouts,
  // defaultDelay: 1000,
  // defaultTimeout: 6000,
  defaultEffect: 'scale',
  variantStyles,
})

console.dir(Vue)

export default communique as ICommunique
