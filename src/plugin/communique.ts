import {
  CommuniqueComponentConfig,
  CommuniqueNotificationComponent,
  CommuniqueNotificationIconComponent,
  CommuniqueNotificationOptions,
  CommuniqueOptions,
  CommuniqueVariantConfig,
  CommuniquePluginOptions,
  CommuniqueStyleConfig,
  CommuniqueNotificationDefaultOptions,
} from 'types'
import Vue, { PluginFunction, VueConstructor } from 'vue'
import { install, VueWithPlugin } from './install'
import { inBrowser } from './utils/dom'
import { assert, warn } from './utils/warn'

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

class CommuniqueNotification implements CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent | string
  delay: number
  transition?: string
  position?: string
  icon?: CommuniqueNotificationIconComponent | string
  title?: string
  message: string
  duration?: number
  variant?: string
  styles?: CommuniqueStyleConfig

  constructor(options: CommuniqueNotificationOptions) {
    this.$attrs = options.$attrs
    this.delay = options.delay && options.delay > 0 ? options.delay : 0
    this.transition = options.transition
    this.position = options.position || CommuniquePosition.BottomLeft
    this.title = options.title
    this.message = options.message
    this.icon = options.icon
    this.duration =
      options.duration && options.duration > 0 ? options.duration : undefined
    this.variant = options.variant
    this.styles = options.styles
    this.component = options.component

    warn(
      options.component,
      `notification component is undefined.

There are three ways to render a notification component.

Option 1, using the notification 'component' option:

// @/components/SomeComponent.vue
const notification = await this.$communique.dispatch({
  title: 'Some notification',
  message: 'Some notification message',
  component: () =>
    import(
      /* webpackChunkName: 'BaseNotification.vue' */
      '@/notification/components/BaseNotification.vue'
    ),
})

Option 2, using the variant 'component' option:

// @/src/notification/variants.(js|ts)
export default {
  success: {
    component: () =>
      import(
        /* webpackChunkName: 'BaseNotification.vue' */
        '@/notification/components/BaseNotification.vue'
      ),
  },
}

Option 3, using the Communique instance defaults 'component' option:

// @/src/notification/index.(js|ts)
const communique = new Communique({
  defaults: {
    component: () =>
      import(
        /* webpackChunkName: 'BaseNotification.vue' */
        '@/notification/components/BaseNotification.vue'
      ),
  },
})
      `
    )
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
  variants?: CommuniqueVariantConfig
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

    this.variants = options.variants

    this.store = Vue.observable({
      queue: [] as CommuniqueNotification[],
    })
  }

  get queue(): CommuniqueNotification[] {
    return this.store.queue
  }

  get componentNames(): string[] {
    return this.components ? this.components.map(({ name }) => name) : []
  }

  get variantNames(): string[] {
    return Object.keys(this.variants || {})
  }

  get positionNames(): string[] {
    return Object.values(CommuniquePosition)
  }

  getNormalizedNotificationOptions(
    notificationOptions: CommuniqueNotificationOptions
  ): CommuniqueNotificationOptions {
    let normalizedOptions: CommuniqueNotificationOptions = {
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

    // If there is a variant config,
    // and the notification has a variant,
    // copy the variant options to the notification options
    if (this.variants && variant) {
      const variantOptions = this.variants[variant]

      if (variantOptions) {
        normalizedOptions = {
          ...variantOptions,
          ...normalizedOptions,
        }
      }
    }

    return normalizedOptions
  }

  dispatch(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(notification)
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
  static version = process.env.VUE_APP_VERSION
}
