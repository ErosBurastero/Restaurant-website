<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black white--text text-center"
    >
      <v-card-text>
        <v-btn href="https://www.instagram.com/thegangstershamburg/?hl=es-la" target="blank"
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
            <div class="subtitle-1"> Somos THE GANGSTER HAMBURG, una hamburguesería artesanal ubicada en el corazón de La Tablada. Implementamos nuestra pasión por la cocina en cada uno de nuestros platos. Les ofrecemos disfrutar de la mejor variedad gastronomica de la zona. Vení a comer y a probar un trago con nosotros!! <br> y NO olvides seguirnos en nuestras redes sociales!  </div> 
            <div class="d-flex justify-center">  <br><br> HORARIOS DE ATENCION / HORARIOS DE COCINA:<br> MARTES A DOMINGO: 18:00PM hasta las 03:00 AM / Cocina hasta las 00:30 <br>LUNES: Cerrado </div>
              

          

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong> 2021 </strong> — <strong>THE GANGSTER HAMBURG — LA TABLADA, ALVEAR 4011  — RESERVAS O CONSULTAS AL 11-3215-4125  <a href="https://wa.me/541132154125?text=Hola%20quisiera%20hacer%20una%20reserva..." target="blank"><v-icon>mdi-whatsapp</v-icon></a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
a:visited {
    color: black;
}
</style>