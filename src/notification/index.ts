import Communique from '@/plugin'
import ICommunique from 'types'
import Vue from 'vue'
import layouts from './layouts/index'
import variantStyles from './variant-styles'

Vue.use(Communique, {
  // Enable or disabled automatic injection
  inject: true,
})

const communique = new Communique({
  layouts,
  // defaultDelay: 1000,
  // defaultTimeout: 6000,
  defaultEffect: 'scale',
  variantStyles,
})

export default communique as ICommunique
