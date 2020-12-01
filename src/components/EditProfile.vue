<template>
    <div>
        <v-card class="ma-4 pa-4" flat>
            <form class="col-md-6 offset-md-3 col-sm-12 offset-sm-1"> 
                <v-text-field
                    label="Nama"
                    filled
                    rounded
                    dense
                    v-model="form.nama_user"
                ></v-text-field>
                <v-text-field
                    label="No. Handphone"
                    filled
                    rounded
                    dense
                    v-model="form.no_hp"
                ></v-text-field>
                <v-text-field
                    label="Alamat"
                    filled
                    rounded
                    dense
                    v-model="form.alamat"
                ></v-text-field>
                <v-btn
                    depressed
                    color="black"
                    class="white--text"
                    width="100%"
                    @click="update"
                >
                    Simpan
                </v-btn>
            </form>
        </v-card>
        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{error_message}}
        </v-snackbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form: [],
            nama_user: '',
            no_hp: '',
            alamat: '',
            snackbar: false,
            load: false,
            error_message: '',
            color: '',
        }
    },
    methods:{
       readData(){
           var url = this.$api + '/profile/'+localStorage.getItem('id')
           this.$http.get(url, {
               headers:{
                   'Authorization': 'Bearer ' + localStorage.getItem('token')
               }
           }).then(response => {
               this.form = response.data.data
           })
       },
       update(){
           let newData = {
               nama_user: this.form.nama_user,
               no_hp: this.form.no_hp,
               alamat: this.form.alamat,
           }

           var url = this.$api + '/profile/' + localStorage.getItem('id')
           this.load = true,
           this.$http.put(url, newData, {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
           }).then(response => {
               this.error_message = response.data.message;
               this.color = "green",
               this.snackbar = true
               this.load = false,
               this.form = response.data
               this.readData();
           }).catch(error => {
               this.error_message = error.response.data.message;
               this.color = "red"
               this.snackbar = true
               this.load = false
           })
       }
    },
    mounted(){
        this.readData();
    }
}
</script>