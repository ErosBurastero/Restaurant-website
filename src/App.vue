<template>
  <v-app>
    <v-app-bar :class="{'d-flex justify-center': $vuetify.breakpoint.smAndUp}"
      app
      color="black"
      dark
    >
      <NavegationMenu />
  

  
    </v-app-bar>


    <v-main>
      <router-view />
    </v-main>
  </v-app>

  
</template>

<script>

import NavegationMenu from './components/modules/NavegationMenu.vue';


export default {
  name: 'App',

  components: {
  
    NavegationMenu ,
    
  },

  data: () => ({
    //
  }),


};
</script>




