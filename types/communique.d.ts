import Vue, {
  AsyncComponent,
  ComponentOptions,
  PluginFunction,
  VueConstructor,
} from 'vue'

export type CommuniqueNotificationComponent =
  | VueConstructor<Vue>
  | ComponentOptions<Vue>
  | AsyncComponent

export declare class Communique {
  constructor(options?: CommuniqueOptions)

  components: CommuniqueComponentConfig[]
  defaults: CommuniqueNotificationDefaultOptions
  variantStyles?: CommuniqueVariantStyles
  store: { queue: CommuniqueNotification[] }

  queue: CommuniqueNotification[]

  getNormalizedNotificationOptions(
    notificationOptions: CommuniqueNotificationOptions
  ): CommuniqueNotificationOptions

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
  addToQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  removeFromQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>

  notify(
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

  private static id: number

  static install: PluginFunction<never>
  static version: string
}

export declare class CommuniqueNotification
  implements CommuniqueNotificationOptions {
  constructor(notification: CommuniqueNotificationOptions)

  $attrs?: Record<string, string | Function | Function[]>
  component?: CommuniqueNotificationComponent
  delay: number
  effect?: string
  position?: string
  icon?: string
  title?: string
  message: string
  duration?: number
  variant?: string
  styles?: CommuniqueStyleConfig

  assignUniqueId(id: number): void
  assignTimeoutId(timeoutId: number): void

  public id: number
  public timeoutId?: number
}

export interface CommuniquePluginOptions {
  inject?: boolean;
}

export interface CommuniqueOptions {
  components?: CommuniqueComponentConfig[];
  defaults?: CommuniqueNotificationDefaultOptions;
  variantStyles?: CommuniqueVariantStyles;
}

export interface CommuniqueComponentConfig {
  name: string;
  component: CommuniqueNotificationComponent;
}

export type CommuniqueVariantStyles = Record<string, CommuniqueStyleConfig>

export type CommuniqueStyleConfig = Record<string, string>

export interface CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>;
  component?: CommuniqueNotificationComponent | string;
  delay?: number;
  effect?: string;
  position?: string;
  icon?: string;
  title?: string;
  message: string;
  duration?: number;
  variant?: string;
  styles?: CommuniqueStyleConfig;
}

export type CommuniqueNotificationDefaultOptions = Partial<
  CommuniqueNotificationOptions
>
