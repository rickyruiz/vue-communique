import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'

export type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

export declare class Communique {
  constructor(options?: CommuniquePluginOptions)

  layouts: LayoutConfig[]
  defaultLayout?: string
  variantStyles?: Record<string, any>
  options: CommuniquePluginOptions
  store: typeof Vue

  queue: CommuniqueNotification[]
  notifier(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification>
  setTimeoutIfDefined(
    notification: ICommuniqueNotification
  ): CommuniqueNotification
  assignUniqueId(notification: ICommuniqueNotification): CommuniqueNotification
  addToQueue(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification>
  removeFromQueue(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification>

  notify(notification: ICommuniqueNotification): Promise<CommuniqueNotification>
  success(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification>
  info(notification: ICommuniqueNotification): Promise<CommuniqueNotification>
  warning(
    notification: ICommuniqueNotification
  ): Promise<CommuniqueNotification>
  error(notification: ICommuniqueNotification): Promise<CommuniqueNotification>

  private static uid: number

  static install: PluginFunction<CommuniquePluginOptions>
}

export declare class CommuniqueNotification implements ICommuniqueNotification {
  constructor(notification: ICommuniqueNotification)

  $attrs?: { [key: string]: string }
  $listeners?: { [key: string]: Function | Function[] }
  component?: string | Component
  delay?: number
  effect?: string
  layout?: string | Component
  title?: string
  message: string
  timeout?: number
  variant?: string

  assignUniqueId(uid: number): void

  assignTimeoutId(timeoutId: number): void

  public uid: number
  public timeoutId?: number
}

export interface CommuniquePluginOptions {
  layouts?: LayoutConfig[]
  defaultLayout?: string
  variantStyles?: Record<string, any>
}

export interface LayoutConfig {
  component: Component
  name: string
}

export interface ICommuniqueNotification {
  $attrs?: { [key: string]: string }
  $listeners?: { [key: string]: Function | Function[] }
  component?: string | Component
  delay?: number
  effect?: string
  layout?: string | Component
  title?: string
  message: string
  timeout?: number
  variant?: string
  variantStyles?: Record<string, any>
}
