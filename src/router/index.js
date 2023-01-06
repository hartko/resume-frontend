import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Home from '@/views/Home/Home'
import AboutMe from '@/views/AboutMe/AboutMe'
import EditAboutMe from '@/views/AboutMe/Edit'
import MyProjects from '@/views/MyProjects/MyProjects'
// User
import Login from '@/views/User/Login'
import Signup from '@/views/User/Signup'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-me/:id',
            name: 'aboutMe',
            component: AboutMe
        },
        {
            path: '/about-me/edit/:id',
            name: 'editAboutMe',
            component: EditAboutMe
        },
        {
            path: '/my-projects',
            name: 'myProjects',
            component: MyProjects
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'Signup',
            component: Signup
        }
    ]
})
