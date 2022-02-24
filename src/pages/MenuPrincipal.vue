<template>
  <div>
    <v-carousel
      class="my-10 d-flex flex-column align-center"
      hide-delimiters
      v-if="$vuetify.breakpoint.smAndUp"


    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img
          :src="item.src"
        
          max-height="500"
          max-width="1000"
          width="1000"
          height="500"
          contain
        ></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-card
      v-for="(texto, index) in text"
      :key="index"
      min-width="350"
      class="grey darken-4 pa-4 my-5 rounded-br-xl white--text"
      :class="{'d-flex': $vuetify.breakpoint.mdAndUp}"
      elevation="5"

       
    >
      <v-img max-height="1000" max-width="1050" contain :src="texto.url"></v-img>
      <div class="pa-12 display-1 my-1">
        
        <div class="my-2 font-italic display-1"
        >{{ texto.frase }}</div>

        <div class="my-2 font-italic d-flex justify-center my-8">
          {{ texto.frase1 }}
        </div>
        <div class="my-2 font-italic d-flex justify-center">
          {{ texto.frase2 }}
        </div>
        <div class="my-2 font-italic d-flex justify-center">
          {{ texto.frase3 }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "./slider/paraSlider.jpg",
        },
        {
          src: "./slider/barra.jpg",
        },
        {
          src: "./slider/sillon.jpg",
        },
        {
          src: "./slider/fotoPrincipal.jpeg",
        },
      ],

      text: [
        {
          frase: "DISFRUTA DE NUESTRO HAPPY HOUR CON LAS MEJORES CERVEZAS ",
          frase1: "HORARIOS DE LUNES A JUEVES",
          frase2: "18:00hs hasta las 20:00hs",
          frase3: "",

          url: "./tragos/happy.jpg",
        },
      ],
    };
  },

 
};
</script>

<style scoped></style>
