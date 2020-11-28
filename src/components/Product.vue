<template>
  <div
  class="ma-6 pa-6"
  >
    <v-card
    >
        <v-container>
            <div class="row">
                <div class="productPhoto">
                    <v-img 
                        :src="require('../assets/img/5.jpg')"
                    />
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12">
                    <div class="pl-6">
                        <p class="display-1 mb-0">Nama Produk</p>
                            <v-card-actions class="pa-0">
                                <p class="headline font-weight-light pt-3">Rp100.000,-</p>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                            <p class="subtitle-1 font-weight-thin">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
                            </p>
                            <p class="title">Jumlah</p>
                            <v-text-field
                                outlined
                                style="width:100px"
                                :value="1"
                                type="number"
                                dense
                            ></v-text-field>
                            <v-btn 
                                class="white--text" 
                                color="#BDD5D7"
                                tile 
                                dense
                            >
                                <v-icon>mdi-cart</v-icon> 
                                ADD TO CART
                            </v-btn>
                    </div>
                </div>
            </div>
        </v-container>
    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            //
        }),
    }
</script>
<style scoped>
    .productPhoto{
        width: 250px;
        height: 350px;
    }
</style>
