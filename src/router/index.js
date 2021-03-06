import Vue from 'vue'
import Router from  'vue-router'
import index from './../components/index'
import Register from './../components/Register'
import manageUser from './../components/manageUser'
import Options from './../components/Options'
import manageDependencies from './../components/manageDependencies'
import listUsers from './../components/listUsers'
import RegisterD from './../components/RegisterD'
import firebase from 'firebase'

Vue.use(Router)

const router=new Router({
    routes:[
        {path:'/', component:index,},
        {path:'/login', component:index},
        {path: '/register', component: Register},
        {path: '/manageUser', component: manageUser, meta: {requiresAuth: true}},
        {path: '/options', component: Options, meta: { requiresAuth: true}},
        {path: '/manageDependencies', component: manageDependencies, meta: { requiresAuth: true}},
        {path: '/listUsers', component: listUsers, meta: { requiresAuth: true}},
        {path: '/registerD', component: RegisterD, meta: { requiresAuth: true}},
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router


