<script lang="ts">
import { CommuniqueNotification } from '@/plugin/types/communique'
import Communique from '@/plugin/communique'
import Vue from 'vue'

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

    /**
     * The message shown in the alert.
     */
    message: {
      type: String,
      default: null,
    },

    /**
     * The effect for the specified layout.
     * Effects: scale | slide
     */
    effect: {
      type: String,
      default: Communique.Effect.Scale,
    },

    /**
     * The alert variant.
     * Variants: primary | secondary | success | error | warning | info | light | dark
     */
    variant: {
      type: String,
      default: Communique.Variant.Error,
    },

    /**
     * The alert variant css variables.
     * Ex: { primary: { backgroundColor: 'dodgerblue' } }
     * Sets the CSS variable --backgroundColor: dodgerblue on the element's style,
     * when the variant prop is 'primary'.
     */
    variantStyles: {
      type: Object as () => { [key: string]: any },
      default: () => ({} as { [key: string]: any }),
    },

    /**
     * If timeout is enabled and there is no user action, the alert will close
     * after the following time.
     */
    timeout: {
      type: Number,
      default: 6000,
    },

    /**
     * If enabled, the alert will close after the given timeout.
     */
    isTimeoutEnabled: {
      type: Boolean,
      default: true,
    },

    /**
     * If enabled, the alert will be clickable.
     */
    isClickable: {
      type: Boolean,
      default: true,
    },

    /**
     * If enabled, the alert will close when the user clicks it.
     */
    closeOnClick: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    variant: {
      handler() {
        this.updateElDataSet()
        this.updateElStyle()
      },
      immediate: true,
    },
  },

  methods: {
    onClick(): void {
      if (this.isClickable) {
        this.close()
      }
    },

    updateElDataSet(): void {
      this.$nextTick(() => {
        this.$el.dataset.variant = this.variant
      })
    },

    updateElStyle(): void {
      this.$nextTick(() => {
        const variantStyles = this.variantStyles[this.variant]
        if (variantStyles) {
          const style: [string, string | null][] = Object.entries(variantStyles)

          style.forEach(([cssProp, cssVal]) => {
            this.$el.style.setProperty(`--${cssProp}`, cssVal)
          })
        }
      })
    },

    close(): void {
      this.$_communique.removeFromQueue(this.notification)
    },
  },

  render(createElement): any {
    return this.$scopedSlots.default({
      uid: this.notification.uid,
      message: this.notification.message,
      effect: this.notification.effect,
      variant: this.notification.variant,
      close: this.close,
    })
  },
})
</script>
