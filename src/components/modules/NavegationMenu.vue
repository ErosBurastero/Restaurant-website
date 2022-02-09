<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="orange darken-2"
      centered
      dark
      icons-and-text
      v-if="$vuetify.breakpoint.smAndUp"
    
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

     <v-app-bar
      color="orange darken-2"
      dark
      v-else

    >
      <v-app-bar-nav-icon class="black--text" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">THE GANGSTER HAMBURG</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="my-14 black"
      height="230"
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon color="orange darken-2">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="orange--text" >INICIO</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Hamburguesas">
            <v-list-item-icon>
              <v-icon color="orange darken-2">mdi-hamburger</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="orange--text" >HAMBURGUESAS</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Comidas">
            <v-list-item-icon>
              <v-icon color="orange darken-2">mdi-food-turkey</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="orange--text">COMIDAS</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item to="/Bebidas">
            <v-list-item-icon>
              <v-icon color="orange darken-2">mdi-cup</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="orange--text">BEBIDAS</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Carrito">
            <v-list-item-icon>
              <v-icon color="orange darken-2">mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="orange--text">CARRITO</v-list-item-title>
          </v-list-item>
      </v-list>

    </v-navigation-drawer>

    
    

  </v-card>


</template>

<script>
  export default {
      
    data: () =>  { ({
      
    })
      return {
         tab: null,
         drawer: false,
         group: null,
      }
    },
  }
</script>