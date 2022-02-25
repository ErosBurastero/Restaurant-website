<template>
  <div class="d-flex flex-column align-center px-5">
    <div class="text-center my-5">
      <v-btn
        to="/Hamburguesas"
        class="ml-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >HAMBURGUESAS</v-btn
      >
      <v-btn
        to="/Dips"
        class="ml-2 my-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >DIPS</v-btn
      >
    </div>

  <div class="px-5">
      <v-card
      max-width="850"
      class="orange darken-2 my-4 pa-4 rounded-br-xl"
      :class="{'d-flex': $vuetify.breakpoint.smAndUp }"
      elevation="4"
      v-for="(dip, index) in dips"
      :key="index"
    >

      <v-img :src="dip.url" max-height="250" max-width="350" contain></v-img>


      <div class="pl-4">

          <div class="font-weight-medium display-1">{{ dip.nombre }}</div>
          <div class="font-weight-medium">{{ dip.precio }}</div>
          <div class="font-weight-medium">{{ dip.cantidad }}</div>

   <v-btn
            class="rounded-circle"
            color="black"
            dark
            @click="incrementQuantity(dip)"
            >+</v-btn
          >
          <v-btn
            class="rounded-circle"
            color="black"
            dark
            @click="decreaseQuantity(dip)"
            >-</v-btn
          >

          <v-btn
            class="ml-1 my-2"
            rounded
            color="black"
            dark
            @click="addFoodAction(dip)"
            >Agregar al carrito
          </v-btn>

            <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="black"
    >
      <span class="orange--text">{{text}}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="orange darken-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>

          <div>{{ "PRECIO POR UNIDAD: $" + dip.valor }}</div>
      </div>

    </v-card>
    
    </div>
   

  </div>
</template>

<script>
export default {
  data() {
    return {
      dips: [
        {
          nombre: "BARBACOA",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/barbacoa.jpg",
        },

        {
          nombre: "SALSA DE TOMATES CASERA",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/tomates.jpg",
        },

        {
          nombre: "QUESO CREMA DE CIBULETTE",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/ciboulette.jpg",
        },

        {
          nombre: "SALSA TERIYAKI",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/teriyaki.jpg",
        },

        {
          nombre: "MOSTAZA HONEY",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/mostaza.jpg ",
        },

        {
          nombre: "SALSA GANGS",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "SALSA ROYAL",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "MAYOPESTO",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/mayopesto.jpg",
        },

        {
          nombre: "ALIOLI",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/alioli.jpg",
        },

        {
          nombre: "PESTO DE LA CASA",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/pesto.jpg",
        },

        {
          nombre: "ALIOLI VEGANO",
          precio: "50$",
          valor: 50,
          cantidad: 1,
          url: "/extras/alioli.jpg",
        },
      ],

      snackbar: false,
      text: 'Has agregado un producto al carrito',
      timeout: 1500,
    };
  },

  methods: {
    incrementQuantity(dip) {
      const precio = parseInt(dip.precio.slice(0, -1))

      dip.precio = precio + dip.valor + "$";

      dip.cantidad++
    },

    decreaseQuantity(dip) {
      if( dip.cantidad === 1) {
        return;
      }

      const precio = parseInt(dip.precio.slice(0, -1))
      dip.precio = precio - dip.valor + "$";

      dip.cantidad--;
    },

    addFoodAction(nuevaComida) {
      this.snackbar = true
      this.$store.dispatch('addFoodAction', nuevaComida)
    }
  }
};
</script>

<style></style>
