import { CommuniqueComponentConfig } from 'types'

export default [
  {
    name: 'SomeNotification',
    component: () =>
      import(
        /* webpackChunkName: 'SomeNotification.vue' */
        './SomeNotification.vue'
      ),
  },
] as CommuniqueComponentConfig[]
