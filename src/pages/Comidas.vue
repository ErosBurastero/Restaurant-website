<template>
<div>

 <div class="text-center my-5">
    <v-btn  href="/Comidas" rounded  color="orange accent-3 black--text"  dark >COMIDAS</v-btn>
    <v-btn  href="/Raciones" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >RACIONES</v-btn>


  </div>

  

     <div class="px-5 black">
        <v-card  max-width="850"
      class="orange accent-3 my-4 pa-4 rounded-br-xl" 
      :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
      elevation="4"
      v-for="(item, index) in comidas"
      :key="index"
      >
    

      <div>

          <div class="font-weight-black display-1"> {{ item.nombre }} </div>

          <div  v-for="(ingrediente, index) in item.ingredientes" :key="index">
            <div>{{ ingrediente }} </div> 
          </div>

          <div class="font-weight-medium"> {{ item.precio }}</div>
          <div class="font-weight-medium"> {{ item.cantidad }}</div>

        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="incrementQuantity(item)"
          >+</v-btn
        >
        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="decreaseQuantity(item)"
          >-</v-btn
        >

        <v-btn class="ml-1 my-2" rounded color="black" dark
          >Agregar al carrito
          </v-btn
        >

        <div> {{ "PRECIO POR UNIDAD:" + item.valor}} </div>   
      
      </div>
        </v-card>
     </div>


</div>

</template>

<script>
export default {

  data () {
    return {
      comidas: [
        {
          nombre: "LANGOSTINOS",
          ingredientes: ["EMPANADOS EN PANKO CON DIPS DE SALSA TERIYAKI",],
          precio: "0$",
          valor: 1800,
          cantidad: 0,
          url: "",

        },

        {
          nombre: "RABAS",
          ingredientes: ["TUBO DE CALAMAR TIERNIZADO CON DIPS DE ALIOLI",],
          precio: "0$",
          valor: 1500,
          cantidad: 0,
          url: "",

        },

        {
          nombre: "RIBBS BBQ",
          ingredientes: ["COSTILLAR DE CERDO BRASEADO 4HS CON SALSA BBQ", "ACOMPANADO DE BATATAS FRITAS Y ENSALADA COLESAW"],
          precio: "0$",
          valor: 950,
          cantidad: 0,
          url: "",

        },

        {
          nombre: "BRUSCHETTA VEGGIE",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, HUEVO REVUELTO","GUACAMOLE Y PORTOBELLOS SALTEADOS(2U)"],
          precio: "0$",
          valor: 600,
          cantidad: 0,
          url: "",

        },

        {
          nombre: "BRUSCHETTA IBERICA",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, RUCULA, TOMATES SECOS","JAMON IBERICO Y MAYOPESTO DE LA CASA(2U)"],
          precio: "0$",
          valor: 600,
          cantidad: 0,
          url: "",

        },

        {
          nombre: "BURRITOS GRILL",
          ingredientes: ["POLLO A LA PLANCHA O CRISPY, CEBOLLA, MORRON ASADO", "LECHUGA Y QUESO CREMA DE CIBOULETTE"],
          precio: "0$",
          valor: 600,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "PICADA MAFIA CALABRESA",
          ingredientes: ["MUZZA MILA, AROS DE CEBOLLA, RABAS, POLLO CRISPY, PAPAS FRITAS", "BATATAS FRITAS ACOMPA;ADOS DE DIPS DE CHEDDAR,", "BARBACOA Y MOSTAZA DULCE  "], 
          precio: "0$",
          valor: 1500,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "PICADA CAMORRA",
          ingredientes: ["QUESO FONTINA, PATEGRAS, QUESO AHUMADO, ASADITO ARGENTINO", "JAMON IBERICO, SALAME, ACEITUNAS Y TOMATES SECOS EN CONSERVA"],
          precio: "0$",
          valor: 1800,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "SANDWICH SICILIANO",
          ingredientes: ["BONDIOLA BRASEADA CON COLESAW", "ADEREZADA CON SALSA GANGS"],
          precio: "0$",
          valor: 730,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "SANDWICH NAPOLES",
          ingredientes: ["ASADITO ARGENTINO EN FINAS FETAS, QUESO DAMBO", "TOMATES SECOS, RUCULA Y MAYOPESTO"],
          precio: "0$",
          valor: 730,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "SANDWICH PALERMO",
          ingredientes: ["POLLO A LA PLANCHA, QUESO CHEDDAR O DAMBO, TOMATE,", "LECHUGA, ADEREZADO CON SALSA ALIOLI DE LA CASA"],
          precio: "0$",
          valor: 730,
          cantidad: 0,
          url: "",

        },

         {
          nombre: "SANDWICH VEGGIE",
          ingredientes: ["BERENJENA A LA PLANCHA, TOMATES SECOS, QUESO PARMESANO", "EN HEBRAS, RUCULA, ADEREZADO CON MAYOVEGAN"],
          precio: "0$",
          valor: 730,
          cantidad: 0,
          url: "",

        },
      ]
    }
  },

  methods: {
    incrementQuantity(comida) {
      const duplicar = parseInt(comida.precio.slice(0, -1))
      comida.precio = duplicar + comida.valor + "$";
      comida.cantidad++;
    },

    
    decreaseQuantity(comida) {
      if (comida.cantidad === 0) {
        return
    }
    const precio = parseInt(comida.precio.slice(0, -1))
    comida.precio = precio - comida.valor + "$";
      comida.cantidad--;
    }
  }
    

}
</script>

<style>

</style>