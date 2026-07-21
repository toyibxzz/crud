<template>
    <div class="container mt-5">

        <h2 class="text-center mb-4">
            CRUD Mahasiswa
        </h2>

        <div class="card shadow">

            <div class="card-body">

                <div class="mb-3">
                    <label>Nama</label>
                    <input class="form-control" v-model="nama" placeholder="Masukkan nama">
                </div>

                <div class="mb-3">
                    <label>Umur</label>
                    <input class="form-control" type="number" v-model="umur" placeholder="Masukkan umur">
                </div>

                <button v-if="editId === null" class="btn btn-primary" @click="simpan">
                    Simpan
                </button>

                <button v-else class="btn btn-warning" @click="updateData">
                    Update
                </button>

            </div>

        </div>


        <div class="card shadow mt-4">
            <div class="card-body">

                <table class="table table-bordered table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(mhs, index) in mahasiswa" :key="mhs.id">

                            <td>{{ index + 1 }}</td>
                            <td>{{ mhs.nama }}</td>
                            <td>{{ mhs.umur }}</td>

                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="editData(mhs)">
                                    Edit
                                </button>

                                <button class="btn btn-danger btn-sm" @click="hapusData(mhs.id)">
                                    Hapus
                                </button>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'

const mahasiswa = ref([])
const nama = ref('')
const umur = ref('')
const editId = ref(null)


async function getMahasiswa() {

    const { data, error } = await supabase
        .from('mahasiswa')
        .select('*')

    if (error) {
        console.log(error)
        return
    }

    mahasiswa.value = data
}

onMounted(() => {
    getMahasiswa()
})

async function simpan() {

    const { error } = await supabase
        .from('mahasiswa')
        .insert([
            {
                nama: nama.value,
                umur: Number(umur.value)
            }
        ])

    if (error) {
        console.log(error)
        return
    }

    nama.value = ''
    umur.value = ''

    getMahasiswa()
}

function editData(mhs) {

    editId.value = mhs.id

    nama.value = mhs.nama

    umur.value = mhs.umur
}

async function updateData() {

    const { error } = await supabase
        .from('mahasiswa')
        .update({
            nama: nama.value,
            umur: Number(umur.value)
        })
        .eq('id', editId.value)

    if (error) {
        console.log(error)
        return
    }

    nama.value = ''
    umur.value = ''
    editId.value = null

    getMahasiswa()
}

async function hapusData(id) {

    const yakin = confirm(
        'Yakin ingin menghapus data ini?'
    )

    if (!yakin) return

    const { error } = await supabase
        .from('mahasiswa')
        .delete()
        .eq('id', id)

    if (error) {
        console.log(error)
        return
    }

    getMahasiswa()
}
</script>