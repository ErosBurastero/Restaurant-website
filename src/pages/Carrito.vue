<template>
  <div class="d-flex flex-column align-center px-5">
    <v-card
      max-width="850"
      min-width="386"
      class="orange darken-2 my-4 pa-4 rounded-br-xl"
    >
      <div class="font-weight-medium ml-3 text-decoration-underline">
        PRODUCTOS EN CARRITO :
      </div>

      <ul
        class="my-4"
        v-for="(comida, index) in $store.state.comidas"
        :key="index"
      >
        <v-divider></v-divider>

        <li class="font-weight-bold my-5">
          <div>
            {{ comida.nombre }}
            <v-icon class="ml-3" @click="deletePedido(comida)"
              >mdi-delete</v-icon
            >
          </div>

          <div>
            {{
              "CANTIDAD:  " +
              comida.cantidad +
              " —  PRECIO: " +
              comida.precio +
              ""
            }}
          </div>
          <div v-for="(extra, index) in getExtras(comida)" :key="index">
            {{ extra.name + extra.value }}
          </div>
        </li>
      </ul>

      <v-divider></v-divider>

      <div class="my-2 ml-3 font-weight-bold">
        {{ total + sumarComida + "$" }}
      </div>

      <v-btn
        class="my-2"
        rounded
        color="black"
        dark
        :href="getUrlWithCart()"
        target="blank"
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
      if (pedidos.length === 0) return "0";

      if (pedidos.length > 1) {
        const sumaPedidos = pedidos.reduce((pedidoAnterior, pedido) => {
          const extras = [
            {
              name: "panceta",
              valor:
                pedido.valorPancetaNumero * pedido.cantidadPanceta,
            },
            {
              name: "cheddar",
              valor:
                pedido.valorCheddarNumero * pedido.cantidadCheddar,
            },
            {
              name: "medallon",
              valor:
                pedido.valorMedallonNumero * pedido.cantidadMedallon,
            },
          ];
          let valorExtras = 0;
          extras.forEach((extra) => {
            if (extra.valor) {
              valorExtras += extra.valor
            }
          });
          const pedidoActualTotal =
            pedido.valor * pedido.cantidad + valorExtras

          if (pedidoAnterior.valor) {
            const pedidoAnteriorTotal = pedidoAnterior.valor * pedidoAnterior.cantidad;
            return pedidoActualTotal + pedidoAnteriorTotal;
          }
          return pedidoActualTotal + pedidoAnterior;
        });
        return sumaPedidos;
      }
      const unicoPedido = pedidos[0];
      const extras = [
        {
          name: "panceta",
          valor: unicoPedido.valorPancetaNumero * unicoPedido.cantidadPanceta,
        },
        {
          name: "cheddar",
          valor: unicoPedido.valorCheddarNumero * unicoPedido.cantidadCheddar,
        },
        {
          name: "medallon",
          valor: unicoPedido.valorMedallonNumero * unicoPedido.cantidadMedallon,
        },
      ];
      let valorExtras = 0;
      extras.forEach((extra) => {
        if (extra.valor) {
          valorExtras += extra.valor;
        }
      });

      console.log(valorExtras);

      const unicoPedidoTotal =
        valorExtras + unicoPedido.valor * unicoPedido.cantidad;

      return unicoPedidoTotal;
    },
  },
  methods: {
    deletePedido(pedido) {
      this.$store.dispatch("deleteComidaAction", pedido);
    },

    getExtras(comida) {
      let extras = [];
      if (comida.medallon && comida.cantidadMedallon > 0) {
        extras.push({ name: comida.medallon, value: comida.valorMedallon });
      }
      if (comida.cheddar && comida.cantidadCheddar > 0) {
        extras.push({ name: comida.cheddar, value: comida.valorCheddar });
      }
      if (comida.panceta && comida.cantidadPanceta > 0) {
        extras.push({ name: comida.panceta, value: comida.valorPanceta });
      }
      return extras;
    },

    getUrlWithCart() {
      const URL = "https://wa.me/541132154125?text=";

      if (this.$store.state.comidas.length === 0) {
        return;
      }

      const pedidos = this.$store.state.comidas;

      const pedidosFiltrados = pedidos.map(
        ({
          nombre,
          cantidad,
          medallon,
          cantidadMedallon,
          cheddar,
          cantidadCheddar,
          panceta,
          cantidadPanceta,
        }) => {
          const medallonVal = cantidadMedallon > 0 ? medallon : null
          const cantidadMedallonVal = cantidadMedallon > 0 ? cantidadMedallon : null
          
          return {
            nombre,
            cantidad,
            medallonVal,
            cantidadMedallonVal,
            cheddar,
            cantidadCheddar,
            panceta,
            cantidadPanceta,
          };
        }
      );
      const output = "[%0a %0a" + 
        pedidosFiltrados.map(entry => JSON.stringify(entry)).join(',%0a %0a')
      + "%0a %0a]"
      console.log(output)
      return (
        URL +
        output + '%0a' +
        `precio total: ${this.sumarComida} $`
      );
    },
  },
};
</script>

<style></style>
