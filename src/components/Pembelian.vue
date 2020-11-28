<template>
<div>
  <v-card flat>
    <v-card-title>
      <h3 class="font-weight-bold">Daftar Pembelian</h3>
      <v-spacer></v-spacer>
      <v-text-field 
        hide-details 
        label="Outlined"
        outlined
        placeholder="Search" 
        rounded 
        dense
        v-model="search"
        single-line 
        prepend-inner-icon="mdi-magnify" class="shrink">
      </v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="pembelian" :search="search">
      <template v-slot:[`item.actions`]>
        <v-btn
          depressed
          color="error"
          small
          @click="dialog = true"
        >
          Hapus
        </v-btn>
      </template>
    </v-data-table>

  </v-card>

  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <h4 class="font-weight-bold">Konfirmasi</h4>
      </v-card-title>
      <v-card-text>
        Yakin akan menghapus?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dismiss">
          Batal
        </v-btn>
        <v-btn color="blue darken-1" text>
          Ya
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
  

</div>

</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        search: null,
        headers: [
          {
            text: "Gambar",
            align: "start",
            value: "gambar",
          },
          { 
            text: "ID Pembelian",
            value: "id",
            sortable: true,
          },
          { 
            text: "Nama Barang",
            value: "nama",
          },
          {
            text: "Jumlah",
            value: "jumlah",
          },
          {
            text: "Total Bayar",
            value: "totalbayar",
            sortable: true,
          },
          {
            text: "",
            value: "actions",
          }

        ],
        pembelian: [
          {
            id: '01',
            nama: 'Sepatu ABC',
            jumlah: 1,
            totalbayar: 9999,
          },
          {
            id: '02',
            nama: 'Sepatu XXXX',
            jumlah: 2,
            totalbayar: 9999,
          },
          {
            id: '03',
            nama: 'Sepatu WKWK',
            jumlah: 3,
            totalbayar: 9999,
          },
          {
            id: '04',
            nama: 'Sepatu ASD',
            jumlah: 4,
            totalbayar: 9999,
          },

        ],
      }
    },
    methods: {
      dismiss(){
        this.dialog = false
      },
    }
  }
</script>