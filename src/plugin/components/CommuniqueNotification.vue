<script lang="ts">
import Communique from '@/plugin/communique'
import Vue, { VNode } from 'vue'

export default Vue.extend({
  name: 'CommuniqueNotification',

  functional: true,

  render(h, context): VNode {
    const availableLayouts = context.parent.$_communique.layouts.map(
      ({ name }) => name
    )

    const layout = context.data.attrs!.notification.layout

    const layoutConfig = context.parent.$_communique.layouts.find(
      ({ name }) => name === layout
    )

    if (!layout || !availableLayouts.includes(layout) || !layoutConfig) {
      // If the opinionated layout is not registered in the LayoutConfig[],
      // warn the user that it is invalid.
      console.warn(
        `Invalid <CommuniqueNotification> layout: ${layout}.\nPlease use one of the following layouts: ${availableLayouts}.`
      )
      return h()
    }

    return h(layoutConfig.component, context.data)
  },
})
</script>
