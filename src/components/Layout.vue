<template>
<v-app>
    <v-toolbar
    class="mainHeader"
    max-height="50px"
    flat
    >
      <v-toolbar-title>
          <v-img :src="require('@/assets/coreal.png')" />
      </v-toolbar-title>

      <v-toolbar-items>  
        <v-btn text href="/">
            Home
        </v-btn>
        <v-btn text href="/shoes">
            Shoes
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-text-field 
        hide-details 
        label="Filled" 
        placeholder="Search" 
        filled 
        rounded 
        dense 
        single-line 
        prepend-inner-icon="mdi-magnify" class="shrink">
      </v-text-field>

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </template>
        <v-card
          class="mx-auto"
          max-width="200px"
          outlined
          padding="10px"
        >
          <v-list-item href="/profile">
            <v-list-item-title >
              My Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title >
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-card>
      </v-menu>
      <v-btn icon href="/shoppingcart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view/>
    <v-footer
      :padless="true"
      absolute
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>CoReal Group</strong>
        </v-card-text>
      </v-card>
    
    </v-footer>
</v-app>    
</template>
<script>
export default {
  name: "Layout",
  data(){
    return{

    }
  },
  methods:{
    logout(){
      localStorage.removeItem('token');
      this.$router.replace('/login');
    }
  }
}
</script>