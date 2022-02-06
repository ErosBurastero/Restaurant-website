<template>
<div  class="d-flex flex-column align-center px-5 grey ">

 <div class="text-center my-5">
    <v-btn  to="/Comidas" rounded  color="orange accent-3 black--text"  dark >COMIDAS</v-btn>
    <v-btn  to="/Raciones" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >RACIONES</v-btn>


  </div>

  

     <div class="px-5 ">
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

        <v-btn class="ml-1 my-2" rounded color="black" dark @click="addFoodAction(item)" >Agregar al carrito
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
          precio: "1800$",
          valor: 1800,
          cantidad: 1,
          url: "",

        },

        {
          nombre: "RABAS",
          ingredientes: ["TUBO DE CALAMAR TIERNIZADO CON DIPS DE ALIOLI",],
          precio: "1500$",
          valor: 1500,
          cantidad: 1,
          url: "",

        },

        {
          nombre: "RIBBS BBQ",
          ingredientes: ["COSTILLAR DE CERDO BRASEADO 4HS CON SALSA BBQ", "ACOMPANADO DE BATATAS FRITAS Y ENSALADA COLESAW"],
          precio: "950$",
          valor: 950,
          cantidad: 1,
          url: "",

        },

        {
          nombre: "BRUSCHETTA VEGGIE",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, HUEVO REVUELTO","GUACAMOLE Y PORTOBELLOS SALTEADOS(2U)"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "",

        },

        {
          nombre: "BRUSCHETTA IBERICA",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, RUCULA, TOMATES SECOS","JAMON IBERICO Y MAYOPESTO DE LA CASA(2U)"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "",

        },

        {
          nombre: "BURRITOS GRILL",
          ingredientes: ["POLLO A LA PLANCHA O CRISPY, CEBOLLA, MORRON ASADO", "LECHUGA Y QUESO CREMA DE CIBOULETTE"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "PICADA MAFIA CALABRESA",
          ingredientes: ["MUZZA MILA, AROS DE CEBOLLA, RABAS, POLLO CRISPY, PAPAS FRITAS", "BATATAS FRITAS ACOMPA;ADOS DE DIPS DE CHEDDAR,", "BARBACOA Y MOSTAZA DULCE  "], 
          precio: "1500$",
          valor: 1500,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "PICADA CAMORRA",
          ingredientes: ["QUESO FONTINA, PATEGRAS, QUESO AHUMADO, ASADITO ARGENTINO", "JAMON IBERICO, SALAME, ACEITUNAS Y TOMATES SECOS EN CONSERVA"],
          precio: "1800$",
          valor: 1800,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "SANDWICH SICILIANO",
          ingredientes: ["BONDIOLA BRASEADA CON COLESAW", "ADEREZADA CON SALSA GANGS"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "SANDWICH NAPOLES",
          ingredientes: ["ASADITO ARGENTINO EN FINAS FETAS, QUESO DAMBO", "TOMATES SECOS, RUCULA Y MAYOPESTO"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "SANDWICH PALERMO",
          ingredientes: ["POLLO A LA PLANCHA, QUESO CHEDDAR O DAMBO, TOMATE,", "LECHUGA, ADEREZADO CON SALSA ALIOLI DE LA CASA"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "",

        },

         {
          nombre: "SANDWICH VEGGIE",
          ingredientes: ["BERENJENA A LA PLANCHA, TOMATES SECOS, QUESO PARMESANO", "EN HEBRAS, RUCULA, ADEREZADO CON MAYOVEGAN"],
          precio: "730$", 
          valor: 730,
          cantidad: 1,
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
      if (comida.cantidad === 1) {
        return
    }
    const precio = parseInt(comida.precio.slice(0, -1))
    comida.precio = precio - comida.valor + "$";
      comida.cantidad--;
    },

       addFoodAction(nuevaComida){
      this.$store.dispatch('addFoodAction', nuevaComida)
    },
  }
    

}
</script>

<style>

</style>