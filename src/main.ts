import Vue from 'vue'
import App from './App.vue'
import "vue-tsx-support/enable-check"
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
