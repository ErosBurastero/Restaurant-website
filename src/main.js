import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from 'vue-browser-geolocation';


Vue.use(VueGeolocation);


Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAYRc1XeW-jqolPGyKGUVNtH9IRG9bvA74",

    },
});


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