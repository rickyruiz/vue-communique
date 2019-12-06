import {
  CommuniqueComponentConfig,
  CommuniqueNotificationComponent,
  CommuniqueNotificationOptions,
  CommuniqueOptions,
  CommuniqueVariantStyles,
  CommuniquePluginOptions,
  CommuniqueStyleConfig,
  CommuniqueNotificationDefaultOptions,
} from 'types'
import Vue, { PluginFunction, VueConstructor } from 'vue'
import { install, VueWithPlugin } from './install'
import { inBrowser } from './utils/dom'
import { assert, warn } from './utils/warn'

const BaseNotification = () =>
  import(
    /* webpackChunkName: 'BaseNotification.vue' */
    './components/opinionated/BaseNotification.vue'
  )

export enum CommuniqueEffect {
  Scale = 'scale',
  Slide = 'slide',
}

export enum CommuniquePosition {
  TopLeft = 'top-left',
  TopCenter = 'top-center',
  TopRight = 'top-right',
  CenterLeft = 'center-left',
  Center = 'center',
  CenterRight = 'center-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  BottomRight = 'bottom-right',
}

export enum CommuniqueVariant {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

class CommuniqueNotification implements CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent | string
  delay: number
  effect?: string
  position?: string
  icon?: string
  title?: string
  message: string
  duration?: number
  variant?: string
  styles?: CommuniqueStyleConfig

  constructor(options: CommuniqueNotificationOptions) {
    this.$attrs = options.$attrs
    this.delay = options.delay || 0
    this.effect = options.effect
    this.position = options.position || CommuniquePosition.BottomLeft
    this.title = options.title
    this.message = options.message
    this.icon = options.icon
    this.duration = options.duration
    this.variant = options.variant
    this.styles = options.styles

    this.component = options.component || BaseNotification
  }

  assignUniqueId(id: number): void {
    this.id = id
  }

  assignTimeoutId(timeoutId: number): void {
    this.timeoutId = timeoutId
  }

  public id?: number
  public timeoutId?: number
}

export default class Communique {
  components: CommuniqueComponentConfig[]
  defaults?: CommuniqueNotificationDefaultOptions
  variantStyles?: CommuniqueVariantStyles
  store: { queue: CommuniqueNotification[] }

  constructor(options: CommuniqueOptions = {}) {
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here.
    if (!VueWithPlugin && inBrowser && window.Vue) {
      Communique.install(
        (window as typeof window & { Vue: VueConstructor<Vue> }).Vue
      )
    }

    if (process.env.NODE_ENV !== 'production') {
      assert(
        VueWithPlugin,
        `must call Vue.use(Communique) before creating a communique instance.`
      )
      assert(
        typeof Promise !== 'undefined',
        `vue-communique requires a Promise polyfill in this browser.`
      )
      assert(
        this instanceof Communique,
        `Communique must be called with the new operator.`
      )
    }

    this.components = options.components || []

    this.defaults = options.defaults

    this.variantStyles = options.variantStyles

    this.store = Vue.observable({
      queue: [] as CommuniqueNotification[],
    })
  }

  get queue(): CommuniqueNotification[] {
    return this.store.queue
  }

  getNormalizedNotificationOptions(
    notificationOptions: CommuniqueNotificationOptions
  ): CommuniqueNotificationOptions {
    const normalizedOptions: CommuniqueNotificationOptions = {
      ...this.defaults,
      ...notificationOptions,
    }

    const { component, variant } = normalizedOptions

    // If the component notification option is a string,
    // look for the component in the components config
    if (component && typeof component === 'string') {
      const componentConfig = this.components.find(
        ({ name }) => name === component
      )

      warn(
        Boolean(componentConfig),
        `invalid component: ${component}.\nPlease use one of the following components: ${this.components.map(
          ({ name }) => name
        )}.`
      )

      normalizedOptions.component = componentConfig && componentConfig.component
    }

    // If there are styles in the variant styles config,
    // and the notification has a variant,
    // copy the variant styles to the notification styles
    if (this.variantStyles && variant) {
      const variantStyle = this.variantStyles[variant]

      if (variantStyle) {
        normalizedOptions.styles = {
          ...variantStyle,
          ...normalizedOptions.styles,
        }
      }
    }

    return normalizedOptions
  }

  notify(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(notification)
  }

  success(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Success)
    )
  }

  info(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Info)
    )
  }

  warning(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Warning)
    )
  }

  error(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Error)
    )
  }

  notifier(
    notificationOptions: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    const communiqueNotification = new CommuniqueNotification(
      this.getNormalizedNotificationOptions(notificationOptions)
    )

    return new Promise(resolve => {
      window.setTimeout(() => {
        this.addToQueue(this.setTimeoutIfDefined(communiqueNotification))
        resolve(communiqueNotification)
      }, communiqueNotification.delay)
    })
  }

  setTimeoutIfDefined(
    notification: CommuniqueNotification
  ): CommuniqueNotification {
    if (notification.duration) {
      notification.assignTimeoutId(
        window.setTimeout(() => {
          window.clearTimeout(notification.timeoutId)
          this.removeFromQueue(notification)
        }, notification.duration)
      )
    }
    return notification
  }

  assignVariant(
    notification: CommuniqueNotificationOptions,
    variant: string
  ): CommuniqueNotificationOptions {
    notification.variant = variant
    return notification
  }

  assignNotificationUniqueId(
    notification: CommuniqueNotification
  ): CommuniqueNotification {
    notification.assignUniqueId((Communique.id += 1))
    return notification
  }

  addToQueue(
    notification: CommuniqueNotification
  ): Promise<CommuniqueNotification> {
    this.queue.push(this.assignNotificationUniqueId(notification))
    return Promise.resolve(notification)
  }

  removeFromQueue(
    notification: CommuniqueNotification
  ): Promise<CommuniqueNotification> {
    const index = this.queue.findIndex(({ id }) => id === notification.id)
    if (index !== -1) {
      this.queue.splice(index, 1)

      if (notification.timeoutId) {
        window.clearTimeout(notification.timeoutId)
      }
    }
    return Promise.resolve(notification)
  }

  private static id = 0

  static install: PluginFunction<CommuniquePluginOptions> = install
  static version = '__VERSION__'
}
