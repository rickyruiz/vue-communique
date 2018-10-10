<script lang="ts">
import Vue, { VNode, ComponentOptions, AsyncComponent } from 'vue'
import Communique from '@/plugin/communique'

export default Vue.extend({
  name: 'CommuniqueNotification',

  inheritAttrs: false,

  props: {
    /**
     * The opinionated layout to use for the notification.
     * Layouts: growl | attached | bar | other
     */
    layout: {
      type: String,
      default: null,
    },
  },

  computed: {
    availableLayouts(): string[] {
      return this.$_communique.layouts.map(({ name }) => name)
    },

    layoutIsAvailable(): boolean {
      return this.availableLayouts.includes(this.layout)
    },

    layoutName(): string {
      // Capitalize the first letter of the layout to match the component's name
      return `Layout${this.layout[0].toUpperCase()}${this.layout.slice(1)}`
    },

    renderComponent(): ComponentOptions<Vue> | typeof Vue | AsyncComponent {
      // If layout is available assume component cannot be undefined.
      const { component } = this.$_communique.layouts.find(
        ({ name }) => name === this.layout
      )!
      return component
    },
  },

  created() {
    this.validateProps()
  },

  methods: {
    validateProps(): void {
      // If the opinionated layout does not have the default value,
      // validate that it is available
      if (this.layout) {
        if (!this.layoutIsAvailable) {
          return console.warn(
            `Invalid <CommuniqueNotification> layout: ${
              this.layout
            }.\nPlease use one of the following layouts: ${
              this.availableLayouts
            }`
          )
        }
      }
    },

    validateCustomLayout(): void {
      // If there's no opinionated layout, scoped slots should be used
      if (!this.layout) {
        // Validate that a default scoped slot exists
        if (!this.$scopedSlots.default) {
          return console.warn(
            `Invalid <CommuniqueNotification> custom layout: ${this.layout}.
            \nCustom layouts need a default scoped slot https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots.
            \nWant to use an opinionated layout? Use the <CommuniqueNotification> layout prop with any of the following values: ${
              this.availableLayouts
            }.`
          )
        }
      }
    },
  },

  render(createElement): VNode {
    const componentOptions = {
      attrs: { class: 'communique__notification', ...this.$attrs },
      on: { ...this.$listeners },
    }

    if (this.layout) {
      if (this.layoutIsAvailable) {
        return createElement(this.renderComponent, componentOptions)
      }
      return createElement()
    }

    this.validateCustomLayout()

    if (this.$scopedSlots.default) {
      return createElement(this.renderComponent, componentOptions, [
        this.$scopedSlots.default,
      ])
    }

    return createElement()
  },
})
</script>
