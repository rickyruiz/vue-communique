import Vue from 'vue'

const mixin: Record<string, (this: Vue) => void> = {
  beforeCreate(): void {
    const options = this.$options
    // Inject Communique instance
    if (options.communique) {
      this.$communique = options.communique
    } else if (options.parent && options.parent.$communique) {
      this.$communique = options.parent.$communique
    }
  },
}

export default mixin
