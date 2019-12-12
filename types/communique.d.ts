import Vue, {
  AsyncComponent,
  ComponentOptions,
  PluginFunction,
  VueConstructor,
} from 'vue'

type CustomVue = VueConstructor<Vue> | ComponentOptions<Vue> | AsyncComponent

export type CommuniqueNotificationComponent = CustomVue

export type CommuniqueNotificationIconComponent = CustomVue

export declare class Communique {
  constructor(options?: CommuniqueOptions)

  components: CommuniqueComponentConfig[]
  defaults: CommuniqueNotificationDefaultOptions
  variants: CommuniqueVariantConfig
  store: { queue: CommuniqueNotification[] }

  queue: CommuniqueNotification[]

  componentNames: string[]
  variantNames: string[]
  positionNames: string[]

  getNormalizedNotificationOptions(
    notificationOptions: CommuniqueNotificationOptions
  ): CommuniqueNotificationOptions

  notifier(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  setTimeoutIfDefined(
    notification: CommuniqueNotificationOptions
  ): CommuniqueNotification
  assignNotificationUniqueId(
    notification: CommuniqueNotificationOptions
  ): CommuniqueNotification
  addToQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>
  removeFromQueue(
    notification: CommuniqueNotificationOptions
  ): Promise<CommuniqueNotification>

  dispatch(
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
  transition?: string
  position?: string
  icon?: CommuniqueNotificationIconComponent | string
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
  variants?: CommuniqueVariantConfig;
}

export interface CommuniqueComponentConfig {
  name: string;
  component: CommuniqueNotificationComponent;
}

export type CommuniqueVariantConfig = Record<
  string,
  CommuniqueNotificationDefaultOptions
>

export type CommuniqueStyleConfig = Record<string, string>

export interface CommuniqueNotificationOptions {
  $attrs?: Record<string, string | Function | Function[]>;
  component?: CommuniqueNotificationComponent | string;
  delay?: number;
  transition?: string;
  position?: string;
  icon?: CommuniqueNotificationIconComponent | string;
  title?: string;
  message: string;
  duration?: number;
  variant?: string;
  styles?: CommuniqueStyleConfig;
}

export type CommuniqueNotificationDefaultOptions = Partial<
  CommuniqueNotificationOptions
>
