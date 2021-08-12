import VueRouter from "vue-router";
import { AuthenticationRoutes } from "./modules/AuthenticationModule/routes.js";
import { BlogRoutes } from './modules/BlogModule/routes.js'

const HomePageRoutes = [
    {
        path: '/',
        component: () => import('./Pages/HomePage'),
        name: 'home'
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes: [
        //Home pages
        ...HomePageRoutes,

        //Authentication
        ...AuthenticationRoutes,
        //Blogs
        ...BlogRoutes
    ]
})