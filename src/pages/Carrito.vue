<template>
  <div class="d-flex flex-column align-center px-5">

    
 

   <v-card
      max-width="850"
      min-width="386"
      class="orange darken-2 my-4 pa-4 rounded-br-xl"
    >
    <div class="font-weight-medium ml-3 text-decoration-underline">PRODUCTOS EN CARRITO : </div>

    
    
      <ul
        class="my-4"
        v-for="(comida, index) in $store.state.comidas"
        :key="index"
          
      >
      <v-divider></v-divider>

        <li class="font-weight-bold my-5">

          <div>
            {{ comida.nombre }}
            <v-icon class="ml-3" @click="deletePedido(comida)">mdi-delete</v-icon>
          </div>
        
          <div>{{ "CANTIDAD " + comida.cantidad }}</div>

          <div>{{ "PRECIO:" + comida.precio }}</div>

        </li>

      </ul>

      <div class="my-2 ml-3 font-weight-bold">
        {{ total + sumarComida + "$" }}
      </div>

      <v-btn class="my-2" rounded color="black" dark  href="https://api.whatsapp.com/send?" @click="enviarWhatsapp()"
        >ENVIAR PEDIDO</v-btn
      >

    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      total: "PRECIO TOTAL: ",
    };
  },

  mounted() {
    const valorGuardado = JSON.parse(localStorage.getItem("Carrito"));
    if (valorGuardado && valorGuardado.length === 0) {
      return;
    }

    this.$store.dispatch("setComidasFromStorage", valorGuardado);
  },
  computed: {
    sumarComida() {
      const pedidos = this.$store.state.comidas;
      if(pedidos.length === 0) return "0"
     
       
      if(pedidos.length > 1){
        const sumaPedidos = pedidos.reduce((pedidoAnterior, pedido) => {
          const pedidoActualTotal = pedido.valor * pedido.cantidad

         
          if (pedidoAnterior.valor) {
            const pedidoAnteriorTotal = pedidoAnterior.valor * pedidoAnterior.cantidad
            return pedidoActualTotal + pedidoAnteriorTotal;
          } 
          return pedidoActualTotal + pedidoAnterior;
        }
        );
        return sumaPedidos 
      }
      const unicoPedido = pedidos[0]
      const unicoPedidoTotal = unicoPedido.valor * unicoPedido.cantidad
      return unicoPedidoTotal
    }
  },
  methods: {
    deletePedido(pedido) {
      this.$store.dispatch("deleteComidaAction", pedido);
    },

    enviarWhatsapp() {
    //  const pedidosAEnviar = this.$store.state.comidas

    //  if ( pedidosAEnviar >= 1) {     }
      


    }

  },
};
</script>

<style>


</style>
