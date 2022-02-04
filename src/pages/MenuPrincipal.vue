<template>
  <div>
    <v-carousel height="700" class="slider px-5 my-16 d-flex flex-column align-center " hide-delimiters > 
    <v-carousel-item  
      v-for="(item,i) in items"  :key="i" >
      <v-img :src="item.src" max-height="700" contain></v-img>
      
      </v-carousel-item>
    
    </v-carousel>

    
  
            <v-card v-for="(texto, index) in text"
            :key="index" max-width="100%"
             class="grey d-flex  my-4 pa-4 rounded-br-xl" 
            >
              
               <v-img  max-height="500" max-width="700"  contain :src="texto.url"></v-img>
               <div class="pa-12 display-1">
                 
                <div class="my-2 font-italic" >{{ texto.frase }}</div>   
                <div class="my-2 font-italic" >{{ texto.frase1 }}</div>   
                <div class="my-2 font-italic" >{{ texto.frase2 }}</div>   
                <div class="my-2 font-italic" >{{ texto.frase3 }}</div>   
                

               </div>
            </v-card>
           


    
    
  </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'foto3.jpg',
          },
          {
            src: 'fotoPrincipal.jpeg',
          },
          {
            src: 'foto3.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

        text:  [{
           frase: "Deliciosas y jugosas son las hamburguesas de nuestro menú, su sabor guarda los secretos de la cocina familiar.",
           frase1: "Con el primer bocado ya te sentirás en el cielo, será una experiencia del otro mundo.",
           frase2: "Si quieres comer balanceado, no dejes de probar nuestras hamburguesas: proteínas, carbohidrato, grasas y vegetales, en cada bocado.",
           frase3: "Ven y siéntate en nuestra mesa, te preparamos las mejores burgers de la ciudad. Nuestras hamburguesas serán las nuevas consentidas de tu paladar.",
           

          url: "burgerpresentacion.jpg"
        }]
      }
    },
  }
</script>


<style scoped>



</style>

