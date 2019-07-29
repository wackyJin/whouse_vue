import Vue from 'vue'
import App from './App.vue'
//为更加方便文件管理，我们把 router和store  独立到他们自己的一个文件夹下面
import router from './router/index.js'

import store from './vuex/index.js'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
