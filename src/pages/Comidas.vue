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
      v-for="(item, index) in comidas"
      :key="index"
      >
          <v-img class="" :src="item.url" max-height="300" max-width="300" contain></v-img>

      <div class="pl-4">

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
          url: "/comidas/langostinos.jpg",

        },

        {
          nombre: "RABAS",
          ingredientes: ["TUBO DE CALAMAR TIERNIZADO CON DIPS DE ALIOLI",],
          precio: "1500$",
          valor: 1500,
          cantidad: 1,
          url: "/comidas/rabas.jpg",

        },

        {
          nombre: "RIBBS BBQ",
          ingredientes: ["COSTILLAR DE CERDO BRASEADO 4HS CON SALSA BBQ", "ACOMPANADO DE BATATAS FRITAS Y ENSALADA COLESAW"],
          precio: "950$",
          valor: 950,
          cantidad: 1,
          url: "/comidas/ribbs.jpg",

        },

        {
          nombre: "BRUSCHETTA VEGGIE",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, HUEVO REVUELTO","GUACAMOLE Y PORTOBELLOS SALTEADOS(2U)"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "/comidas/bruVeggie.jpg",

        },

        {
          nombre: "BRUSCHETTA IBERICA",
          ingredientes: ["PAN DE CAMPO TOSTADO EN OLIVA, RUCULA, TOMATES SECOS","JAMON IBERICO Y MAYOPESTO DE LA CASA(2U)"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "/comidas/iberica.jpg",

        },

        {
          nombre: "BURRITOS GRILL",
          ingredientes: ["POLLO A LA PLANCHA O CRISPY, CEBOLLA, MORRON ASADO", "LECHUGA Y QUESO CREMA DE CIBOULETTE"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "/comidas/burritos.jpg",

        },

         {
          nombre: "PICADA MAFIA CALABRESA",
          ingredientes: ["MUZZA MILA, AROS DE CEBOLLA, RABAS, POLLO CRISPY, PAPAS FRITAS", "BATATAS FRITAS ACOMPA;ADOS DE DIPS DE CHEDDAR,", "BARBACOA Y MOSTAZA DULCE  "], 
          precio: "1500$",
          valor: 1500,
          cantidad: 1,
          url: "/comidas/calabresa.jpg",

        },

         {
          nombre: "PICADA CAMORRA",
          ingredientes: ["QUESO FONTINA, PATEGRAS, QUESO AHUMADO, ASADITO ARGENTINO", "JAMON IBERICO, SALAME, ACEITUNAS Y TOMATES SECOS EN CONSERVA"],
          precio: "1800$",
          valor: 1800,
          cantidad: 1,
          url: "/comidas/camorra.jpg",

        },

         {
          nombre: "SANDWICH SICILIANO",
          ingredientes: ["BONDIOLA BRASEADA CON COLESAW", "ADEREZADA CON SALSA GANGS"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "/comidas/sicilia.jpg",

        },

         {
          nombre: "SANDWICH NAPOLES",
          ingredientes: ["ASADITO ARGENTINO EN FINAS FETAS, QUESO DAMBO", "TOMATES SECOS, RUCULA Y MAYOPESTO"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "/comidas/napoles.jpg",

        },

         {
          nombre: "SANDWICH PALERMO",
          ingredientes: ["POLLO A LA PLANCHA, QUESO CHEDDAR O DAMBO, TOMATE,", "LECHUGA, ADEREZADO CON SALSA ALIOLI DE LA CASA"],
          precio: "730$",
          valor: 730,
          cantidad: 1,
          url: "/comidas/palermo.jpg",

        },

         {
          nombre: "SANDWICH VEGGIE",
          ingredientes: ["BERENJENA A LA PLANCHA, TOMATES SECOS, QUESO PARMESANO", "EN HEBRAS, RUCULA, ADEREZADO CON MAYOVEGAN"],
          precio: "730$", 
          valor: 730,
          cantidad: 1,
          url: "/comidas/veggie.jpg",

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