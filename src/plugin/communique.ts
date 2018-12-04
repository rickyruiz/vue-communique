import Vue, { PluginFunction } from 'vue'
import { CommuniquePluginOptions } from '../../types'
import {
  LayoutConfig,
  ICommuniqueNotification,
  Component,
} from '../../types/communique'

export enum CommuniqueEffect {
  Scale = 'scale',
  Slide = 'slide',
}

export enum CommuniqueEvent {
  BeforeEnter = 'before-enter',
  Enter = 'enter',
  AfterEnter = 'after-enter',
  EnterCancelled = 'enter-cancelled',
  BeforeLeave = 'before-leave',
  Leave = 'leave',
  LeaveCancelled = 'leave-cancelled',
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

class CommuniqueNotification implements ICommuniqueNotification {
  $attrs?: { [key: string]: string }
  $listeners?: { [key: string]: Function | Function[] }
  component?: string | Component
  delay?: number
  effect?: string
  layout?: string
  icon?: string
  title?: string
  message: string
  timeout?: number
  variant?: string
  variantStyles?: Record<string, any>

  constructor(
    notification: ICommuniqueNotification,
    options: CommuniquePluginOptions
  ) {
    this.$attrs = notification.$attrs
    this.$listeners = notification.$listeners
    this.component = notification.component
    this.delay = notification.delay || 0
    this.effect = notification.effect || options.defaultEffect
    this.layout = notification.layout || options.defaultLayout
    this.icon = notification.icon
    this.title = notification.title
    this.message = notification.message
    this.timeout = notification.timeout || options.defaultTimeout
    this.variant = notification.variant
    this.variantStyles = {
      ...options.variantStyles,
      ...notification.variantStyles,
    }
  }

  assignUniqueId(uid: number): void {
    this.uid = uid
  }

  assignTimeoutId(timeoutId: number): void {
    this.timeoutId = timeoutId
  }

  public uid?: number
  public timeoutId?: number
}

export default class Communique {
  layouts: LayoutConfig[]
  defaultLayout?: string
  defaultTimeout?: number
  defaultEffect?: string
  variantStyles?: Record<string, any>
  options: CommuniquePluginOptions
  store: Vue

  constructor(options: CommuniquePluginOptions = {}) {
    options.layouts = options.layouts || []
    options.defaultLayout = options.defaultLayout || 'default'

    this.layouts = options.layouts
    this.defaultLayout = options.defaultLayout
    this.defaultTimeout = options.defaultTimeout
    this.defaultEffect = options.defaultEffect
    this.variantStyles = options.variantStyles
    this.options = options

    this.store = new Vue({
      data: () => ({
        queue: [] as CommuniqueNotification[],
      }),
    })
  }

  public get queue(): CommuniqueNotification[] {
    return this.store.$data.queue
  }

  notify(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(notification)
  }

  primary(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Primary)
    )
  }

  secondary(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Secondary)
    )
  }

  success(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Success)
    )
  }

  info(notification: ICommuniqueNotification): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Info)
    )
  }

  warning(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Warning)
    )
  }

  error(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Error)
    )
  }

  light(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Light)
    )
  }

  dark(notification: ICommuniqueNotification): Promise<CommuniqueNotification> {
    return this.notifier(
      this.assignVariant(notification, CommuniqueVariant.Dark)
    )
  }

  notifier(
    notification: ICommuniqueNotification
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
    if (notification.timeout) {
      notification.assignTimeoutId(
        window.setTimeout(() => {
          window.clearTimeout(notification.timeoutId!)
          this.removeFromQueue(notification)
        }, notification.timeout)
      )
    }
    return notification
  }

  assignVariant(
    notification: ICommuniqueNotification,
    variant: string
  ): ICommuniqueNotification {
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

  assignUniqueId(notification: CommuniqueNotification): CommuniqueNotification {
    notification.assignUniqueId((Communique.uid += 1))
    return notification
  }

  addToQueue(
    notification: CommuniqueNotification
  ): Promise<CommuniqueNotification> {
    this.queue.unshift(this.assignUniqueId(notification))
    return Promise.resolve(notification)
  }

  removeFromQueue(
    notification: CommuniqueNotification
  ): Promise<CommuniqueNotification> {
    const index = this.queue.findIndex(({ uid }) => uid === notification.uid)
    if (index !== -1) {
      this.queue.splice(index, 1)

      if (notification.timeoutId) {
        window.clearTimeout(notification.timeoutId)
      }
    }
    return Promise.resolve(notification)
  }

  private static uid = 0

  static install: PluginFunction<CommuniquePluginOptions>
  static version: string
}
