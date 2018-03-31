import Vue from 'vue'
import App from './App'
import wxPromiseApi from 'minapp-api-promise'
import store from './store'

// 初始化插件
// 在每个vue组件里使用this.$wx, this.$store
Vue.use({
  install(Vue, options) {
    Vue.prototype.$store = store
    Vue.prototype.$wx = wxPromiseApi
  }
})

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}