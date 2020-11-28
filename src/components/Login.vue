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
                    Login
                  </h3>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12" class="align-center">
                  <v-form>
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
                        color="#BDD5D7" 
                        class="white--text"
                        width="100%"
                        style="margin-bottom: 10px;"
                      >
                        Login
                      </v-btn>
                    </div>
                    <p text color="primary">
                        Belum punya akun?
                        <a href="/register">Register disini</a>
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
