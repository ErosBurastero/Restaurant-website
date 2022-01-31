<template>
<div>
  <v-card max-width="850" class="card orange accent-3 my-4 pa-4 rounded-br-xl ">
   <ul class="my-4" v-for="(comida, index) in $store.state.comidas"
   :key="index">
    <li class="font-weight-bold">
      <div> {{ comida.nombre }}
      <v-icon class="ml-3" @click.prevent="deleteFood(comida)">mdi-delete</v-icon>
         </div>
      <div> {{ "CANTIDAD " + comida.cantidad }}  </div>
      <div> {{ "PRECIO:" + comida.precio }} </div>
     
     
     </li>
     
   
        
      </ul>
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
    this.$store.dispatch('deleteComidaAction', )
  },

  methods: {  
    deleteFood() {
      this.comida.slice(0, 2)
    }
    
    }
  
  


}

</script>

<style> 

</style>