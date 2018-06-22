// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VjContent from './components/global/Content'
import VjImage from './components/global/Image'
import VjSeparator from './components/global/Separator'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.component('VjContent', VjContent)
Vue.component('VjImage', VjImage)
Vue.component('VjSeparator', VjSeparator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
