import Vue from 'vue'
import Router from  'vue-router'
import Login from './../pages/Login'
import Person from './../components/Person'
import Register from './../pages/Register'
import manageUser from './../pages/manageUser'
import Options from './../pages/Options'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/', component:Login},
        {path:'/login', component:Login},
        {path: '/person', component: Person},
        {path: '/register', component: Register},
        {path: '/manageUser', component: manageUser},
        {path: '/options', component: Options}
    ]
})

