import { LayoutConfig } from '../../types'

export default [
  {
    name: 'default',
    component: () =>
      import(/* webpackChunkName: 'communique-layout-default' */ '@/components/communique/CommuniqueLayoutDefault.vue'),
  },
] as LayoutConfig[]
