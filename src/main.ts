import Vue from 'vue'
import App from './App.vue'
import communique from './notification'

Vue.config.productionTip = false

new Vue({
  communique,
  render: h => h(App),
}).$mount('#app')
