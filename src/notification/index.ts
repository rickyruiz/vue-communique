import Communique from '@/plugin'
import ICommunique from 'types'
import Vue from 'vue'
import components from './components/index'
import variantStyles from './variant-styles'

Vue.use(Communique, {
  // Enable or disabled automatic injection
  inject: true,
})

const communique = new Communique({
  components,
  defaults: {
    // delay: 1000,
    // duration: 6000,
    effect: 'scale',
  },
  variantStyles,
})

export default communique as ICommunique
