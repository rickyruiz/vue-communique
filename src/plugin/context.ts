import Vue from 'vue'

/**
 *  @summary A function that creates a `Communique` context for Vue components.
 *
 * @param {Vue} vm - A Vue component instance
 * @param {boolean|undefined} inject - A flag that indicates if the plugin should inject a `Communique` instance
 * to every descendant component or not.
 */
export default function(vm: Vue, inject?: boolean) {
  const componentOptions = vm.$options
  const Communique = componentOptions.communique
  const contextKey = '$communique'

  // If a Communique instance is present in the root component,
  // serve as a dependency injector for all its descendants.
  if (Communique) {
    // Provider
    componentOptions.provide = {
      // Provide Communique instance
      [contextKey]: Communique,
      ...componentOptions.provide,
    }
  } else if (componentOptions.parent && inject) {
    // Consumer
    if (Array.isArray(componentOptions.inject)) {
      // Inject Communique instance
      componentOptions.inject.push(contextKey)
    } else {
      componentOptions.inject = {
        // Inject Communique instance
        [contextKey]: {
          from: contextKey,
        },
        ...componentOptions.inject,
      }
    }
  }
}
