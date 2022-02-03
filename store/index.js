import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({

    state: {
        comidas: [],

    },

    mutations: {
        addFoodMutation(state, nuevaComida) {
            state.comidas = [...state.comidas, nuevaComida]

            const valorGuardado = JSON.parse(localStorage.getItem('Carrito'))

            if (valorGuardado && valorGuardado.length > 0) {

                localStorage.setItem('Carrito', JSON.stringify([...valorGuardado, nuevaComida]))
            } else {
                localStorage.setItem('Carrito', JSON.stringify([...state.comidas]))
            }
        },

        SET_COMIDA_STORAGE(state, storedFood) {
            state.comidas = storedFood
        },

        DELETE_COMIDA(state, deleteFood) {
            state.comidas = deleteFood

            const borrado = JSON.parse(localStorage.setItem([...state.comidas, deleteFood]))

            if (borrado && borrado.length > 0) {
                localStorage.setItem(deleteFood)
            }



        }



    },


    actions: {
        addFoodAction(context, nuevaComida) {
            context.commit('addFoodMutation', nuevaComida);
        },
        setComidasFromStorage(context, storedFood) {
            context.commit('SET_COMIDA_STORAGE', storedFood)
        },

        deleteComidaAction(context, deleteFood) {
            context.commit('DELETE_COMIDA', deleteFood)
        }
    },
})