<template>
    <div
    class="ma-12 pa-12"
    >
    <div class="container">
      <v-hover v-slot:default="{ hover }">
        <div class="photo-container">
          <v-img :src="'http://127.0.0.1:8000/'+data.foto_user"  >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              <v-btn v-if="hover" class="" outlined @click="dialog = true">Ubah</v-btn>
            </div>
          </v-expand-transition>
          </v-img>
        </div>
      </v-hover>


        <h3 class="title" >{{ data.nama_user }}</h3>
        <p class="category">{{ data.email }}</p>

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

        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <h4 class="font-weight-bold">Upload Gambar</h4>
                </v-card-title>
                <form method="POST" enctype="multipart/form-data">
                    <input type="file" @change="imageSelected" class="custom-file-input">
                    <v-spacer></v-spacer>

                </form>
                <v-card-actions>
                  <v-btn color="red darken-1" text @click="dismiss" >
                    Batal
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="upload">
                    Ya
                  </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{error_message}}
        </v-snackbar>

    </div>

    
</template>
<script>
export default {
    data(){
      return{
        activeTab: true,
        data:[],
        nama_user: '',
        email: '',
        foto_user: '',
        dialog: false,
        error_message: '',
        color: '',
        snackbar: false,
      }
    },
    methods:{
      imageSelected(e){
        console.log(e.target.files[0])
        var fileReader = new FileReader()

        fileReader.readAsDataURL(e.target.files[0])

        fileReader.onload = (e) => {
          this.data.foto_user  = e.target.result
        }

        console.log(this.data)
      },
      upload(){
        let newData = {
          foto_user: this.data.foto_user
        }

        // Route::put('profile/upload/{id}', 'Api\ProfileController@upload');
        var url = this.$api + '/profile/upload/' + localStorage.getItem('id')
        this.$http.put(url, newData, {
          headers:{
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(response => {
          this.error_message = response.data.message
          this.color = "green"
          this.snackbar = true
          this.data = response.data
          this.readData()
          this.dismiss()
        }).catch(error => {
          this.error_message = error.response.data.message
          this.color = "red"
          this.snackbar = true
        })
      },
      readData(){
        var url = this.$api + '/profile/'+localStorage.getItem('id');
        this.$http.get(url, {
          headers:{
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(response => {
          this.data = response.data.data
          // this.dialog = false
        })
      },
      dismiss(){
        this.dialog = false
      },
    },
    mounted(){
      this.readData();
    },

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
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .8;
        position: absolute;
        width: 100%;
    }
</style>