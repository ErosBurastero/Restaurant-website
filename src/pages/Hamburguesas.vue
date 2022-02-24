<template>
  <div class="d-flex flex-column align-center px-5">
    <div class="text-center my-5">
      <v-btn
        to="/Hamburguesas"
        class="ml-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >HAMBURGUESAS</v-btn
      >
      <v-btn
        to="/Dips"
        class="ml-2 my-2"
        rounded
        color="orange darken-2 black--text"
        dark
        >DIPS</v-btn
      >
    </div>
    
    <div class="px-5">
      <v-card
        max-width="850"
        class="orange darken-2 my-4 pa-4 rounded-br-xl"
        :class="{ 'd-flex': $vuetify.breakpoint.smAndUp }"
        elevation="4"
        v-for="(item, index) in hamburguesas"
        :key="index"  
      >
        <v-img :src="item.url" max-height="400" max-width="350" contain></v-img>

        <div class="pl-3">
          <div class="font-weight-black display-1">{{ item.nombre }}</div>
          <div class="font-weight-medium">{{ item.caracteristicas }}</div>

          <div v-for="(ingrediente, index) in item.ingredientes" :key="index">
            {{ ingrediente }}
          </div>

          <div>{{ item.precio }} {{ item.cantidad }} 
             <v-btn
            class="rounded-circle"
            color="black"
            dark
            @click="incrementQuantity(item)"
            >+</v-btn
          >
          <v-btn
            class="rounded-circle"
            color="black"
            dark
            @click="decreaseQuantity(item)"
            >-</v-btn
          >
          </div>

        
          <div class="subtitle-2 my-1">  {{ item.medallon + item.valorMedallon }} {{ item.cantidadMedallon}}
            <v-btn
            class="rounded-circle ml-2"
            color="black"
            dark
            @click="addExtraMedallon(item)"
            >+</v-btn
          >
          <v-btn
            class="rounded-circle ml-1"
            color="black" 
            dark
            @click="takeOffMedallon(item)"
            >-</v-btn
          > </div>
          
          <div class="subtitle-2 my-1">  {{ item.cheddar + item.valorCheddar }} {{ item.cantidadCheddar }}
              <v-btn
            class="rounded-circle ml-2"
            color="black"
            dark
            @click="addExtraCheddar(item)"
            >+</v-btn
          >
          <v-btn
            class="rounded-circle ml-1"
            color="black"
            dark
            @click="takeOffCheddar(item)"
            >-</v-btn
          > 
           </div>
          <div class="subtitle-2 my-1">  {{ item.panceta + item.valorPanceta}} {{ item.cantidadPanceta }}
              <v-btn
            class="rounded-circle ml-2"
            color="black"
            dark
            @click="addExtraPanceta(item)"
            >+</v-btn
          >
          <v-btn
            class="rounded-circle ml-1"
            color="black"
            dark
            @click="takeOffPanceta(item)"
            >-</v-btn
          > 
          </div>
          

          <v-btn
            class="ml-1 my-2"
            rounded
            color="black"
            dark
            
            @click="addFoodAction(item)"
            
            >Agregar al carrito

          </v-btn>

             <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="white"
    >
      <span class="black--text">{{text}}</span>

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
         
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      hamburguesas: [
        {
          nombre: "CHEESEBURGER GANGS",
          caracteristicas: "OPCION SIN TACC (ACLARAR)",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO CHEDDAR",
            "CEBOLLA BRUNOISE, PEPINOS AGRIDULCES Y SALSA ROYAL",
          ],
          precio: "720$",
          valor: 720,
          cantidad: 1,
          medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/cheese.jpg",
        },
        {
          nombre: "1/4 GANGS",
          caracteristicas: "OPCION SIN TACC (ACLARAR)",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "DOBLE QUESO CHEDDAR y ADEREZADA CON SALSA ROYAL",
          ],
          precio: "660$",
          valor: 660,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/unCuarto.jpg",
        },

        {
          nombre: "AMERICAN GANGSTER",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO CHEDDAR,",
            "PANCETA CROCANTE, CEBOLLA CARAMELIZADA Y SALSA BARBACOA EN PAN BRIOCHE",
          ],
          precio: "750$",
          valor: 750,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/american.jpg",
        },

        {
          nombre: "GIUSSEPE GARIBALDI",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "PROVOLETA, CEBOLLA, MORRON ASADO",
            "RUCULA ADEREZADA CON MAYOPESTO",
          ],
          precio: "850$",
          valor: 850,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/garibaldi.jpg",
        },
        {
          nombre: "LUCKY LUCIANO",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, AROS DE CEBOLLA",
            "PANCETA CROCANTE, ADEREZADA CON SALSA GANGS",
          ],
          precio: "760$",
          valor: 760,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/luckyLuciano.jpg",
        },
        {
          nombre: "MAFIA MEXICANA",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, PANCETA CROCANTE",
            "GUACAMOLE, Y CRUNCH DE NACHOS (opcion picante)",
          ],
          precio: "930$",
          valor: 930,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/mexicana.jpg",
        },
        {
          nombre: "BIG BANGS",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR)",
            "QUESO CHEDDAR, LECHUGA, CEBOLLA",
            "PEPINOS AGRIDULCES, ADEREZADA CON SALSA GANGS",
          ],
          precio: "720$",
          valor: 720,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/bigBangs.jpg",
        },
        {
          nombre: "CAESAR GANGS",
          ingredientes: [
            "MEDALLON DE POLLO CRISPY, LECHUGA",
            "QUESO PROVOLONE EN HEBRAS, ADEREZADA CON SALSA CAESAR",
          ],
          precio: "790$",
          valor: 790,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/caesar.jpg",
        },
        {
          nombre: "JHON GOTTY",
          ingredientes: [
            "POLLO CRISPY, QUESO CHEDDAR",
            "PEPINOS AGRIDULCES, COLESLAW",
            "ADEREZADA CON SALSA GANGS",
          ],
          precio: "770$",
          valor: 770,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
          url: "/burgers/john.jpg",
        },

        {
          nombre: "MINI GANGS BURGER",
          ingredientes: [
            "DOBLE MEDALLON DE CARNE (90GR), QUESO DAMBO O CHEDAR",
          ],
          precio: "550$",
          valor: 550,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
        },
        {
          nombre: "MINI GANGS POLLO CRISPY",
          ingredientes: ["NUGGETS DE POLLO CRUJIENTE CON FRITAS"],
          Precio: "550$",
          valor: 550,
          cantidad: 1,
           medallon: "MEDALLON DE CARNE ",
          valorMedallon: "0$",
          valorMedallonNumero: 100,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
        },
        {
          nombre: "BARKER",
          caracteristicas: "VEGGIE",
          ingredientes: [
            "MEDALLON DE GARBANZOS, TOMATE",
            "CEBOLLA MORADA, RUCULA ADEREZADA CON ALIOLI VEGANO",
          ],
          precio: "720$",
          valor: 720,
          cantidad: 1,
          url: "/burgers/barker.jpg",
           medallon: "MEDALLON VEGANO ",
          valorMedallon: "0$",
          valorMedallonNumero: 150,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
      
        },
        {
          nombre: "NOT BURGER",
          caracteristicas: "VEGGIE",
          ingredientes: [
            "BURGER NOTCO, QUESO CHEDDAR",
            "TOMATE, CEBOLLA MORADA, RUCULA",
            "ADEREZADA CON ALIOLI VEGANO",
          ],
          precio: "860$",
          valor: 860,
          cantidad: 1,
          medallon: "MEDALLON VEGANO ",
          valorMedallon: "0$",
          valorMedallonNumero: 150,
          cantidadMedallon: 0,
          cheddar: "CHEDDAR ",
          valorCheddar: "0$",
          valorCheddarNumero: 50,
          cantidadCheddar: 0,
          panceta: "PANCETA ",
          valorPanceta: "0$",
          valorPancetaNumero: 50,
          cantidadPanceta: 0,
        },
      ],

       snackbar: false,
      text: 'Has agregado un producto al carrito',
      timeout: 2000,
    };
  },

  methods: {
    incrementQuantity(hamburguesa) {
      const precio = parseInt(hamburguesa.precio.slice(0, -1));

      hamburguesa.precio = precio + hamburguesa.valor + "$";

      hamburguesa.cantidad++;
    },

    decreaseQuantity(hamburguesa) {
      if (hamburguesa.cantidad === 1) {
        return;
      }

      const precio = parseInt(hamburguesa.precio.slice(0, -1));
      hamburguesa.precio = precio - hamburguesa.valor + "$";

      hamburguesa.cantidad--;
    },

    addExtraMedallon(item) {
      if( item.cantidadMedallon >= 2) {
        return
      }
      const price = parseInt(item.valorMedallon.slice(0, -1));
      item.valorMedallon = price + item.valorMedallonNumero + "$";
      item.cantidadMedallon++;
    },

    takeOffMedallon(item) {
      if ( item.cantidadMedallon === 0) {
        return
      }

      const price = parseInt(item.valorMedallon.slice(0, -1));
      item.valorMedallon = price - item.valorMedallonNumero + "$";

      item.cantidadMedallon--;

    },

     addExtraCheddar(item) {
      if( item.cantidadCheddar >= 2) {
        return
      }
      const price = parseInt(item.valorCheddar.slice(0, -1));
      item.valorCheddar = price + item.valorCheddarNumero + "$";
      item.cantidadCheddar++;
    },

    takeOffCheddar(item) {
      if ( item.cantidadCheddar === 0) {
        return
      }

      const price = parseInt(item.valorCheddar.slice(0, -1));
      item.valorCheddar = price - item.valorCheddarNumero + "$";

      item.cantidadCheddar--;

    },

    addExtraPanceta(item) {
      if( item.cantidadPanceta >= 2) {
        return
      }
      const price = parseInt(item.valorPanceta.slice(0, -1));
      item.valorPanceta =  price + item.valorPancetaNumero + "$";
      item.cantidadPanceta++;
    },

    takeOffPanceta(item) {
      if ( item.cantidadPanceta === 0) {
        return
      }

      const price = parseInt(item.valorPanceta.slice(0, -1));
      item.valorPanceta = price - item.valorPancetaNumero + "$";

      item.cantidadPanceta--;

    },

    addFoodAction(nuevaComida) {
      this.snackbar = true
      this.$store.dispatch("addFoodAction", nuevaComida);
    },
  },
};
</script>
