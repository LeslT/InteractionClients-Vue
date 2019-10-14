import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store/store.js'

const fb = require('../firebaseConfig.js')

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            vuetify,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
