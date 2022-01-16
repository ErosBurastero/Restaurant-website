<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="#454"
      centered
      dark
      icons-and-text
      
      
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab class="black--text" href="/hamburguesas">
        Recents
        <v-icon>mdi-food</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab class="black--text" href="/">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

  </v-card>
</template>

<script>
  export default {
      
    data () {
      return {
        tab: null,
      }
    },
  }
</script>