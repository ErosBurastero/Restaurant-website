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
        to="/Extras"
        class="ml-2 my-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >EXTRAS</v-btn
      >
    </div>

    <v-card
      max-width="850"
      class="orange darken-2 my-4 pa-4 rounded-br-xl"
      :class="{ 'd-flex': $vuetify.breakpoint.smAndUp }"
      elevation="4"
      v-if="(extra, i) in extras"
      :key="i"
    >

    <div>
      <div >{{ extra.url }}</div>

      <div class="font-weight-medium">{{ extra.nombre }}</div>
      <div class="font-weight-medium">{{ extra.precio }}</div>
      <div class="font-weight-medium">{{ extra.cantidad }}</div>
    </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extras: [
        {
          nombre: "BARBACOA",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "SALSA DE TOMATES CASERA",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "QUESO CREMA DE CIBULETTE",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "SALSA TERIYAKI",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "MOSTAZA HONEY",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "SALSA GANGS",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "SALSA ROYAL",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "MAYOPESTO",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "ALIOLI",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "PESTO DE LA CASA",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },

        {
          nombre: "ALIOLI",
          precio: "50",
          valor: 50,
          cantidad: 1,
          url: "",
        },
      ],
    };
  },
};
</script>

<style></style>
