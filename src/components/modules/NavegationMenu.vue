<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="orange accent-3"
      centered
      dark
      icons-and-text
      
      
    >
      <v-tabs-slider></v-tabs-slider>
        <v-tab class="black--text" href="/App">
        Inicio
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/Hamburguesas">
        Hamburguesas
        <v-icon>mdi-food</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/Tragos">
        Tragos
        <v-icon>mdi-glass-cocktail</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/Delivery">
        Delivery
        <v-icon>mdi-moped-outline</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/Delivery">
        Contacto
        <v-icon>mdi-account</v-icon>
      </v-tab>
    </v-tabs>

  </v-card>
</template>

<script>
  export default {
      
    data () {
      return {
        tab: null,
      }
    },
  }
</script>