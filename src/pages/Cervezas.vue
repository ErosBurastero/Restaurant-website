<template>
  <div>
       <div class="text-center my-5">
          <v-btn  href="/Tragos" class="ml-2 my-2"  rounded  color="orange accent-3 black--text"  dark >TRAGOS</v-btn>
          <v-btn  href="/Bebidas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >BEBIDAS SIN ALCOHOL</v-btn>
          <v-btn  href="/Cervezas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >CERVEZAS</v-btn>        
          <v-btn  href="/Whiskys" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >WHISKYS Y ESPUMANTES</v-btn>
       </div>

    <div class="px-5 ">
      <v-card max-width="850" class="card orange accent-3 my-4 pa-4  rounded-br-xl "
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
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "patagoniaPilsener.jpg",
        },
         {
             nombre: "PATAGONIA HOPPER LAGER",
             medida: "730CC",
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "patagoniaLager.jpg",
        },

         {
             nombre: "PATAGONIA VERA IPA",
             medida: " 730CC",
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "veraGrande.jpg",
        },

         {
             nombre: "PATAGONIA KUNE ",
             medida: "710CC",
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "patagoniaKune.jpg",
        },

         {
             nombre: "PATAGONIA WEISSE",
             medida: "740CC",
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "patagoniaWeisse.jpg",
        },

         {
             nombre: "STELLA ARTOIS",
             medida: "1 LITRO",
             precio: "0$",
             valor: 550,
             cantidad: 0,
             url: "stellaArtois.jpg",
        },

         {
             nombre: "HEINEKEN",
             medida: "710CC",
             precio: "0$",
             valor: 500,
             cantidad: 0,
             url: "heineken.jpg",
        },

         {
             nombre: "CORONA",
             medida: "710CC",
             precio: "0$",
             valor: 500,
             cantidad: 0,
             url: "corona.jpg",
        },

        {
             nombre: "PINTA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "pinta.jpg",
        },

        {
             nombre: "PINTA",
             medida: "1 LITRO",
             precio: "0$",
             valor: 650,
             cantidad: 0,
             url: "pinta.jpg",
        },

        {
             nombre: "PINTA",
             medida: "2L",
             precio: "0$",
             valor: 1200,
             cantidad: 0,
             url: "pinta.jpg",
        },

        {
             nombre: "GLOWLER",
             precio: "0$",
             valor: 650,
             cantidad: 0,
             url: "growler.jpg",
        },

         {
             nombre: "CORONA PORRON",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "conoraPorron.jpg",
        },

          {
             nombre: "PATAGONIA KUNE LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "patagoniaKuneLata.jpg",
        },

          {
             nombre: "PATAGONIA BOHEMIAN PILSENER LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "bohemianLata.jpg",
        },

          {
             nombre: "PATAGONIA WEISSE LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "weisseLata.jpg",
        },

          {
             nombre: "STELLA ARTOIS LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "stellaLata.jpg",
        },

          {
             nombre: "STELLA ARTOIS NOIRE LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "noireLata.jpg",
        },

          {
             nombre: "ANDES ORIGEN RUBIA LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "andesRubia.jpg",
        },

          {
             nombre: "ANDES ORIGEN IPA LATA",

             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "ipaLata.jpg",
        },

          {
             nombre: "ANDES ORIGEN NEGRA LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "andesNegra.jpg",
        },

          {
             nombre: "GOOSE ISLAND IPA LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "gooseLata.jpg",
        },

          {
             nombre: "TEMPLE SCOTISH LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "scotishLata.jpg",
        },

          {
             nombre: "TEMPLE WOLF LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "wolfLata.jpg",
        },

          {
             nombre: "TEMPLE COSMICA LATA",
             precio: "0$",
             valor: 350,
             cantidad: 0,
             url: "cosmicaLata.jpg",
        },

      ]
    }
  },

  methods: {
    sumar(cerveza) {
      const precio = parseInt(cerveza.precio.slice(0, -1))
      cerveza.precio = precio + cerveza.valor + "$";

      cerveza.cantidad++;
    },

    restar(cerveza) {
      if (cerveza.cantidad === 0) {
        return
      }
      const precio = parseInt(cerveza.precio.slice(0, -1))
      cerveza.precio = precio - cerveza.valor + "$";

      cerveza.cantidad--;
    },


    addFoodAction(nuevaComida){
      this.$store.dispatch('addFoodAction', nuevaComida)
    },

   
  }

}
</script>