<template>
    <div
    class="ma-3 pa-6"
    >
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
<script>
export default {
    data: () => ({
        products:[
            {
                id:1,
                name:'Sepatu AAAAA',
                price:'9.999',
                src:require('../assets/img/1.jpg')
            },
            {
                id:2,
                name:'Sepatu BBBBB',
                price:'9.999',
                src:require('../assets/img/2.jpg')
            },
            {
                id:3,
                name:'Sepatu CCCCC',
                price:'9.999',
                src:require('../assets/img/3.jpg')
            },
            {
                id:4,
                name:'Sepatu DDDDD',
                price:'9.999',
                src:require('../assets/img/4.jpg')
            },
            {
                id:5,
                name:'Sepatu EEEEE',
                price:'9.999',
                src:require('../assets/img/1.jpg')
            },
        ]
    })

}
</script>
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