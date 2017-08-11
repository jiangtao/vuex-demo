import Vue from 'vue'
import App from './App'
import router from './router'
import title from 'plugins/title'
import Layout from 'components/layout'
import store from './vuex'
import Alert from 'vt-alert'

Vue.use(title)

Vue.component('Layout', Layout)

new Vue({
  store,
  router,
  ...App
}).$mount('#app')
