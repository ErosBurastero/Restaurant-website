<template>

 <div>
       <div class="text-center my-5">
          <v-btn  href="/Tragos" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >TRAGOS</v-btn>
          <v-btn  href="/Bebidas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >BEBIDAS SIN ALCOHOL</v-btn>
          <v-btn  href="/Cervezas" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >CERVEZAS</v-btn>     
          <v-btn  href="/Whiskys" class="ml-2"  rounded  color="orange accent-3 black--text"  dark >WHISKYS Y ESPUMANTES</v-btn>


         </div>
  
  <div class="px-5 black ">
    <v-card max-width="850" class="orange accent-3 my-4 pa-4 " elevation="5" v-for="items in tragos" :key="items">
      <div class="font-weight-black display-1"> {{ items.Nombre }} </div>

      <div v-for="ingrediente in items.Ingredientes" :key="ingrediente">
        <div > {{ ingrediente }} </div>
      </div>
      
      <div class="font-weight-medium" > {{ items.Precio }} </div>
      <div class="font-weight-medium"> {{ items.Cantidad }} </div>
      <v-btn class= rounded-circle  color="black" dark @click="increment(items)">+</v-btn>
      <v-btn class= rounded-circle  color="black" dark @click="decrement(items)">-</v-btn>

       <v-btn class="ml-1 my-2" rounded color="black"  dark  >Agregar al carrito</v-btn>
       <div> {{ "PRECIO POR UNIDAD: $" + items.valor }} </div>
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
          Nombre: "GAMBINO'S COCKTAIL",
          Ingredientes: ["BEEFEATER LONDON DRY GIN, JIM BEAN", "CARPANO ROSSO, LICOR DE DURAZNO", "AMARETTO Y GRANADINA"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "LUCHESSE'S DRINK",
          Ingredientes: ["JIM BEAN, MARTINI BLANCO, MARTINI ROSSO", "LICOR DE CEREZA, Y SYRUP DE CANELA ESPECIADA"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "GENOVESE FAMILY",
          Ingredientes:  ["JIM BEAN HONEY, BRANDY BARDINET VSOP", "FRANGELICO, SIROPE DE VAINILLA"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "CHICAGO OUTFIT",
          Ingredientes: ["BEEFEATER LONDON DRY GIN, CAMPARI, GANCIA AMERICANO", "CARPANO ROSSO Y LICOR DE DURAZNO"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "CHARLESTON CLUB",
          Ingredientes:   ["BRANDY BARDINET VSOP, MARTINI BLANCO, TRIPLE SEC", "SYRUP DE AZUCAR, MANZANA MACHACADA Y LICOR DE CEREZA"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "NEGRONI",
          Ingredientes: ["BEEFEATER LONDON DRY GIN, CINZANO ROSSO Y CAMPARI"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "HONEY BOULEVARD",
          Ingredientes: ["JIM BEAN HONEY, CINZANO ROSSO Y CAMPARI"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "MANHATTAN DELICE",
          Ingredientes: ["JIM BEAN, VINO BLANCO DULCE, MARTINI ROSSO Y ANGOSTURA"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "CHERRY MARTINI",
          Ingredientes:  ["BRIGHTON LONDON DRY GIN, LICOR DE CEREZA", "TRIPLE SEC Y CARPANO ROSSO"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "JIM FASHIONED",
          Ingredientes: ["JIM BEAN, AMARETTO, AZUCAR MORENA Y ANGOSTURA"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "JAMESON APPLE SOUR",
          Ingredientes: ["JAMESON, MANZANA MACHACADA, SYRUP DE JENGIBRE Y LIMA"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "ABSOLUT COSMO",
          Ingredientes:  ["ABSOLUT, TRIPLE SEC, LIMA, FRUTOS ROJOS Y SYRUP DE AZUCAR"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "BRAMBLE",
          Ingredientes:  ["BRIGHTON LONDON DRY GIN, LICOR DE CASSIS", "LIMA Y SYRUP DE AZUCAR"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "APPLE MOSCOW",
          Ingredientes:  ["VODKA SMIRNOFF, MANZANA MACHACADA", "LIMA, SYRUP DE AZUCAR Y GINGER ALE"],
          Precio: "0$",
          valor: 550,
          Cantidad  : 0,
        },
        {
          Nombre: "BIANCO CUCUMBER SPRITZ",
          Ingredientes:  ["APEROL, PISCO CAPEL, VINO BLANCO DULCE, POMELO Y PEPINO"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "APEROL AMERICAN SPRITZ",
          Ingredientes: ["APEROL, GANCIA AMERICANO Y ESPUMANTE"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "MOJITOS",
          Ingredientes: ["HAVANA BLANCO, LIMON, MENTA", "AZUCAR, SPRITE Y FRUTAS DE ESTACION"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "GIN TONICS",
          Ingredientes: ["BRIGHTON LONDON DRY GIN, AGUA TONICA, FRUTAS DE ESTACION", "PEPINO, ESPECIADO CON PIMIENTA NEGRA Y ROMERO"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "MARGARITAS",
          Ingredientes: ["TEQUILA BLANCO, TRIPLE SEC LIMON, FRUTAS DE ESTACION"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "CAIPIS",
          Ingredientes:  ["VODKA SMIRNOFF/CACHAZA O GANCIA, LIMA", "LIMON, AZUCAR Y FRUTAS DE ESTACION"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "BRAMBLE",
          Ingredientes:  ["BRIGHTON LONDON DRY GIN, LICOR DE CASSIS", "LIMA Y SYRUP DE AZUCAR"],
          Precio: "0$",
          valor: 550,
          Cantidad: 0,
        },
        {
          Nombre: "DAIQUIRIS",
          Ingredientes: ["HAVANA BLANCO, LIMON, FRUTAS DE ESTACION Y AZUCAR"],
          Precio: "0$",
          valor: 600,
          Cantidad: 0,
        },
        {
          Nombre: "MAI TAI",
          Ingredientes: ["HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, TRIPLE SEC", "LIMA, SYRUP DE AZUCAR MORENA Y AMARETTO"],
          Precio: "0$",
          valor: 650,
          Cantidad: 0,
        },
        {
          Nombre: "ZOMBIE",
          Ingredientes: ["HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, LICOR DE DURAZNO", "NARANJA, ANANA, LIMA, SYRUP DE AZUCAR Y GRANADINA"],
          Precio: "0$",
          valor: 650,
          Cantidad: 0,
        },
        {
          Nombre: "SINGAPORE SLING",
          Ingredientes:  ["BRIGHTON LONDON DRY GIN, JAGERMEISTER, LICOR DE CEREZA", "TRIPLE SEC, LIMON , ANANA, SYRUP DE AZUCAR", "GRANADINA, ANGOSTURA"],
          Precio: "0$",
          valor: 650,
          Cantidad: 0,
        },
        {
          Nombre: "ONO LOA",
          Ingredientes: ["HAVANA BLANCO, HAVANA ANIEJADO ESPECIAL, MALIBU", "JAGERMEISTER, TRIPLE SEC, DURAZNO Y SYRUP DE AZUCAR"],
          Precio: "0$",
          valor: 650,
          Cantidad: 0,
        },
        {
          Nombre: "MALIBUE SKY",
          Ingredientes:   ["GANCIA AMERICANO, MALIBU, TRIPLE SEC", "ANANA, BLUE CURACAO, SYRUP DE AZUCAR"],
          Precio: "0$",
          valor: 650,
          Cantidad: 0,
        },
        {
          Nombre: "BOTICARIO",
          Ingredientes: ["FERNET BRANCA, CINZANO ROSSO, LIMON", "SYRUP DE AZUCAR, POMELO"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
        {
          Nombre: "VERMU Y GRAPE TONIC",
          Ingredientes: ["MARTINI BLANCO, MARTINI ROSSO", "UVAS MACHACADAS, AGUA TONICA"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
        {
          Nombre: "CINZANO SPRITZER",
          Ingredientes: ["CINZANO ROSSO, SPRITE Y PEPINO"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
        {
          Nombre: "CYNAR JULEP",
          Ingredientes: ["CYNAR, LIMON, MENTA, AZUCAR Y POMELO"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
        {
          Nombre: "BALON MARTINI",
          Ingredientes: ["MARTINI BIANCO, JAGERMEISTER Y SPRITE"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
        {
          Nombre: "CAMPARI ROSSO",
          Ingredientes: ["CAMPARI, CINZANO ROSSO Y POMELO"],
          Precio: "0$",
          valor: 500,
          Cantidad: 0,
        },
      ],
    };
  },

  methods: {
    increment(trago) {
      const precio = parseInt(trago.Precio.slice(0, -1))
      trago.Precio = precio + trago.valor + "$";

      trago.Cantidad++;
    },


    decrement(trago) {
       if (trago.Cantidad === 0) {
        return
      }
        

      const precio = parseInt(trago.Precio.slice(0, -1))
      trago.Precio = precio - trago.valor + "$"
     
      trago.Cantidad--;
    
    }

    

    }
  }

</script>

<style></style>
