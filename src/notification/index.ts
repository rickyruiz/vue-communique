import Communique from '@/plugin'
import ICommunique from 'types'
import Vue from 'vue'
import layouts from './layouts/index'
import variantStyles from './variant-styles'

Vue.use(Communique)

const communique = new Communique({
  layouts,
  defaultTimeout: 6000,
  defaultEffect: 'scale',
  variantStyles,
})

export default communique as ICommunique
