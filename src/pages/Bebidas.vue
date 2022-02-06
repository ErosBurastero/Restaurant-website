<template>
<div  class="d-flex flex-column align-center px-5 grey ">
    <div class="text-center my-5">
          <v-btn  to="/Bebidas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >BEBIDAS SIN ALCOHOL</v-btn>
          <v-btn  to="/Tragos" class="ml-2 my-2"  rounded  color="orange accent-3 black--text"  dark >TRAGOS</v-btn>
          <v-btn  to="/Cervezas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >CERVEZAS</v-btn>
          <v-btn  to="/Whiskys" class="ml-2 my-2"  rounded  color="orange accent-3 black--text"  dark >WHISKYS Y ESPUMANTES</v-btn>


  </div>

    <div class="px-5">
      <v-card  max-width="850"
      class="orange accent-3 my-4 pa-4 rounded-br-xl" 
      :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
      elevation="4"
       v-for="(bebida, index) in bebidas" :key="index" >

      <v-img class="mr-4" :src="bebida.url" max-height="200" max-width="200" contain></v-img>



        <div>

            
         <div class="font-weight-black display-1"> {{ bebida.nombre }} </div>

         <div> {{ bebida.ingredientes }} </div>

         <div class="font-weight-medium" > {{ bebida.precio }} </div>

         <div class="font-weight-medium"> {{ bebida.cantidad }} </div>

          <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="incrementQuantity(bebida)"
          >+</v-btn
        >

        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="decreaseQuantity(bebida)"
          >-</v-btn
        >

         <v-btn class="ml-1 my-2" rounded color="black" dark @click="addFoodAction(bebida)" >Agregar al carrito
          </v-btn
        >

        <div> {{ "PRECIO POR UNIDAD:" + bebida.valor}} </div>


        </div>

    </v-card>
    </div>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            bebidas: [
                {
                    nombre: "AGUA NATURAL",
                    precio: "150$",
                    cantidad: 1,
                    valor: 150,
                    url: "./bebidas/agua.jpg",
                    

                },

                 {
                    nombre: "AGUA CON GAS",
                    precio: "150$",
                    cantidad: 1,
                    valor: 150,
                    url: "./bebidas/aguaGas.jpg",
                },

                 {
                    nombre: "GASEOSA LINEA PEPSI",
                    precio: "180$",
                    cantidad: 1,
                    valor: 180,
                    url: "./bebidas/pepsi.jpg",
                },

                 {
                    nombre: "LATA LINEA PEPSI",
                    precio: "150$",
                    cantidad: 1,
                    valor: 150,
                    url: "./bebidas/pepsiLata.jpg",
                },

                 {
                    nombre: "AGUAS SABORIZADAS",
                    precio: "160$",
                    cantidad: 1,
                    valor: 160,
                    url: "./bebidas/saborizada.jpg",

                },

                 {
                    nombre: "EXPRIMIDO",
                    ingredientes: "LIMON, MENTA Y SYRUP DE JENGIBRE",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/exprimido.jpg",

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, MANGO Y AZUCAR",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/naranja.jpg",

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, PI;A Y AZUCAR",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/anana.jpg",

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "LIMON, MARACUYA Y AZUCAR",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/maracuya.jpg",

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, DURAZNO Y AZUCAR",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/naranja.jpg",

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "FRUTILLA, LIMON Y AZUCAR",
                    precio: "450$",
                    cantidad: 1,
                    valor: 450,
                    url: "./bebidas/frutilla.jpg",

                },
            ]

        }
    },

    methods: {
        incrementQuantity(bebida) {
            const duplicar = parseInt(bebida.precio.slice(0, -1))
            bebida.precio = duplicar + bebida.valor + "$",
            bebida.cantidad++;
        },

        decreaseQuantity(bebida) {
            if (bebida.cantidad === 1) {
                return
            }
            const duplicar = parseInt(bebida.precio.slice(0, -1))
            bebida.precio = duplicar - bebida.valor + "$",
            
            bebida.cantidad--;
        },

           addFoodAction(nuevaComida){
      this.$store.dispatch('addFoodAction', nuevaComida)
    },

 
    }

}
</script>

<style>

</style>