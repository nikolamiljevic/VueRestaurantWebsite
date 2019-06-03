import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(VueResource)


Vue.http.options.root = 'https://domnoopizza.firebaseio.com/'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
})
