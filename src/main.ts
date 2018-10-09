import App from './App.vue'
import Vue from 'vue'
import './notification'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
