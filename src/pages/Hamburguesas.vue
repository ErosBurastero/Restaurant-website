<template>
  <div class="px-5">
    <v-card max-height="250" max-width="1000" class="orange accent-3 my-4 pa-4 " elevation="4"  v-for="item in hamburguesas" :key="item">
      
      <div> {{ item.Imagen }} </div>
      <div class="font-weight-black">{{ item.Nombre }}</div>
      <div class="font-weight-medium" >{{ item.Caracteristicas }}</div>

      <div class="font-italic" v-for="ingrediente in item.Ingredientes" :key="ingrediente">
        {{ ingrediente }}
      </div>
      
      <div class="font-weight-medium" >{{ item.Precio }}</div>
      <div class="font-weight-medium" >{{ item.Cantidad }}</div>
      <button @click="incrementQuantity(item)">+</button>
      <button @click="decreaseQuantity(item)">-</button>
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
          Ingredientes: ["DOBLE MEDALLON DE CARNE (90GR)", "QUESO CHEDDAR", "CEBOLLA BRUNOISE", "PEPINOS AGRIDULCES Y SALSA ROYAL"],
          Precio: "720$",
          Cantidad: 0,
        },
        {
          Nombre: "1/4 GANGS",
          Caracteristicas: "SIN TACC",
          Ingredientes:  ["DOBLE MEDALLON DE CARNE (90GR)", "DOBLE QUESO CHEDDAR y ADEREZADA CON SALSA ROYAL"],
          Precio: "660$",
          Cantidad: 0,
        },
        {
          Nombre: "GIUSSEPE GARIBALDI",
          Ingredientes: ["DOBLE MEDALLON DE CARNE (90GR)", "PROVOLETA, CEBOLLA, MORRON ASADO", "RUCULA ADEREZADA CON MAYOPESTO"],
          Precio: "850$",
          Cantidad: 0,
        },
        {
          Nombre: "LUCKY LUCIANO",
          Ingredientes: ["DOBLE MEDALLON DE CARNE (90GR)", "QUESO CHEDDAR, AROS DE CEBOLLA", "PANCETA CROCANTE, ADEREZADA CON SALSA GANGS"],
          Precio: "760$",
          Cantidad: 0,
        },
        {
          Nombre: "MAFIA MEXICANA",
          Ingredientes:  ["DOBLE MEDALLON DE CARNE (90GR)", "QUESO CHEDDAR, PANCETA CROCANTE", "GUACAMOLE, Y CRUNCH DE NACHOS (opcion picante)"],
          Precio: "930$",
          Cantidad: 0,
        },
        {
          Nombre: "BIG BANGS",
          Ingredientes: ["DOBLE MEDALLON DE CARNE (90GR)", "QUESO CHEDDAR, LECHUGA, CEBOLLA", "PEPINOS AGRIDULCES, ADEREZADA CON SALSA GANGS"],
          Precio: "720$",
          Cantidad: 0,
        },
        {
          Nombre: "CAESAR GANGS",
          Ingredientes: ["MEDALLON DE POLLO CRISPY, LECHUGA", "QUESO PROVOLONE EN HEBRAS, ADEREZADA CON SALSA CAESAR"],
          Precio: "790$",
          Cantidad: 0,
        },
        {
          Nombre: "JHON GOTTY",
          Ingredientes: ["POLLO CRISPY, QUESO CHEDDAR", "PEPINOS AGRIDULCES, COLESLAW", "ADEREZADA CON SALSA GANGS"],
          Precio: "770$",
          Cantidad: 0,
        },
        {
          Nombre: "MINI GANGS BURGER",
          Ingredientes: ["DOBLE MEDALLON DE CARNE (90GR), QUESO DAMBO O CHEDAR"],
          Precio: "550$",
          Cantidad: 0,
        },
        {
          Nombre: "MINI GANGS POLLO CRISPY",
          Ingredientes: ["NUGGETS DE POLLO CRUJIENTE CON FRITAS"],
          Precio: "550$",
          Cantidad: 0,
        },
        {
          Nombre: "BARKER",
          Caracteristicas: "VEGGIE",
          Ingredientes: ["MEDALLON DE GARBANZOS, TOMATE", "CEBOLLA MORADA, RUCULA ADEREZADA CON ALIOLI VEGANO"],
          Precio: "720$",
          Cantidad: 0,
        },
        {
          Nombre: "NOT BURGER",
          Caracteristicas: "VEGGIE",
          Ingredientes: ["BURGER NOTCO, QUESO CHEDDAR", "TOMATE, CEBOLLA MORADA, RUCULA","ADEREZADA CON ALIOLI VEGANO"],
          Precio: "860$",
          Cantidad: 0,
        },
      ],
    };
  },

  methods: {
    incrementQuantity(hamburguesa) {
      hamburguesa.Cantidad++;
     
    },

    decreaseQuantity(hamburguesa) {
      hamburguesa.Cantidad--;
    }
  },

  
};
</script>
