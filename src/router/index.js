import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Mine = () => import('views/mine/Mine')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/detail',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    // mode: 'history',
    base: process.env.BASE_URL,
})

export default router