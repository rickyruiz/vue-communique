import {
  CommuniqueLayoutConfig,
  CommuniqueNotificationComponent,
  CommuniqueNotificationOptions,
  CommuniqueOptions,
  CommuniqueVariantStyleConfig,
  CommuniqueVariantStyles,
  CommuniquePluginOptions,
} from 'types'
import Vue, { PluginFunction, VueConstructor } from 'vue'
import { install, VueWithPlugin } from './install'
import { inBrowser } from './utils/dom'
import { assert, warn } from './utils/warn'

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
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
}

class CommuniqueNotification implements CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent
  delay?: number
  effect?: string
  position?: string
  layout?: string
  icon?: string
  title?: string
  message: string
  duration?: number
  variant?: string
  variantStyles?: CommuniqueVariantStyles

  constructor(
    notification: CommuniqueNotificationOptions,
    options: CommuniqueOptions
  ) {
    this.$attrs = notification.$attrs
    this.component = notification.component
    this.delay = notification.delay || options.defaultDelay || 0
    this.effect = notification.effect || options.defaultEffect
    this.position = notification.position || options.defaultPosition
    this.layout = notification.layout || options.defaultLayout
    this.icon = notification.icon
    this.title = notification.title
    this.message = notification.message
    this.duration = notification.duration || options.defaultDuration
    this.variant = notification.variant
    this.variantStyles = {
      ...options.variantStyles,
      ...notification.variantStyles,
    }
  }

  assignUniqueId(id: number): void {
    this.id = id
  }

  assignTimeoutId(timeoutId: number): void {
    this.timeoutId = timeoutId
  }

  assignRemoveFunction(remove: () => Promise<CommuniqueNotification>): void {
    this.remove = remove
  }

  public id?: number
  public timeoutId?: number

  public remove?: () => Promise<CommuniqueNotification>
}

export default class Communique {
  layouts: CommuniqueLayoutConfig[]
  defaultLayout?: string
  defaultDelay?: number
  defaultDuration?: number
  defaultEffect?: string
  defaultPosition?: string
  variantStyles?: CommuniqueVariantStyles
  options: CommuniqueOptions
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

    options.layouts = options.layouts || []
    options.defaultPosition =
      options.defaultPosition || CommuniquePosition.BottomLeft
    options.defaultLayout = options.defaultLayout || 'default'

    this.layouts = options.layouts
    this.defaultLayout = options.defaultLayout
    this.defaultDelay = options.defaultDelay
    this.defaultDuration = options.defaultDuration
    this.defaultEffect = options.defaultEffect
    this.defaultPosition = options.defaultPosition
    this.variantStyles = options.variantStyles
    this.options = options

    this.store = Vue.observable({
      queue: [] as CommuniqueNotification[],
    })
  }

  get queue(): CommuniqueNotification[] {
    return this.store.queue
  }

  getNotificationComponent(
    notification: CommuniqueNotification
  ): CommuniqueNotificationComponent | undefined {
    return Communique.getNotificationComponent(notification, this.layouts)
  }

  getNotificationStyle(
    notification: CommuniqueNotification
  ): CommuniqueVariantStyleConfig | undefined {
    return Communique.getNotificationStyle(notification)
  }

  notify(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(notification)
  }

  primary(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Primary)
    )
  }

  secondary(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Secondary)
    )
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

  light(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Light)
    )
  }

  dark(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Dark)
    )
  }

  notifier(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification> {
    const communiqueNotification = new CommuniqueNotification(
      notification,
      this.options
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
    if (!notification.icon && this.variantStyles) {
      const currentVariant = this.variantStyles[variant]

      if (currentVariant) {
        const icon = currentVariant['icon']

        if (icon) {
          notification.icon = icon
        }
      }
    }
    return notification
  }

  assignNotificationUniqueId(
    notification: CommuniqueNotification
  ): CommuniqueNotification {
    notification.assignUniqueId((Communique.id += 1))
    return notification
  }

  assignNotificationRemoveFunction(
    notification: CommuniqueNotification
  ): CommuniqueNotification {
    notification.assignRemoveFunction(() => this.removeFromQueue(notification))
    return notification
  }

  addToQueue(
    notification: CommuniqueNotification
  ): Promise<CommuniqueNotification> {
    this.queue.unshift(
      this.assignNotificationUniqueId(
        this.assignNotificationRemoveFunction(notification)
      )
    )
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

  private static getNotificationComponent(
    notification: CommuniqueNotification,
    layouts: CommuniqueLayoutConfig[]
  ): CommuniqueNotificationComponent | undefined {
    let component: CommuniqueNotificationComponent | undefined

    const layout = notification.layout

    if (notification.component) {
      component = notification.component
    } else if (layout) {
      const layoutConfig = layouts.find(({ name }) => name === layout)

      warn(
        Boolean(layoutConfig),
        `invalid layout: ${layout}.\nPlease use one of the following layouts: ${layouts.map(
          ({ name }) => name
        )}.`
      )

      component = layoutConfig && layoutConfig.component
    }

    return component
  }

  private static getNotificationStyle(
    notification: CommuniqueNotification
  ): CommuniqueVariantStyleConfig | undefined {
    const { variantStyles, variant } = notification

    if (!variantStyles || !variant) return

    const styles = variantStyles[variant]

    if (!styles) return

    const style: CommuniqueVariantStyleConfig = {}

    for (const key in styles) {
      style[`--${key}`] = styles[key]
    }

    return style
  }

  static install: PluginFunction<CommuniquePluginOptions> = install
  static version = '__VERSION__'
}
