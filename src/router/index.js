import Vue from 'vue'
import VueRouter from 'vue-router'
import Sex from '../views/Sex'
import Hobby from '../views/Hobby.vue'
import Description from '../views/Description.vue'
import Result from '../views/Result'
import App from '../App.vue'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Sex',
        component: Sex
    },
    {
        path: '/Hobby',
        name: 'Hobby',
        component: Hobby
    },
    {
        path: '/Description',
        name: 'Description',
        component: Description
    },
    {
        path: '/Result',
        name: 'Result',
        component: Result
    },
    {
        path: '/App',
        name: 'App',
        component: App
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
