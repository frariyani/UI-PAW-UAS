<template>
  <div
  class="ma-12 pa-8"
  >
    <h4>Shopping Cart</h4>
    <v-row>
        <v-col :cols="12" md="10" sm="12">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th style="width:20%" class="text-center">Gambar</th>
                            <th style="width:15%" >Nama Barang</th>
                            <th style="width:8%">Ukuran</th>
                            <th style="width:8%">Jumlah</th>
                            <th style="width:10%">Total Harga</th>
                            <th style="width:10%"></th>
                        </tr>
                    </thead>

                    <!--
                    <transition-group name="list-shopping-cart" tag="tbody">
                        <app-cart-item
                        v-for="cartItem in cartItemList"
                        :cartItem="cartItem"
                        :key="cartItem.id"
                        ></app-cart-item>
                    </transition-group>-->

                    <tbody>
                        <tr>
                            <td>
                                <div class="photo-container">
                                    <img src="@/assets/img/1.jpg">
                                </div>  
                            </td>
                            <td>
                                Sepatu XXXX
                            </td>
                            <td>
                                40
                            </td>
                            <td>
                                <v-text-field
                                type="number"
                                value="1"
                                ></v-text-field>
                            </td>
                            <td>
                                Rp9.999,99
                            </td>
                            <td>
                                <a>X</a>
                            </td>
                        </tr>
                                                <tr>
                            <td>
                                <div class="photo-container">
                                    <img src="@/assets/img/1.jpg">
                                </div>  
                            </td>
                            <td>
                                Sepatu XXXX
                            </td>
                            <td>
                                40
                            </td>
                            <td>
                                <v-text-field
                                type="number"
                                value="1"
                                ></v-text-field>
                            </td>
                            <td>
                                Rp9.999,99
                            </td>
                            <td>
                                <a>X</a>
                            </td>
                        </tr>                        
                        <tr>
                        </tr>

                    </tbody>


                    <tfoot>
                        <td colspan="4" class="d-none d-sm-table-cell"></td>
                        <td class="d-none d-sm-table-cell text-center">
                            <strong>Total: Rp9.999,99</strong>
                            <v-btn
                                class="white--text" 
                                depressed
                                color="#C0D7D1"
                            >
                                Checkout
                            </v-btn>
                        </td>

                    </tfoot>


                </template>
            </v-simple-table>
        </v-col>
    </v-row>




  </div>
</template>
<script>
    export default {
        data: () => ({
            //
        })
    }
</script>
<style scoped>
    .photo-container{
        width: 123px;
        height: 123px;
        border-radius: 2%;
        overflow: hidden;
        margin: 10px auto;
    }
</style>

