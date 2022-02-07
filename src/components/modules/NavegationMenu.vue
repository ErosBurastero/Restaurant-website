<template>
  <v-card  v-if="ocultarTab < 600"  >
    <v-tabs
      v-model="tab"
      background-color="orange darken-2"
      centered
      dark
      icons-and-text
     
     
    >
      <v-tabs-slider></v-tabs-slider>
        <v-tab class="black--text" to="/">
        Inicio
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab class="black--text" to="/Hamburguesas">
        Hamburguesas
        <v-icon>mdi-hamburger</v-icon>
      </v-tab>

       <v-tab class="black--text" to="/Comidas">
        Comidas
        <v-icon>mdi-food-turkey</v-icon>
      </v-tab>

      <v-tab class="black--text" to="/Bebidas">
        Bebidas
        <v-icon>mdi-cup</v-icon>
      </v-tab>

       <v-tab class="black--text" to="/Carrito">
        Carrito
        <v-icon>mdi-cart-variant</v-icon>
      </v-tab>

    </v-tabs>

  </v-card>
</template>

<script>
  export default {
      
    data () {
      return {
        tab: null,
        ocultarTab: false,
      

      }
    },
  }
</script>