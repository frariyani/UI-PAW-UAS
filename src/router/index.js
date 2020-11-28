import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import Shoes from '@/components/Shoes'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
import Login from '@/components/Login'
import Penjualan from '@/components/Penjualan'
import Pembelian from '@/components/Pembelian'
import EditProfile from '@/components/EditProfile'
import Register from '@/components/Register'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path:'/',
                    component: Home,
                    name: 'Home',
                },
                {
                    path: '/profile',
                    component: Profile,
                    name: 'Profile',
                    children: [
                        {
                            path: '/penjualan',
                            name: 'penjualan',
                            component: Penjualan
                        },
                        {
                            path: '/pembelian',
                            name: 'pembelian',
                            component: Pembelian,
                        },
                        {
                            path: '/editprofile',
                            name: 'Edit Profil',
                            component: EditProfile,
                        },
                    ],
                },
                {
                    path: '/shoes',
                    component: Shoes,
                    name: 'Shoes',
                },
                {
                    path: '/shoppingcart',
                    component: ShoppingCart,
                    name: 'Shopping Cart'
                },
                {
                    path: '/product',
                    component: Product,
                    name: 'Product'
                },
            ],
               
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
        },
        {
            path: '*',
            redirect: '/'
        },
    ],
})