import Communique from '@/plugin'
import ICommunique from 'types'
import Vue from 'vue'
import components from './components/index'
import variants from './variants'

Vue.use(Communique, {
  // Enable or disabled automatic injection
  inject: true,
})

const communique = new Communique({
  components,
  defaults: {
    // delay: 1000,
    // duration: 6000,
    transition: 'scale',
  },
  variants,
})

export default communique as ICommunique
