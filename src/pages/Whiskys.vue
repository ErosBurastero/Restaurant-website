<template>
  <div class="d-flex flex-column align-center px-5">
    
    <div class="text-center my-5">
      <v-btn
        to="/Bebidas"
        class="ml-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >BEBIDAS SIN ALCOHOL</v-btn
      >
      <v-btn
        to="/Tragos"
        class="ml-2 my-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >TRAGOS</v-btn
      >
      <v-btn
        to="/Cervezas"
        class="ml-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >CERVEZAS</v-btn
      >
      <v-btn
        to="/Whiskys"
        class="ml-2 my-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >WHISKYS Y ESPUMANTES</v-btn
      >
    </div>


    <v-card class="black white--text pa-8 font-weight-bold" elevation="10">ATENCION: SOLO PARA CONSUMICION EN EL RESTAURANT. <br> LAS IMÁGENES PUBLICADAS SON MERAMENTE ILUSTRATIVAS</v-card>
    <div class="px-5">
      
      <v-card
        max-width="850"
        class="orange darken-2 my-4 pa-4 rounded-br-xl"
        :class="{ 'd-flex': $vuetify.breakpoint.smAndUp }"
        elevation="4"
        v-for="(whisky, index) in whiskys"
        :key="index"
      >

        

         <v-img class="mr-5" :src="whisky.url" max-height="200" max-width="200" contain></v-img>

        <div>
          <div class="font-weight-black display-1">{{ whisky.nombre }}</div>
          <div class="font-weight-medium">{{ whisky.medida }}</div>
          <div class="font-weight-medium">{{ whisky.precio }}</div>
          <div class="font-weight-medium"> {{ whisky.cantidad }}</div>

           <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="incrementQuantity(whisky)"
          >+</v-btn
        >
        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="decreaseQuantity(whisky)"
          >-</v-btn
        >

        <v-btn class="ml-1 my-2" rounded color="black" dark @click="addFoodAction(whisky)" >Agregar al carrito
          </v-btn
        >
        

          <div>{{ "PRECIO POR UNIDAD: " + whisky.valor + "$" }}</div>

        
        </div>
      </v-card>



      
    </div>
   
  </div>

 
</template>

<script>
export default {
  data() {
    return {
      whiskys: [
        {
          nombre: "JHONNIE WALKER ET NEGRA",
          medida: "60ML",
          precio: "600$",
          cantidad: 1,
          valor: 600,
          url: "./tragos/etNegra.jpg"
        },
        
        {
          nombre: "JHONNIE WALKER ET NEGRA",
          medida: "90ML",
          precio: "900$",
          cantidad: 1,
          valor: 900,
          url: "./tragos/etNegra.jpg"
        },

        {
          nombre: "JACK DANIELS",
          medida: "60ML",
          precio: "900$",
          cantidad: 1,
          valor: 900,
          url: "./tragos/jack.jpg",
        },

        {
          nombre: "JACK DANIELS HONEY",
          medida: "60ML",
          precio: "900$",
          cantidad: 1,
          valor: 900,
          url: "./tragos/jackHoney.jpg",
        },

        {
          nombre: "JIM BEAN",
          medida: "60ML",
          precio: "550$",
          cantidad: 1,
          valor: 550,
          url: "./tragos/jim.jpg",
        },

        {
          nombre: "JIM BEAN HONEY",
          medida: "60ML",
          precio: "600$",
          cantidad: 1,
          valor: 600,
          url: "./tragos/jimHoney.jpg",
        },

        {
          nombre: "JAMESON",
          medida: "60ML",
          precio: "360$",
          cantidad: 1,
          valor: 360,
          url: "./tragos/jameson.jpg",
        },

         {
          nombre: "CHANDON EXTRA BRUT",
          precio: "2200$",
          cantidad: 1,
          valor: 2200,
          url: "./tragos/chandon.jpg",
        },

         {
          nombre: "MUMM EXTRA BRUT",
          precio: "1500$",
          cantidad: 1,
          valor: 1500,
          url: "./tragos/mumm.jpg",
        },

         {
          nombre: "BARON B",
          precio: "3600$",
          cantidad: 1,
          valor: 3600,
          url: "./tragos/baron.jpg",
        },
      ],
    };
  },

  methods: {
    incrementQuantity(whisky) {
      const sumarNumero = parseInt(whisky.precio.slice(0, -1))
      whisky.precio = sumarNumero + whisky.valor + "$";
      whisky.cantidad++
    },

    decreaseQuantity(whisky) {
      const restarNumero = parseInt(whisky.precio.slice(0, -1))
      if(whisky.cantidad === 1) {
        return
      }
      whisky.precio = restarNumero - whisky.valor + "$";
      whisky.cantidad--

     
    },
     addFoodAction(nuevaComida){
       this.$store.dispatch('addFoodAction', nuevaComida)
     }
      
  
  }

 
};
</script>

<style></style>
