<template>
  <div class="d-flex flex-column align-center px-5">
    <div class="text-center my-3">
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

    <v-card class="black white--text pa-8 font-weight-bold" elevation="10"
      >ATENCION: SOLO PARA CONSUMICION EN EL RESTAURANT. <br />
      LAS IMÁGENES PUBLICADAS SON MERAMENTE ILUSTRATIVAS</v-card
    >

    <div class="px-5">
      <v-card
        max-width="850"
        class="orange darken-2 my-4 pa-4 rounded-br-xl"
        elevation="5"
        v-for="(items, index) in tragos"
        :key="index"
      >
        <div class="font-weight-black display-1">{{ items.nombre }}</div>

        <div v-for="ingrediente in items.ingredientes" :key="ingrediente">
          <div>{{ ingrediente }}</div>
        </div>

        <div class="font-weight-medium">{{ items.precio }}</div>
        <div class="font-weight-medium">{{ items.cantidad }}</div>
        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="increment(items)"
          >+</v-btn
        >
        <v-btn
          class="rounded-circle"
          color="black"
          dark
          @click="decrement(items)"
          >-</v-btn
        >

        <v-btn
          class="ml-1 my-2"
          rounded
          color="black"
          dark
          @click="addFoodAction(items)"
          >Agregar al carrito</v-btn
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
        <div>{{ "PRECIO POR UNIDAD: $" + items.valor }}</div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tragos: [
        {
          nombre: "GAMBINO'S COCKTAIL",
          ingredientes: [
            "BEEFEATER LONDON DRY GIN, JIM BEAN",
            "CARPANO ROSSO, LICOR DE DURAZNO",
            "AMARETTO Y GRANADINA",
          ],
          precio: "600$",
          valor: 600,
          cantidad: 1,
          url: "corona.jpg",
        },
        {
          nombre: "LUCHESSE'S DRINK",
          ingredientes: [
            "JIM BEAN, MARTINI BLANCO, MARTINI ROSSO",
            "LICOR DE CEREZA, Y SYRUP DE CANELA ESPECIADA",
          ],
          precio: "600$",
          valor: 600,
          cantidad: 1,
        },
        {
          nombre: "GENOVESE FAMILY",
          ingredientes: [
            "JIM BEAN HONEY, BRANDY BARDINET VSOP",
            "FRANGELICO, SIROPE DE VAINILLA",
          ],
          precio: "600$",
          valor: 600,
          cantidad: 1,
        },
        {
          nombre: "CHICAGO OUTFIT",
          ingredientes: [
            "BEEFEATER LONDON DRY GIN, CAMPARI, GANCIA AMERICANO",
            "CARPANO ROSSO Y LICOR DE DURAZNO",
          ],
          precio: "600$",
          valor: 600,
          cantidad: 1,
        },
        {
          nombre: "CHARLESTON CLUB",
          ingredientes: [
            "BRANDY BARDINET VSOP, MARTINI BLANCO, TRIPLE SEC",
            "SYRUP DE AZUCAR, MANZANA MACHACADA Y LICOR DE CEREZA",
          ],
          precio: "600$",
          valor: 600,
          cantidad: 1,
        },
        {
          nombre: "NEGRONI",
          ingredientes: ["BEEFEATER LONDON DRY GIN, CINZANO ROSSO Y CAMPARI"],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "HONEY BOULEVARD",
          ingredientes: ["JIM BEAN HONEY, CINZANO ROSSO Y CAMPARI"],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "MANHATTAN DELICE",
          ingredientes: [
            "JIM BEAN, VINO BLANCO DULCE, MARTINI ROSSO Y ANGOSTURA",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },

        {
          nombre: "CHERRY MARTINI",
          ingredientes: [
            "BRIGHTON LONDON DRY GIN, LICOR DE CEREZA",
            "TRIPLE SEC Y CARPANO ROSSO",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "JIM FASHIONED",
          ingredientes: ["JIM BEAN, AMARETTO, AZUCAR MORENA Y ANGOSTURA"],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "JAMESON APPLE SOUR",
          ingredientes: [
            "JAMESON, MANZANA MACHACADA, SYRUP DE JENGIBRE Y LIMA",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "ABSOLUT COSMO",
          ingredientes: [
            "ABSOLUT, TRIPLE SEC, LIMA, FRUTOS ROJOS Y SYRUP DE AZUCAR",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "BRAMBLE",
          ingredientes: [
            "BRIGHTON LONDON DRY GIN, LICOR DE CASSIS",
            "LIMA Y SYRUP DE AZUCAR",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "APPLE MOSCOW",
          ingredientes: [
            "VODKA SMIRNOFF, MANZANA MACHACADA",
            "LIMA, SYRUP DE AZUCAR Y GINGER ALE",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "BIANCO CUCUMBER SPRITZ",
          ingredientes: [
            "APEROL, PISCO CAPEL, VINO BLANCO DULCE, POMELO Y PEPINO",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "APEROL AMERICAN SPRITZ",
          ingredientes: ["APEROL, GANCIA AMERICANO Y ESPUMANTE"],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "MOJITOS",
          ingredientes: [
            "HAVANA BLANCO, LIMON, MENTA",
            "AZUCAR, SPRITE Y FRUTAS DE ESTACION",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "GIN TONICS",
          ingredientes: [
            "BRIGHTON LONDON DRY GIN, AGUA TONICA, FRUTAS DE ESTACION",
            "PEPINO, ESPECIADO CON PIMIENTA NEGRA Y ROMERO",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "MARGARITAS",
          ingredientes: [
            "TEQUILA BLANCO, TRIPLE SEC LIMON, FRUTAS DE ESTACION",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "CAIPIS",
          ingredientes: [
            "VODKA SMIRNOFF/CACHAZA O GANCIA, LIMA",
            "LIMON, AZUCAR Y FRUTAS DE ESTACION",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "BRAMBLE",
          ingredientes: [
            "BRIGHTON LONDON DRY GIN, LICOR DE CASSIS",
            "LIMA Y SYRUP DE AZUCAR",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
        },
        {
          nombre: "DAIQUIRIS",
          ingredientes: ["HAVANA BLANCO, LIMON, FRUTAS DE ESTACION Y AZUCAR"],
          precio: "600$",
          valor: 600,
          cantidad: 1,
        },
        {
          nombre: "MAI TAI",
          ingredientes: [
            "HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, TRIPLE SEC",
            "LIMA, SYRUP DE AZUCAR MORENA Y AMARETTO",
          ],
          precio: "650$",
          valor: 650,
          cantidad: 1,
        },
        {
          nombre: "ZOMBIE",
          ingredientes: [
            "HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, LICOR DE DURAZNO",
            "NARANJA, ANANA, LIMA, SYRUP DE AZUCAR Y GRANADINA",
          ],
          precio: "650$",
          valor: 650,
          cantidad: 1,
        },
        {
          nombre: "SINGAPORE SLING",
          ingredientes: [
            "BRIGHTON LONDON DRY GIN, JAGERMEISTER, LICOR DE CEREZA",
            "TRIPLE SEC, LIMON , ANANA, SYRUP DE AZUCAR",
            "GRANADINA, ANGOSTURA",
          ],
          precio: "650$",
          valor: 650,
          cantidad: 1,
        },
        {
          nombre: "ONO LOA",
          ingredientes: [
            "HAVANA BLANCO, HAVANA ANIEJADO ESPECIAL, MALIBU",
            "JAGERMEISTER, TRIPLE SEC, DURAZNO Y SYRUP DE AZUCAR",
          ],
          precio: "650$",
          valor: 650,
          cantidad: 1,
        },
        {
          nombre: "MALIBUE SKY",
          ingredientes: [
            "GANCIA AMERICANO, MALIBU, TRIPLE SEC",
            "ANANA, BLUE CURACAO, SYRUP DE AZUCAR",
          ],
          precio: "650$",
          valor: 650,
          cantidad: 1,
        },
        {
          nombre: "BOTICARIO",
          ingredientes: [
            "FERNET BRANCA, CINZANO ROSSO, LIMON",
            "SYRUP DE AZUCAR, POMELO",
          ],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
        {
          nombre: "VERMU Y GRAPE TONIC",
          ingredientes: [
            "MARTINI BLANCO, MARTINI ROSSO",
            "UVAS MACHACADAS, AGUA TONICA",
          ],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
        {
          nombre: "CINZANO SPRITZER",
          ingredientes: ["CINZANO ROSSO, SPRITE Y PEPINO"],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
        {
          nombre: "CYNAR JULEP",
          ingredientes: ["CYNAR, LIMON, MENTA, AZUCAR Y POMELO"],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
        {
          nombre: "BALON MARTINI",
          ingredientes: ["MARTINI BIANCO, JAGERMEISTER Y SPRITE"],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
        {
          nombre: "CAMPARI ROSSO",
          ingredientes: ["CAMPARI, CINZANO ROSSO Y POMELO"],
          precio: "500$",
          valor: 500,
          cantidad: 1,
        },
      ],

      snackbar: false,
      text: "Has agregado un producto al carrito",
      timeout: 1500,
    };
  },

  methods: {
    increment(trago) {
      const precio = parseInt(trago.precio.slice(0, -1));
      trago.precio = precio + trago.valor + "$";

      trago.cantidad++;
    },

    decrement(trago) {
      if (trago.cantidad === 1) {
        return;
      }

      const precio = parseInt(trago.precio.slice(0, -1));
      trago.precio = precio - trago.valor + "$";

      trago.cantidad--;
    },

    addFoodAction(nuevaComida) {
      this.snackbar = true
      this.$store.dispatch("addFoodAction", nuevaComida);
    },
  },
};
</script>

<style></style>
