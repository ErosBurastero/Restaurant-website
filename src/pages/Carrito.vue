<template>
<div  class="d-flex flex-column align-center px-5 ">
  <v-card max-width="850" min-width="386" class="card orange accent-3 my-4 pa-4 rounded-br-xl ">
   <ul class="my-4" v-for="(comida, index) in $store.state.comidas"
      :key="index">
    <li class="font-weight-bold">
      <div> {{ comida.nombre }}
      <v-icon class="ml-3" @click="deleteFood(comida)">mdi-delete</v-icon>
         </div>
      <div> {{ "CANTIDAD " + comida.cantidad }} </div>
      <div> {{ "PRECIO:" + comida.precio }} </div>
     
     
     </li>
     
      </ul>
      <v-btn class=" my-2" rounded color="black" dark @click="enviarWhatsapp()">ENVIAR PEDIDO</v-btn>
  </v-card>
  </div>

</template>

<script>


export default {
  mounted() {
    const valorGuardado = JSON.parse(localStorage.getItem('Carrito'))  
    if(valorGuardado && valorGuardado.length === 0){
      return
    }

    this.$store.dispatch('setComidasFromStorage', valorGuardado);

    
  },

  methods: {  
    deleteFood(comida) {
       const borrar =  this.$store.state.comidas.splice(this.$store.state.comidas.indexOf(comida), 1);

       if (borrar != 1) {
        return
      }
      
      this.$store.dispatch('deleteComidaAction')

    }

    }
  
  


}

</script>

<style> 

</style>