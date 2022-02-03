<template>
  <div>
    <v-carousel height="700" class="slider px-5 my-16 fixed d-flex flex-column align-center " hide-delimiters > 
    <v-carousel-item  
      v-for="(item,i) in items"  :key="i" >
      <v-img :src="item.src" max-height="700" contain></v-img>
      
      </v-carousel-item>
    
    </v-carousel>

    <div></div>
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
      }
    },
  }
</script>


<style scoped>

</style>

