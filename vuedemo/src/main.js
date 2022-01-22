import Vue from 'vue'
import "./assets/less/base.less"
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
