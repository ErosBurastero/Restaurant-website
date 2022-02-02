<template>
  <div class="d-flex flex-column align-center px-5 " >
    <v-card
      
      max-width="850"
      class="orange accent-3 my-4 pa-4 rounded-br-xl" 
      :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
      elevation="4"
      v-for="(item, index) in hamburguesas"
      :key="index"
    >

    <v-img class="mr-" :src="item.url" max-height="200" max-width="200" contain></v-img>

      <div class="pl-4 ">
        <div class="font-weight-black display-1">{{ item.nombre }}</div>
        <div class="font-weight-medium">{{ item.caracteristicas }}</div>

        <div  v-for="(ingrediente, index) in item.ingredientes" :key="index">
          {{ ingrediente }}
        </div>

        <div class="font-weight-medium">{{ item.precio }}</div>

        <div class="font-weight-medium">{{ item.cantidad }}</div>
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

        <v-btn class="ml-1 my-2" rounded color="black" dark @click="addFoodAction(item)">Agregar al carrito
          </v-btn
        >
        
      <div> {{ "PRECIO POR UNIDAD: $" + item.valor }} </div>
        
      </div>

      
      
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburguesas: [
        {
          nombre: "CHESSEBURGER GANGS",
          caracteristicas: "SIN TACC",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO CHEDDAR",
            "CEBOLLA BRUNOISE, PEPINOS AGRIDULCES Y SALSA ROYAL",
          ],
          precio: "0$",
          valor: 720,
          cantidad: 0,
          url: "burger.jpg",
        },
        {
          nombre: "1/4 GANGS",
          caracteristicas: "SIN TACC",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "DOBLE QUESO CHEDDAR y ADEREZADA CON SALSA ROYAL",
          ],
          precio: "0$",
          valor: 660,
          cantidad: 0,
        },
        {
          nombre: "GIUSSEPE GARIBALDI",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "PROVOLETA, CEBOLLA, MORRON ASADO",
            "RUCULA ADEREZADA CON MAYOPESTO",
          ],
          precio: "0$",
          valor: 850,
          cantidad: 0,
        },
        {
          nombre: "LUCKY LUCIANO",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, AROS DE CEBOLLA",
            "PANCETA CROCANTE, ADEREZADA CON SALSA GANGS",
          ],
          precio: "0$",
          valor: 760,
          cantidad: 0,
        },
        {
          nombre: "MAFIA MEXICANA",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, PANCETA CROCANTE",
            "GUACAMOLE, Y CRUNCH DE NACHOS (opcion picante)",
          ],
          precio: "0$",
          valor: 930,
          cantidad: 0,
        },
        {
          nombre: "BIG BANGS",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, LECHUGA, CEBOLLA",
            "PEPINOS AGRIDULCES, ADEREZADA CON SALSA GANGS",
          ],
          precio: "0$",
          valor: 720,
          cantidad: 0,
        },
        {
          nombre: "CAESAR GANGS",
          ingredientes: [
            "MEDALLON DE POLLO CRISPY, LECHUGA",
            "QUESO PROVOLONE EN HEBRAS, ADEREZADA CON SALSA CAESAR",
          ],
          precio: "0$",
          valor: 790,
          cantidad: 0,
        },
        {
          nombre: "JHON GOTTY",
          ingredientes: [
            "POLLO CRISPY, QUESO CHEDDAR",
            "PEPINOS AGRIDULCES, COLESLAW",
            "ADEREZADA CON SALSA GANGS",
          ],
          precio: "0$",
          calor: 770,
          cantidad: 0,
        },

        {
          nombre: "MINI GANGS BURGER",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO DAMBO O CHEDAR",
          ],
          precio: "0$",
          valor: 550,
          cantidad: 0,
        },
        {
          nombre: "MINI GANGS POLLO CRISPY",
          ingredientes: ["NUGGETS DE POLLO CRUJIENTE CON FRITAS"],
          Precio: "0$",
          valor: 550,
          cantidad: 0,
        },
        {
          nombre: "BARKER",
          caracteristicas: "VEGGIE",
          ingredientes: [
            "MEDALLON DE GARBANZOS, TOMATE",
            "CEBOLLA MORADA, RUCULA ADEREZADA CON ALIOLI VEGANO",
          ],
          precio: "0$",
          valor: 720,
          cantidad: 0,
        },
        {
          nombre: "NOT BURGER",
          caracteristicas: "VEGGIE",
          ingredientes: [
            "BURGER NOTCO, QUESO CHEDDAR",
            "TOMATE, CEBOLLA MORADA, RUCULA",
            "ADEREZADA CON ALIOLI VEGANO",
          ],
          precio: "0$",
          valor: 860,
          cantidad: 0,
        },
      ],
    };
  },

  methods: {


    incrementQuantity(hamburguesa) {
      const precio = parseInt(hamburguesa.precio.slice(0, -1))
      
      hamburguesa.precio = precio + hamburguesa.valor + "$";
      
      hamburguesa.cantidad++;

    },

    decreaseQuantity(hamburguesa) {
     
      if (hamburguesa.cantidad === 0) {
        return
      }
      
       const precio = parseInt(hamburguesa.precio.slice(0, -1))
      hamburguesa.precio = precio - hamburguesa.valor + "$";


      hamburguesa.cantidad--;

    },

      addFoodAction(nuevaComida){
      this.$store.dispatch('addFoodAction', nuevaComida)
    },
  },
};
</script>
