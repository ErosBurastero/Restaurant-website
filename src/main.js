import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        component: () =>
            import ('./App.vue')
    },

    {
        path: '/MenuPrincipal',
        component: () =>
            import ('./pages/MenuPrincipal.vue')
    },


    {
        path: '/hamburguesas',
        component: () =>
            import ('./pages/Hamburguesas.vue')
    },

    {
        path: '/Tragos',
        component: () =>
            import ('./pages/Tragos.vue')
    },

    {
        path: '/Delivery',
        component: () =>
            import ('./pages/Delivery.vue')
    },

    {
        path: '/Contacto',
        component: () =>
            import ('./pages/Contacto.vue')
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
    render: h => h(App)
}).$mount('#app')