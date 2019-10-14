import Vue from 'vue'
import Router from  'vue-router'
import Login from './../pages/Login'
import Register from './../pages/Register'
import manageUser from './../pages/manageUser'
import Options from './../pages/Options'
import firebase from 'firebase'

Vue.use(Router)

const router=new Router({
    routes:[
        {path:'/', component:Login,},
        {path:'/login', component:Login},
        {path: '/register', component: Register},
        {path: '/manageUser', component: manageUser,
        meta: {
            requiresAuth: true
        }},
        {path: '/options', component: Options,  
        meta: {
            requiresAuth: true
        }}
        //OJO... ACA VAN LAS DEMAS RUTAS CON EL ATRIBUTO requiresAuth
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


