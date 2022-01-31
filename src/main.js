import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '/store'

Vue.use(Vuex)



Vue.use(VueRouter)




const routes = [

    {
        path: '/',
        component: () =>
            import ('./pages/MenuPrincipal.vue'),
    },

    {
        path: '/hamburguesas',
        component: () =>
            import ('./pages/Hamburguesas.vue')
    },

    {
        path: '/Comidas',
        component: () =>
            import ('./pages/Comidas.vue')
    },

    {
        path: '/Raciones',
        component: () =>
            import ('./pages/Raciones.vue')
    },

    {
        path: '/Tragos',
        component: () =>
            import ('./pages/Tragos.vue')
    },


    {
        path: '/Bebidas',
        component: () =>
            import ('./pages/Bebidas.vue')
    },

    {
        path: '/Cervezas',
        component: () =>
            import ('./pages/Cervezas.vue')
    },

    {
        path: '/Whiskys',
        component: () =>
            import ('./pages/Whiskys.vue')
    },

    {
        path: '/Carrito',
        component: () =>
            import ('./pages/Carrito.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})


Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')