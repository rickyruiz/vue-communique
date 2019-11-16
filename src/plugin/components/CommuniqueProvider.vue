<script lang="ts">
import { writeCssVar } from '@/plugin/utils/css-variables'
import Vue, { PropType } from 'vue'
import { CommuniqueNotification } from '../../../types'

export default Vue.extend({
  name: 'CommuniqueProvider',

  props: {
    /**
     * The notification instance
     */
    notification: {
      type: Object as PropType<CommuniqueNotification>,
      default: null,
      required: true,
    },
  },

  computed: {
    element(): HTMLElement {
      return this.$el as HTMLElement
    },
  },

  async created() {
    await this.updateElDataSet()
    await this.updateElStyle()
  },

  methods: {
    onClick(): void {
      this.close()
    },

    async updateElDataSet(): Promise<void> {
      await this.$nextTick()

      this.element.dataset.variant = this.notification.variant
    },

    async updateElStyle(): Promise<void> {
      await this.$nextTick()

      const { variantStyles, variant } = this.notification

      if (!variantStyles || !variant) return

      const styles = variantStyles[variant]

      if (styles) {
        const cssVariables: [string, string | null][] = Object.entries(styles)

        cssVariables.forEach(([propertyName, value]) =>
          writeCssVar(this.element, propertyName, `${value}`)
        )
      }
    },

    close(): void {
      this.$_communique.removeFromQueue(this.notification)
    },
  },

  render(): any {
    return (
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        uid: this.notification.uid,
        icon: this.notification.icon,
        title: this.notification.title,
        message: this.notification.message,
        effect: this.notification.effect,
        variant: this.notification.variant,
        close: this.close,
      })
    )
  },
})
</script>
