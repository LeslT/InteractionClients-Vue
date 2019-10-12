import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import inicio from './pages/inicio.vue';
import personas from './pages/personas.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: inicio },
  { path: '/personas', component: personas }
]
const router = new VueRouter({ routes });
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
