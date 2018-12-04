<script lang="ts">
import Vue from 'vue'
import { CommuniqueNotification } from '../../../types/communique'

export default Vue.extend({
  name: 'CommuniqueProvider',

  props: {
    /**
     * The notification instance
     */
    notification: {
      type: Object as () => CommuniqueNotification,
      default: null,
    },
  },

  created() {
    this.updateElDataSet()
    this.updateElStyle()
  },

  methods: {
    onClick(): void {
      this.close()
    },

    updateElDataSet(): void {
      this.$nextTick(() => {
        this.$el.dataset.variant = this.notification.variant
      })
    },

    updateElStyle(): void {
      this.$nextTick(() => {
        const { variantStyles, variant } = this.notification

        if (!variantStyles || !variant) return

        const styles = variantStyles[variant]

        if (styles) {
          const cssVariables: [string, string | null][] = Object.entries(styles)

          cssVariables.forEach(([cssProp, cssVal]) => {
            this.$el.style.setProperty(`--${cssProp}`, cssVal)
          })
        }
      })
    },

    close(): void {
      this.$_communique.removeFromQueue(this.notification)
    },
  },

  render(): any {
    return this.$scopedSlots.default({
      uid: this.notification.uid,
      icon: this.notification.icon,
      title: this.notification.title,
      message: this.notification.message,
      effect: this.notification.effect,
      variant: this.notification.variant,
      close: this.close,
    })
  },
})
</script>
