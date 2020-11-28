<template>
<div
    class="ma-3 pa-10"
>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('@/assets/slider4.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('@/assets/slider1.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('@/assets/slider2.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-divider></v-divider>

    <h2>Produk Kami</h2>
    <div class="row text-center">
        <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
            <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                            <v-btn v-if="hover" href="/product" class="" outlined>VIEW</v-btn>
                        </div>
                    </v-expand-transition>

                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a href="/product" style="text-decoration: none">{{pro.name}}</a></div>
                    <div>Rp{{pro.price}}</div>
                  </v-card-text>
                </v-card>
            </v-hover>
        </div>
      </div>

</div>
</template>
<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
<script>
export default {
    data: () => ({
        products:[
                {
                    id:1,
                    name:'Sepatu AAAA',
                    price:'9.999,99',
                    src:require('../assets/img/1.jpg')
                },
                {
                    id:2,
                    name:'Sepatu BBBB',
                    price:'9.999,99',
                    src:require('../assets/img/2.jpg')
                },
                {
                    id:3,
                    name:'Sepatu CCCC',
                    price:'9.999,99',
                    src:require('../assets/img/3.jpg')
                },
                {
                    id:4,
                    name:'Sepatu DDDD',
                    price:'9.999,99',
                    src:require('../assets/img/4.jpg')
                },
                {
                    id:5,
                    name:'Sepatu EEEE',
                    price:'9.999,99',
                    src:require('../assets/img/1.jpg')
                },
        ]
    })
}
</script>