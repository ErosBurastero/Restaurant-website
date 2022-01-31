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
        <div class="font-weight-black display-1">{{ item.Nombre }}</div>
        <div class="font-weight-medium">{{ item.Caracteristicas }}</div>

        <div  v-for="(ingrediente, index) in item.Ingredientes" :key="index">
          {{ ingrediente }}
        </div>

        <div class="font-weight-medium">{{ item.Precio }}</div>

        <div class="font-weight-medium">{{ item.Cantidad }}</div>
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
          Nombre: "CHESSEBURGER GANGS",
          Caracteristicas: "SIN TACC",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO CHEDDAR",
            "CEBOLLA BRUNOISE, PEPINOS AGRIDULCES Y SALSA ROYAL",
          ],
          Precio: "0$",
          valor: 720,
          Cantidad: 0,
          url: "burger.jpg",
        },
        {
          Nombre: "1/4 GANGS",
          Caracteristicas: "SIN TACC",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "DOBLE QUESO CHEDDAR y ADEREZADA CON SALSA ROYAL",
          ],
          Precio: "0$",
          valor: 660,
          Cantidad: 0,
        },
        {
          Nombre: "GIUSSEPE GARIBALDI",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "PROVOLETA, CEBOLLA, MORRON ASADO",
            "RUCULA ADEREZADA CON MAYOPESTO",
          ],
          Precio: "0$",
          valor: 850,
          Cantidad: 0,
        },
        {
          Nombre: "LUCKY LUCIANO",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, AROS DE CEBOLLA",
            "PANCETA CROCANTE, ADEREZADA CON SALSA GANGS",
          ],
          Precio: "0$",
          valor: 760,
          Cantidad: 0,
        },
        {
          Nombre: "MAFIA MEXICANA",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, PANCETA CROCANTE",
            "GUACAMOLE, Y CRUNCH DE NACHOS (opcion picante)",
          ],
          Precio: "0$",
          valor: 930,
          Cantidad: 0,
        },
        {
          Nombre: "BIG BANGS",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, LECHUGA, CEBOLLA",
            "PEPINOS AGRIDULCES, ADEREZADA CON SALSA GANGS",
          ],
          Precio: "0$",
          valor: 720,
          Cantidad: 0,
        },
        {
          Nombre: "CAESAR GANGS",
          Ingredientes: [
            "MEDALLON DE POLLO CRISPY, LECHUGA",
            "QUESO PROVOLONE EN HEBRAS, ADEREZADA CON SALSA CAESAR",
          ],
          Precio: "0$",
          valor: 790,
          Cantidad: 0,
        },
        {
          Nombre: "JHON GOTTY",
          Ingredientes: [
            "POLLO CRISPY, QUESO CHEDDAR",
            "PEPINOS AGRIDULCES, COLESLAW",
            "ADEREZADA CON SALSA GANGS",
          ],
          Precio: "0$",
          valor: 770,
          Cantidad: 0,
        },
        {
          Nombre: "MINI GANGS BURGER",
          Ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO DAMBO O CHEDAR",
          ],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "MINI GANGS POLLO CRISPY",
          Ingredientes: ["NUGGETS DE POLLO CRUJIENTE CON FRITAS"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "BARKER",
          Caracteristicas: "VEGGIE",
          Ingredientes: [
            "MEDALLON DE GARBANZOS, TOMATE",
            "CEBOLLA MORADA, RUCULA ADEREZADA CON ALIOLI VEGANO",
          ],
          Precio: "0$",
          valor: 720,
          Cantidad: 0,
        },
        {
          Nombre: "NOT BURGER",
          Caracteristicas: "VEGGIE",
          Ingredientes: [
            "BURGER NOTCO, QUESO CHEDDAR",
            "TOMATE, CEBOLLA MORADA, RUCULA",
            "ADEREZADA CON ALIOLI VEGANO",
          ],
          Precio: "0$",
          valor: 860,
          Cantidad: 0,
        },
      ],
    };
  },

  methods: {


    incrementQuantity(hamburguesa) {
      const precio = parseInt(hamburguesa.Precio.slice(0, -1))
      
      hamburguesa.Precio = precio + hamburguesa.valor + "$";
      
      hamburguesa.Cantidad++;

    },

    decreaseQuantity(hamburguesa) {
     
      if (hamburguesa.Cantidad === 0) {
        return
      }
      
       const precio = parseInt(hamburguesa.Precio.slice(0, -1))
      hamburguesa.Precio = precio - hamburguesa.valor + "$";


      hamburguesa.Cantidad--;

    },
  },
};
</script>
