<template>
  <div>
    <div v-for="items in array" :key="items">{{ items }}.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          Nombre: "GAMBINO'S COCKTAIL",
          Ingredientes:
            "BEEFEATER LONDON DRY GIN, JIM BEAN, CARPANO ROSSO, LICOR DE DURAZNO, AMARETTO Y GRANADINA",
          Precio: "600$",
        },
        {
          Nombre: "LUCHESSE'S DRINK",
          Ingredientes:
            "JIM BEAN, MARTINI BLANCO, MARTINI ROSSO, LICOR DE CEREZA, Y SYRUP DE CANELA ESPECIADA",
          Precio: "600$",
        },
        {
          Nombre: "GENOVESE FAMILY",
          Ingredientes:
            "JIM BEAN HONEY, BRANDY BARDINET VSOP, FRANGELICO, SIROPE DE VAINILLA",
          Precio: "600$",
        },
        {
          Nombre: "CHICAGO OUTFIT",
          Ingredientes:
            "BEEFEATER LONDON DRY GIN, CAMPARI, GANCIA AMERICANO, CARPANO ROSSO Y LICOR DE DURAZNO",
          Precio: "600$",
        },
        {
          Nombre: "CHARLESTON CLUB",
          Ingredientes:
            "BRANDY BARDINET VSOP, MARTINI BLANCO, TRIPLE SEC, SYRUP DE AZUCAR, MANZANA MACHACADA Y LICOR DE CEREZA",
          Precio: "600$",
        },
        {
          Nombre: "NEGRONI",
          Ingredientes: "BEEFEATER LONDON DRY GIN, CINZANO ROSSO Y CAMPARI",
          Precio: "550$",
        },
        {
          Nombre: "HONEY BOULEVARD",
          Ingredientes: "JIM BEAN HONEY, CINZANO ROSSO Y CAMPARI",
          Precio: "550$",
        },
        {
          Nombre: "MANHATTAN DELICE",
          Ingredientes:
            "JIM BEAN, VINO BLANCO DULCE, MARTINI ROSSO Y ANGOSTURA",
          Precio: "550$",
        },
        {
          Nombre: "CHERRY MARTINI",
          Ingredientes:
            "BRIGHTON LONDON DRY GIN, LICOR DE CEREZA, TRIPLE SEC Y CARPANO ROSSO",
          Precio: "550$",
        },
        {
          Nombre: "JIM FASHIONED",
          Ingredientes: "JIM BEAN, AMARETTO, AZUCAR MORENA Y ANGOSTURA",
          Precio: "550$",
        },
        {
          Nombre: "JAMESON APPLE SOUR",
          Ingredientes: "JAMESON, MANZANA MACHACADA, SYRUP DE JENGIBRE Y LIMA",
          Precio: "550$",
        },
        {
          Nombre: "ABSOLUT COSMO",
          Ingredientes:
            "ABSOLUT, TRIPLE SEC, LIMA, FRUTOS ROJOS Y SYRUP DE AZUCAR",
          Precio: "550$",
        },
        {
          Nombre: "BRAMBLE",
          Ingredientes:
            "BRIGHTON LONDON DRY GIN, LICOR DE CASSIS, LIMA Y SYRUP DE AZUCAR",
          Precio: "550$",
        },
        {
          Nombre: "APPLE MOSCOW",
          Ingredientes:
            "VODKA SMIRNOFF, MANZANA MACHACADA, LIMA, SYRUP DE AZUCAR Y GINGER ALE",
          Precio: "550$",
        },
        {
          Nombre: "BIANCO CUCUMBER SPRITZ",
          Ingredientes:
            "APEROL, PISCO CAPEL, VINO BLANCO DULCE, POMELO Y PEPINO",
          Precio: "550$",
        },
        {
          Nombre: "APEROL AMERICAN SPRITZ",
          Ingredientes: "APEROL, GANCIA AMERICANO Y ESPUMANTE",
          Precio: "550$",
        },
        {
          Nombre: "MOJITOS",
          Ingredientes:
            "HAVANA BLANCO, LIMON, MENTA, AZUCAR, SPRITE Y FRUTAS DE ESTACION",
          Precio: "550$",
        },
        {
          Nombre: "GIN TONICS",
          Ingredientes:
            "BRIGHTON LONDON DRY GIN, AGUA TONICA, FRUTAS DE ESTACION, PEPINO, ESPECIADO CON PIMIENTA NEGRA Y ROMERO",
          Precio: "550$",
        },
        {
          Nombre: "MARGARITAS",
          Ingredientes: "TEQUILA BLANCO, TRIPLE SEC LIMON, FRUTAS DE ESTACION",
          Precio: "550$",
        },
        {
          Nombre: "CAIPIS",
          Ingredientes:
            "VODKA SMIRNOFF/CACHAZA O GANCIA, LIMA, LIMON, AZUCAR Y FRUTAS DE ESTACION",
          Precio: "550$",
        },
        {
          Nombre: "BRAMBLE",
          Ingredientes:
            "BRIGHTON LONDON DRY GIN, LICOR DE CASSIS, LIMA Y SYRUP DE AZUCAR",
          Precio: "550$",
        },
        {
          Nombre: "DAIQUIRIS",
          Ingredientes: "HAVANA BLANCO, LIMON, FRUTAS DE ESTACION Y AZUCAR",
          Precio: "600$",
        },
        {
          Nombre: "MAI TAI",
          Ingredientes:
            "HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, TRIPLE SEC, LIMA, SYRUP DE AZUCAR MORENA Y AMARETTO",
          Precio: "650$",
        },
        {
          Nombre: "ZOMBIE",
          Ingredientes:
            "HAVANA BLANCO, HAVANA ANIEJO ESPECIAL, LICOR DE DURAZNO, NARANJA, ANANA, LIMA, SYRUP DE AZUCAR Y GRANADINA",
          Precio: "650$",
        },
        {
          Nombre: "SINGAPORE SLING",
          Ingredientes:
            "BRIGHTON LONDON DRY GIN, JAGERMEISTER, LICOR DE CEREZA, TRIPLE SEC, LIMON , ANANA, SYRUP DE AZUCAR, GRANADINA, ANGOSTURA",
          Precio: "650$",
        },
        {
          Nombre: "ONO LOA",
          Ingredientes:
            "HAVANA BLANCO, HAVANA ANIEJADO ESPECIAL, MALIBU, JAGERMEISTER, TRIPLE SEC, DURAZNO Y SYRUP DE AZUCAR",
          Precio: "650$",
        },
        {
          Nombre: "MALIBUE SKY",
          Ingredientes:
            "GANCIA AMERICANO, MALIBU, TRIPLE SEC, ANANA, BLUE CURACAO, SYRUP DE AZUCAR",
          Precio: "650$",
        },
        {
          Nombre: "BOTICARIO",
          Ingredientes:
            "FERNET BRANCA, CINZANO ROSSO, LIMON, SYRUP DE AZUCAR, POMELO",
          Precio: "500$",
        },
        {
          Nombre: "VERMU Y GRAPE TONIC",
          Ingredientes:
            "MARTINI BLANCO, MARTINI ROSSO, UVAS MACHACADAS, AGUA TONICA",
          Precio: "500$",
        },
        {
          Nombre: "CINZANO SPRITZER",
          Ingredientes: "CINZANO ROSSO, SPRITE Y PEPINO",
          Precio: "500$",
        },
        {
          Nombre: "CYNAR JULEP",
          Ingredientes: "CYNAR, LIMON, MENTA, AZUCAR Y POMELO",
          Precio: "500$",
        },
        {
          Nombre: "BALON MARTINI",
          Ingredientes: "MARTINI BIANCO, JAGERMEISTER Y SPRITE",
          Precio: "500$",
        },
        {
          Nombre: "CAMPARI ROSSO",
          Ingredientes: "CAMPARI, CINZANO ROSSO Y POMELO",
          Precio: "500$",
        },
      ],
    };
  },
};
</script>

<style></style>
