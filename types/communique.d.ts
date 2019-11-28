import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'

export type CommuniqueNotificationComponent =
  | Vue
  | ComponentOptions<Vue>
  | typeof Vue
  | AsyncComponent

export declare class Communique {
  constructor(options?: CommuniqueOptions)

  layouts: CommuniqueLayoutConfig[]
  defaultLayout?: string
  defaultDelay?: number
  defaultTimeout?: number
  defaultEffect?: string
  variantStyles?: CommuniqueVariantStyles
  options: CommuniqueOptions
  store: { queue: CommuniqueNotification[] }

  queue: CommuniqueNotification[]

  getNotificationComponent(
    notification: CommuniqueNotification
  ): CommuniqueNotificationComponent | undefined
  getNotificationStyle(
    notification: CommuniqueNotification
  ): CommuniqueVariantStyleConfig | undefined

  notifier(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  setTimeoutIfDefined(
    notification: CommuniqueNotificationOptions
  ): CommuniqueNotification
  assignVariant(
    notification: CommuniqueNotificationOptions,
    variant: string
  ): CommuniqueNotificationOptions
  assignNotificationUniqueId(
    notification: CommuniqueNotificationOptions
  ): CommuniqueNotification
  assignNotificationRemoveFunction(
    notification: CommuniqueNotificationOptions
  ): CommuniqueNotification
  addToQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  removeFromQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>

  notify(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  primary(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  secondary(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  success(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  info(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  warning(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  error(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  light(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  dark(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  private static id: number

  private static getNotificationComponent(
    notification: CommuniqueNotification,
    layouts: CommuniqueLayoutConfig[]
  ): CommuniqueNotificationComponent | undefined

  private static getNotificationStyle(
    notification: CommuniqueNotification
  ): CommuniqueVariantStyleConfig | undefined

  static install: PluginFunction<never>
  static version: string
}

export declare class CommuniqueNotification
  implements CommuniqueNotificationOptions {
  constructor(notification: CommuniqueNotificationOptions)

  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent
  delay?: number
  effect?: string
  layout?: string
  icon?: string
  title?: string
  message: string
  timeout?: number
  variant?: string
  variantStyles?: CommuniqueVariantStyles

  assignUniqueId(id: number): void

  assignTimeoutId(timeoutId: number): void
  assignRemoveFunction(remove: () => Promise<CommuniqueNotification>): void

  public id: number
  public timeoutId?: number

  public remove?: () => Promise<CommuniqueNotification>
}

export interface CommuniqueOptions {
  layouts?: CommuniqueLayoutConfig[]
  defaultLayout?: string
  defaultDelay?: number
  defaultTimeout?: number
  defaultEffect?: string
  variantStyles?: CommuniqueVariantStyles
}

export interface CommuniqueLayoutConfig {
  name: string
  component: CommuniqueNotificationComponent
}

export interface CommuniqueVariantStyles
  extends Record<string, CommuniqueVariantStyleConfig> {}

export interface CommuniqueVariantStyleConfig extends Record<string, string> {}

export interface CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent
  delay?: number
  effect?: string
  layout?: string
  icon?: string
  title?: string
  message: string
  timeout?: number
  variant?: string
  variantStyles?: CommuniqueVariantStyles
}
