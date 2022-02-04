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

            if (valorGuardado && valorGuardado.length > 1) {

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

            const valor = JSON.parse(localStorage.getItem('Carrito'))

            if (valor && valor.length < 1) {
                localStorage.removeItem('Carrito', JSON.stringify([...valor, deleteFood]))
            } else {
                localStorage.removeItem('Carrito', JSON.stringify([...state.comidas]))
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