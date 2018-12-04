import VueCommunique from '@/plugin'
import Vue from 'vue'
import layouts from './layouts'
import variantStyles from './styles'

Vue.use(VueCommunique, {
  layouts,
  defaultTimeout: 6000,
  defaultEffect: 'scale',
  variantStyles,
})
