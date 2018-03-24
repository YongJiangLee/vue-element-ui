import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/style.css'
import store from './store'
import $http from './axios'

Vue.prototype.$http = $http

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
