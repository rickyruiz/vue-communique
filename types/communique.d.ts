import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'
import {
  CommuniqueEffect,
  CommuniqueEvent,
  CommuniqueVariant,
} from '@/plugin/communique'

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
  static readonly Effect: typeof CommuniqueEffect
  static readonly Event: typeof CommuniqueEvent
  static readonly Variant: typeof CommuniqueVariant

  static install: PluginFunction<CommuniquePluginOptions>
}

export declare class CommuniqueNotification implements ICommuniqueNotification {
  constructor(notification: ICommuniqueNotification)

  $attrs?: { [key: string]: string }
  $listeners?: { [key: string]: Function | Function[] }
  component?: string | Component
  delay?: number
  effect?: CommuniqueEffect
  layout?: string | Component
  message: string
  timeout?: number
  variant?: CommuniqueVariant

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
  effect?: CommuniqueEffect
  layout?: string | Component
  message: string
  timeout?: number
  variant?: CommuniqueVariant
  variantStyles?: Record<string, any>
}