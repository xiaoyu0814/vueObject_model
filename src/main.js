import Vue from 'vue'
import store from './vuex/store'
import router from './router'
import api from './api/index'
import path from './api/path'
import App from './App.vue'

Vue.prototype.$http = api;
Vue.prototype.$path = path;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')