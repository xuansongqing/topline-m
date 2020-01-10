import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 动态设置 REM 基准值（html 标签的字体大小）
import 'amfe-flexible'
// 注册Vant组件
import './utils/register-vant'
// 加载全局样式
// 注意该文件放到第三方样式之后
import './styles/index.less'
// 注册表单验证
import './utils/validation.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
