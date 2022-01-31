<template>
<div>
    <div class="text-center my-5">
          <v-btn  href="/Tragos" class="ml-2 my-2"  rounded  color="orange accent-3 black--text"  dark >TRAGOS</v-btn>
          <v-btn  href="/Bebidas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >BEBIDAS SIN ALCOHOL</v-btn>
          <v-btn  href="/Cervezas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >CERVEZAS</v-btn>
          <v-btn  href="/Whiskys" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >WHISKYS Y ESPUMANTES</v-btn>


  </div>

    <div class="px-5 black">
      <v-card  max-width="850"
      class="orange accent-3 my-4 pa-4 rounded-br-xl" 
      :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
      elevation="4"
       v-for="(bebida, index) in bebidas" :key="index" >

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

         <v-btn class="ml-1 my-2" rounded color="black" dark
          >Agregar al carrito
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
                    precio: "0$",
                    cantidad: 0,
                    valor: 150,
                    

                },

                 {
                    nombre: "AGUA CON GAS",
                    precio: "0$",
                    cantidad: 0,
                    valor: 150,

                },

                 {
                    nombre: "GASEOSA LINEA PEPSI",
                    precio: "0$",
                    cantidad: 0,
                    valor: 180,

                },

                 {
                    nombre: "LATA LINEA PEPSI",
                    precio: "0$",
                    cantidad: 0,
                    valor: 150,

                },

                 {
                    nombre: "AGUAS SABORIZADAS",
                    precio: "0$",
                    cantidad: 0,
                    valor: 160,

                },

                 {
                    nombre: "EXPRIMIDO",
                    ingredientes: "LIMON, MENTA Y SYRUP DE JENGIBRE",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, MANGO Y AZUCAR",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, PI;A Y AZUCAR",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "LIMON, MARACUYA Y AZUCAR",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "NARANJA, DURAZNO Y AZUCAR",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

                },

                {
                    nombre: "EXPRIMIDO",
                    ingredientes: "FRUTILLA, LIMON Y AZUCAR",
                    precio: "0$",
                    cantidad: 0,
                    valor: 450,

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
            if (bebida.cantidad === 0) {
                return
            }
            const duplicar = parseInt(bebida.precio.slice(0, -1))
            bebida.precio = duplicar - bebida.valor + "$",
            
            bebida.cantidad--;
        },

 
    }

}
</script>

<style>

</style>