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
                        v-model="form.nama" 
                        label="Nama" type="nama" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="form.nohp" 
                        label="No. Handphone" type="text" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="form.alamat" 
                        label="Alamat" type="text" 
                        filled
                        rounded
                        dense />
                    <v-text-field 
                        v-model="form.email" 
                        label="Email" type="email" 
                        filled
                        rounded
                        dense />
                    <v-text-field
                        id="password"
                        v-model="form.password"
                        label="Password"
                        filled
                        rounded
                        dense
                    />
                    <div class="d-flex mt-5">
                      <v-btn 
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
</v-app>

</template>

<script>
export default {
  data() {
    return {
      visibility: false,
      form: {
        nama: '',
        nohp: '',
        alamat: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>
    .fill-height{
        background-color: #BDD5D7;
    }
</style>
