<template>
  <v-app >
    <v-app-bar :class="{'d-flex justify-center': $vuetify.breakpoint.smAndUp}"
      app
      color="black"
      dark
    >
      <NavegationMenu />

     
  
    </v-app-bar>

 
    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
    
       <Footer />
  </v-app>


</template>

<script>

import NavegationMenu from './components/modules/NavegationMenu.vue';
import Footer from './components/modules/Footer.vue';


export default {
  name: 'App',

  components: {
  
    NavegationMenu ,
    Footer,
    
  
    
    
  },

  data: () => ({
    //
  }),


};
</script>




