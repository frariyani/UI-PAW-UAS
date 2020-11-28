<template>
    <div
    class="ma-12 pa-12"
    >
    <div class="container">
        <div class="photo-container">
          <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="" />
        </div>
        <h3 class="title">user's name</h3>
        <p class="category">useremail@coreal.com</p>

        <v-divider></v-divider>
        </div>
        
        <v-tabs
          centered
          v-model="activeTab"
        >
          <v-tab to="pembelian" active-class>Pembelian</v-tab>
          <v-tab to="penjualan">Penjualan</v-tab>
          <v-tab to="editprofile">Edit Profile</v-tab>

        </v-tabs>
        <v-tabs-items v-model="activeTab">
          <v-tab-item id="pembelian">
            <router-view></router-view>
          </v-tab-item>
          <v-tab-item id="penjualan">
            <router-view></router-view>
          </v-tab-item>
          <v-tab-item id="editprofile">
            <router-view></router-view>
          </v-tab-item>
        </v-tabs-items>

    </div>

    
</template>
<script>
export default {
    data: () => ({
      activeTab: true,
    })
}
</script>
<style scoped>
    .photo-container{
        width: 123px;
        height: 123px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
    }
    .title{
        text-align: center;
        margin-top: 30px;
    }
    .category{
        text-align: center;
    }
</style>