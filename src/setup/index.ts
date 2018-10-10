import layouts from './layouts'
import variantStyles from './styles'
import VueCommunique from '@/plugin'
import Vue from 'vue'

Vue.use(VueCommunique, {
  layouts,
  variantStyles,
})
