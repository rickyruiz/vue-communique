import { CommuniqueLayoutConfig } from 'types'

export default [
  {
    name: 'default',
    component: () =>
      import(
        /* webpackChunkName: 'communique-layout-default' */ './NotificationDefault.vue'
      ),
  },
] as CommuniqueLayoutConfig[]
