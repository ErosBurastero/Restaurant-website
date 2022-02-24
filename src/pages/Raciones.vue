<template>
  <div  class="d-flex flex-column align-center px-5">
      <div class="text-center my-5">
    <v-btn  to="/Comidas" rounded  color="orange darken-2 black--text"  dark >COMIDAS</v-btn>
    <v-btn  to="/Raciones" class="ml-2"  rounded  color="orange darken-2 black--text"  dark >RACIONES</v-btn>

  </div>

  <div class="px-5 ">
      <v-card  max-width="850"
      class="orange darken-2 my-4 pa-4 rounded-br-xl" 
      :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
      elevation="4"
      v-for="(racion, index) in raciones"
      :key="index"
      >

      <v-img :src="racion.url" max-height="300" max-width="300" contain></v-img>


    <div class="pa-4">
     <div class="font-weight-black display-1" > {{ racion.nombre }} </div>
     <div> {{ racion.ingredientes }} </div>

         <div class="font-weight-medium"> {{ racion.precio }}</div>
          <div class="font-weight-medium"> {{ racion.cantidad }}</div>

        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="incrementQuantity(racion)"
          >+</v-btn
        >
        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="decreaseQuantity(racion)"
          >-</v-btn
        >

         <v-btn class="ml-1 my-2" rounded color="black" dark @click="addFoodAction(racion)">Agregar al carrito
          </v-btn
        >

        <div> {{ "PRECIO POR UNIDAD:" + racion.valor}} </div>   
      
    </div>

      </v-card>

  </div>









  </div>
</template>

<script>
export default {
    data () {
        return {
            raciones: [
                {
                    nombre: "AMERICAN GANGSTER",
                    ingredientes: "PAPAS FRITAS, SALSA CHEDDAR DE LA CASA Y PANCETA",
                    precio: "550$",
                    valor: 550,
                    cantidad: 1,
                    url: "/comidas/americanPapas.jpg",
                },

                {
                    nombre: "PAPAS 4 MAFIAS",
                    ingredientes: "PAPAS FRITAS, BONDIOLA BRASEADA BA;ADAS EN SALSA CHEDDAR",
                    precio: "650$",
                    valor: 650,
                    cantidad: 1,
                    url: "/comidas/4mafias.jpg",
                },

                {
                    nombre: "PAPAS GANGSTER",
                    ingredientes: "PAPAS FRITAS, CHESSEBURGER, CEBOLLA CARAMELIZADA Y QUESO CREMA DE CIBOULETTE",
                    precio: "700$",
                    valor: 700,
                    cantidad: 1,
                    url: "/comidas/papasGangster.jpg",
                },

                {
                    nombre: "PAPAS FRITAS",
                    precio: "500$",
                    valor: 500,
                    cantidad: 1,
                    url: "",
                },

                {
                    nombre: "BATATAS FRITAS",
                    ingredientes: "BATATAS FRITAS CON DIPS DE MOSTAZA DULCE",
                    precio: "500$",
                    valor: 500,
                    cantidad: 1,
                    url: "/comidas/batatas.jpg",
                },

                {
                    nombre: "NACHOS CON CHEDDAR",
                    ingredientes: "NACHOS ADEREZADOS CON SALSA CHEDDAR DE LA CASA",
                    precio: "530$",
                    valor: 530,
                    cantidad: 1,
                    url: "/comidas/nachos.jpg",
                },

                 {
                    nombre: "NACHOS CON GUACAMOLE",
                    ingredientes: "NACHOS ADEREZADOS CON GUACAMOLE CASERO",
                    precio: "530$",
                    valor: 530,
                    cantidad: 1,
                    url: "/comidas/nachosGuacamole.jpg",
                },

                {
                    nombre: "AROS DE CEBOLLA",
                    ingredientes: "AROS DE CEBOLLA REBOZADOS CON DIPS DE BARBACOA",
                    precio: "500$",
                    valor: 500,
                    cantidad: 1,
                    url: "/comidas/aros.jpg",
                },

                {
                    nombre: "POLLO CRISPY",
                    ingredientes: "TROZOS DE PECHUGA DE POLLO EMPANADOS EN CEREALES CON DIPS DE MOSTAZA DULCE",
                    precio: "650$",
                    valor: 650,
                    cantidad: 1,
                    url: "/comidas/polloCrispy.jpg",
                },

                {
                    nombre: "MUZZA MILA",
                    ingredientes: "QUESO MOZZARELLA REBOZADO CON DIPS DE SALSA DE TOMATE FRESCA",
                    precio: "600$",
                    valor: 600,
                    cantidad: 1,
                    url: "/comidas/muzza.jpg",
                },
            ]
        }
    },

    methods: {
        incrementQuantity(racion) {
            const duplicar = parseInt(racion.precio.slice(0, -1))
            racion.precio = duplicar + racion.valor + "$";
            racion.cantidad++;
        },


        decreaseQuantity(racion) {
            if (racion.cantidad === 1) {
                return
            }
            const duplicar = parseInt(racion.precio.slice(0, -1))
            racion.precio = duplicar - racion.valor + "$";

            racion.cantidad--;
        },

           addFoodAction(nuevaComida){
      this.$store.dispatch('addFoodAction', nuevaComida)
    },
    }

        
}
</script>

<style>

</style>