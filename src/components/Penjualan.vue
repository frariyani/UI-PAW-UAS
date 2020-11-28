<template>
<div>

  <!-- Buat table barang -->

  <v-card flat>
    <v-card-title>
      <h3 class="font-weight-bold">Daftar Barang</h3>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        color="black"
        class="white--text" 
        style="margin-right:30px;"
        @click="dialogtambah = true"
      >
        Jual
      </v-btn>
      <v-text-field 
        hide-details 
        label="Outlined"
        outlined
        placeholder="Search" 
        rounded 
        dense
        v-model="searchbarang"
        single-line 
        prepend-inner-icon="mdi-magnify" class="shrink">
      </v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="barang" :search="searchbarang">
      <template v-slot:[`item.actions`]>
        <v-btn
          depressed
          color="blue"
          class="white--text" 
          small
          style="margin-right:15px;"
          @click="dialogedit = true"
        >
          Edit
        </v-btn>
        <v-btn
          depressed
          color="error"
          class="white--text" 
          small
          @click="dialog = true"
        >
          Hapus
        </v-btn>

      </template>


    </v-data-table>

  </v-card>

  <v-dialog v-model="dialogedit" persistent max-width="600px">
    <v-card class="ma-0 pa-4">
      <v-card-title>
        <h4 class="font-weight-bold">Edit</h4>
      </v-card-title>

        <form>
          <v-text-field
            label="Nama Barang"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Harga"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Ukuran"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Gambar"
            filled
            rounded
            dense
            type="file"
          ></v-text-field>
          <v-textarea
            label="Deskripsi Barang"
            filled
            rounded
            dense
          ></v-textarea>
        </form>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dismiss">
          Batal
        </v-btn>
        <v-btn color="blue darken-1" text>
          Simpan
        </v-btn>       
      </v-card-actions>
    </v-card>
  </v-dialog>

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

  <v-dialog v-model="dialogtambah" persistent max-width="600px">
    <v-card class="ma-0 pa-4">
      <v-card-title>
        <h4 class="font-weight-bold">Tambah</h4>
      </v-card-title>
        <form>
          <v-text-field
            label="Nama Barang"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Harga"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Ukuran"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="Gambar"
            filled
            rounded
            dense
            type="file"
          ></v-text-field>
          <v-textarea
            label="Deskripsi Barang"
            filled
            rounded
            dense
          ></v-textarea>
        </form>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dismiss">
          Batal
        </v-btn>
        <v-btn color="blue darken-1" text>
          Simpan
        </v-btn>       
      </v-card-actions>
    </v-card>

  </v-dialog>

  <!-- Buat tabel pesanan -->
  <v-card
    style="margin-top:50px;"
    flat
  >
      <v-card-title>
      <h3 class="font-weight-bold">Pesanan</h3>
      <v-spacer></v-spacer>
      <v-text-field 
        hide-details 
        label="Outlined"
        outlined
        placeholder="Search" 
        rounded 
        dense
        v-model="searchpesanan"
        single-line 
        prepend-inner-icon="mdi-magnify" class="shrink">
      </v-text-field>
    </v-card-title>
    <v-data-table :headers="headers2" :items="pesanan" :search="searchpesanan">
      <template v-slot:[`item.aksi`]>
        <v-btn
        depressed
        color="error"
        small
        @click="dialogbatal = true"
        >
          Cancel
        </v-btn>
      </template>
      <template v-slot:[`item.status`]>
        <v-col cols="4">
          <v-select
            v-model="e1"
            :items="statusPesanan"
            menu-props="auto"
            label="Status"
            hide-details
            single-line
          ></v-select>
      </v-col>
      </template>
    </v-data-table>
  </v-card>

  
  <v-dialog v-model="dialogbatal" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <h4 class="font-weight-bold">Konfirmasi</h4>
      </v-card-title>
      <v-card-text>
        Yakin akan membatalkan pesanan ini?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dismiss">
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
        searchbarang: null, 
        searchpesanan: null,
        dialog: false,
        dialogedit: false,
        dialogtambah: false,
        dialogbatal: false,
        statusPesanan: ['Dikemas', 'Dikirim'],
        headers2:[
          {
            text: "Nama Barang",
            align: "start",
            value: "namabarang"
          },
          {
            text: "Nama Pembeli",
            value: "namapembeli"
          },
          {
            text: "Alamat",
            value: "alamat",
          },
          {
            text: "Jumlah",
            value: "jumlah",
          },
          {
            text: "Status",
            value: "status",
          },
          {
            text: "",
            value: "aksi"
          }
        ],
        headers:[
          { 
            text: "Gambar",
            align: "start",
            value: "gambar"
          },
          {
            text: "Nama Barang",
            value: "nama",
          },
          {
            text: "Harga",
            value: "harga",
            sortable: true,
          },
          {
            text: "Ukuran",
            value: "ukuran",
          },
          {
            text: "Deskripsi",
            value: "deskripsi",
          },
          {
            text: "",
            value: "actions",
          }
        ],
        barang: [
          {
            nama: 'Sepatu ABC',
            harga: '9.999,99',
            ukuran: 40,
            deskripsi: 'lorem ipsum',
          },
          {
            nama: 'Sepatu XXXX',
            harga: '9.999,99',
            ukuran: 40,
            deskripsi: 'lorem ipsum',
          },
          {
            nama: 'Sepatu QQQQ',
            harga: '9.999,99',
            ukuran: 40,
            deskripsi: 'lorem ipsum',
          },
          {
            nama: 'Sepatu ASD',
            harga: '9.999,99',
            ukuran: 40,
            deskripsi: 'lorem ipsum',
          },
        ],
        pesanan: [
          {
            namabarang: "Sepatu XXXX",
            namapembeli: "Mark",
            jumlah: 1,
            alamat: "Jl. XXXX",
          },
          {
            namabarang: "Sepatu ABCD",
            namapembeli: "Joseph",
            jumlah: 1,
            alamat: "Jl. DEFG",
          },
          {
            namabarang: "Sepatu EFGH",
            namapembeli: "Harry",
            jumlah: 1,
            alamat: "Jl. ZZZZ",
          },
          {
            namabarang: "Sepatu QQQQ",
            namapembeli: "Choc",
            jumlah: 1,
            alamat: "Jl. ABCDF",
          }
        ]
      }
    },
    methods:{
      dismiss(){
        this.dialog = false,
        this.dialogedit = false,
        this.dialogtambah = false,
        this.dialogbatal = false
      },
    }
  }
</script>