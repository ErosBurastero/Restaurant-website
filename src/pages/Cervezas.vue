<template>
  <div  class="d-flex flex-column align-center px-5">
       <div class="text-center my-5">
          <v-btn  to="/Bebidas" class="ml-2"  rounded  color="orange darken-2 black--text"  dark >BEBIDAS SIN ALCOHOL</v-btn>
          <v-btn  to="/Tragos" class="ml-2 my-2"  rounded  color="orange darken-2 black--text"  dark >TRAGOS</v-btn>
          <v-btn  to="/Cervezas" class="ml-2"  rounded  color="orange darken-2 black--text"  dark >CERVEZAS</v-btn>        
          <v-btn  to="/Whiskys" class="ml-2 my-2"  rounded  color="orange darken-2 black--text"  dark >WHISKYS Y ESPUMANTES</v-btn>
       </div>

        <v-card class="black white--text pa-8 font-weight-bold" elevation="10">AVISO: NO SE HACE DELIVERY DE STELLA ARTOIS.  <br> LAS IMÁGENES PUBLICADAS SON MERAMENTE ILUSTRATIVAS</v-card>


    <div class="px-5 ">
      <v-card max-width="850" class="card orange darken-2 my-4 pa-4  rounded-br-xl "
       :class="{'d-flex': $vuetify.breakpoint.smAndUp}"
        elevation="5" v-for="(cerveza, index) in cervezas"
        :key="index">


          <v-img class="mr-" :src="cerveza.url" max-height="200" max-width="200" contain></v-img>

          <div class="pl-4 ">
            <div class="font-weight-black title">{{ cerveza.nombre }}</div>
            <div class="font-weight-bold"> {{ cerveza.medida}} </div>
            <div class="font-weight-medium"> {{ cerveza.precio }} </div>
            <div class="font-weight-medium"> {{ cerveza.cantidad }} </div>

            <v-btn class= rounded-circle  color="black" dark @click="sumar(cerveza)">+</v-btn>
            <v-btn class= rounded-circle  color="black" dark @click="restar(cerveza)">-</v-btn>

            <v-btn class="ml-1 my-2" rounded color="black" dark
               @click="addFoodAction(cerveza)">Agregar al carrito
                </v-btn
              >

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

              <div> {{ "PRECIO POR UNIDAD: $" + cerveza.valor }} </div>

          </div>

     
       </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      cervezas: [
        {
             nombre: "PATAGONIA BOHEMIAN PILSENER",
             medida: "740CC",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/patagoniaPilsener.jpg",
        },
         {
             nombre: "PATAGONIA HOPPER LAGER",
             medida: "730CC",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/patagoniaLager.jpg",
        },

         {
             nombre: "PATAGONIA VERA IPA",
             medida: " 730CC",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/veraGrande.jpg",
        },

         {
             nombre: "PATAGONIA KUNE ",
             medida: "710CC",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/patagoniaKune.jpg",
        },

         {
             nombre: "PATAGONIA WEISSE",
             medida: "740CC",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/patagoniaWeisse.jpg",
        },

         {
             nombre: "STELLA ARTOIS",
             medida: "1 LITRO",
             precio: "550$",
             valor: 550,
             cantidad: 1,
             url: "./bebidas/stellaArtois.jpg",
        },

         {
             nombre: "HEINEKEN",
             medida: "710CC",
             precio: "500$",
             valor: 500,
             cantidad: 1,
             url: "./bebidas/heineken.jpg",
        },

         {
             nombre: "CORONA",
             medida: "710CC",
             precio: "500$",
             valor: 500,
             cantidad: 1,
             url: "./bebidas/corona.jpg",
        },

        {
             nombre: "PINTA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/pinta.jpg",
        },

        {
             nombre: "PINTA",
             medida: "1 LITRO",
             precio: "650$",
             valor: 650,
             cantidad: 1,
             url: "./bebidas/pinta.jpg",
        },

        {
             nombre: "PINTA",
             medida: "2L",
             precio: "1200$",
             valor: 1200,
             cantidad: 1,
             url: "./bebidas/pinta.jpg",
        },

        {
             nombre: "GLOWLER",
             precio: "650$",
             valor: 650,
             cantidad: 1,
             url: "./bebidas/growler.jpg",
        },

         {
             nombre: "CORONA PORRON",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/conoraPorron.jpg",
        },

          {
             nombre: "PATAGONIA KUNE LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/patagoniaKuneLata.jpg",
        },

          {
             nombre: "PATAGONIA BOHEMIAN PILSENER LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/bohemianLata.jpg",
        },

          {
             nombre: "PATAGONIA WEISSE LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/weisseLata.jpg",
        },

          {
             nombre: "STELLA ARTOIS LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/stellaLata.jpg",
        },

          {
             nombre: "STELLA ARTOIS NOIRE LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/noireLata.jpg",
        },

          {
             nombre: "ANDES ORIGEN RUBIA LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/andesRubia.jpg",
        },

          {
             nombre: "ANDES ORIGEN IPA LATA",

             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/ipaLata.jpg",
        },

          {
             nombre: "ANDES ORIGEN NEGRA LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/andesNegra.jpg",
        },

          {
             nombre: "GOOSE ISLAND IPA LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/gooseLata.jpg",
        },

          {
             nombre: "TEMPLE SCOTISH LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/scotishLata.jpg",
        },

          {
             nombre: "TEMPLE WOLF LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/wolfLata.jpg",
        },

          {
             nombre: "TEMPLE COSMICA LATA",
             precio: "350$",
             valor: 350,
             cantidad: 1,
             url: "./bebidas/cosmicaLata.jpg",
        },

      ],

      snackbar: false,
      text: "Has agregado un producto al carrito",
      timeout: 2000,
    }
  },

  methods: {
    sumar(cerveza) {
      const precio = parseInt(cerveza.precio.slice(0, -1))
      cerveza.precio = precio + cerveza.valor + "$";

      cerveza.cantidad++;
    },

    restar(cerveza) {
      if (cerveza.cantidad === 1) {
        return
      }
      const precio = parseInt(cerveza.precio.slice(0, -1))
      cerveza.precio = precio - cerveza.valor + "$";

      cerveza.cantidad--;
    },


    addFoodAction(nuevaComida){
      this.snackbar  = true
      this.$store.dispatch('addFoodAction', nuevaComida)
    },

   
  }

}
</script>