import { CommuniqueLayoutConfig } from 'types'

export default [
  {
    name: 'default',
    component: () =>
      import(/* webpackChunkName: 'layout-default' */ './LayoutDefault.vue'),
  },
] as CommuniqueLayoutConfig[]
