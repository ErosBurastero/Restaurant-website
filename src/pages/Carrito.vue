<template>
<div>
   <ul v-for="(comida, index) in $store.state.comidas"
   :key="index">
    <li>
     {{ comida.nombre }}
     {{ comida.precio }}
     {{ comida.cantidad }}
     </li>
        
      </ul>
   
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
  }
  


}
</script>

<style> 

</style>