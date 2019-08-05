import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/ajax'
import components from '@/components/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/css/reset.css'

/**
 * 写在前面的话:
 * 项目使用 vue-cli@3.x 的版本进行构建
 * vue@2.6 + ts + ESLint(标准模式)
 * 部分代码使用到了jsx要注意标签闭合
 */

Vue.use(components)
Vue.use(iView)

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
