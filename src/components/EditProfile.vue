<template>
    <div>
        <v-card class="ma-4 pa-4" flat>
            <form class="col-md-6 offset-md-3 col-sm-12 offset-sm-1"> 
                <v-text-field
                    label="Nama"
                    filled
                    rounded
                    dense
                ></v-text-field>
                <v-text-field
                    label="No. Handphone"
                    filled
                    rounded
                    dense
                ></v-text-field>
                <v-text-field
                    label="Alamat"
                    filled
                    rounded
                    dense
                ></v-text-field>
                <v-btn
                    depressed
                    color="black"
                    class="white--text"
                    width="100%"
                >
                    Simpan
                </v-btn>
            </form>
        </v-card>
    </div>
</template>
<script>
export default {
    
}
</script>