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
                  <v-form v-model="valid" ref="form">
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
                        color="#BDD5D7" 
                        class="white--text"
                        width="100%"
                        style="margin-bottom: 10px;"
                        @click="submit"
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

  <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
    {{error_message}}
  </v-snackbar>
</v-app>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      visibility: false,
      email: '',
      password: '',
      load: false,
      error_message: '',
      color: '',
      snackbar: false,
    }
  },
  methods: {
    submit(){
      if(this.$refs.form.validate()){
        this.load = true
        this.$http.post(this.$api + '/login', {
          email: this.email,
          password: this.password
        }).then((response) => {
          localStorage.setItem('id', response.data.user.id);
          localStorage.setItem('token', response.data.access_token);
          this.error_message = response.data.message;
          this.color="green"
          this.snackbar=true;
          this.load = false;
          console.log(JSON.stringify(response));
          this.clear();
          this.$router.push({
            name: 'Home'
          })
        }).catch(error => {
          this.error_message = error.response.data.message;
          this.load = false;
          this.color="red"
          this.snackbar=true;
          localStorage.removeItem('token');
        })
      }
    },
    clear(){
      this.$refs.form.reset();
    }
  }
}
</script>
<style scoped>
    .fill-height{
        background-color: #BDD5D7;
    }
</style>
