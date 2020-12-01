<template>
<v-app>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="5" md="4">
        <v-card class="elevation-12 __b-20">
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3 class="headline">
                    Register
                  </h3>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12" class="align-center">
                  <v-form>
                    <v-text-field 
                        v-model="nama_user" 
                        label="Nama" type="nama" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="no_hp" 
                        label="No. Handphone" type="text" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="alamat" 
                        label="Alamat" type="text" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="email" 
                        label="Email" type="email" 
                        filled
                        rounded
                        dense />
                    <v-text-field
                        id="password"
                        type="password"
                        v-model="password"
                        label="Password"
                        filled
                        rounded
                        dense
                    />
                    <div class="d-flex mt-5">
                      <v-btn 
                        @click="save"
                        color="#C0D7D1" 
                        class="white--text"
                        width="100%"
                        style="margin-bottom:10px;">
                        Register
                      </v-btn>
                    </div>
                    <p>Sudah punya akun?
                      <a
                        text color="primary"
                        href="/login"
                      >
                        Login disini
                      </a>
                    </p>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
    {{error_message}}
  </v-snackbar>
</v-app>

</template>

<script>
export default {
  data() {
    return {
      visibility: false,
      nama_user: '',
      no_hp: '',
      alamat: '',
      email: '',
      password: '',
      user: new FormData,
      load: false,
      error_message: '',
      color: '',
      snackbar: false,
    }
  },
  methods: {
    save(){
      this.user.append('nama_user', this.nama_user);
      this.user.append('no_hp', this.no_hp);
      this.user.append('alamat', this.alamat);
      this.user.append('email', this.email);
      this.user.append('password', this.password);

      var url = this.$api + '/register'
      this.load = true
      this.$http.post(url, this.user, {
      }).then(response => {
        this.error_message = response.data.message;
        this.color="green";
        this.snackbar= true;
        this.load = false;
      }).catch(error => {
        this.error_message = error.response.data.message;
        this.color="red";
        this.snackbar=true;
        this.load = false;
      })
      
      
    }
  }
}
</script>
<style scoped>
    .fill-height{
        background-color: #BDD5D7;
    }
</style>
