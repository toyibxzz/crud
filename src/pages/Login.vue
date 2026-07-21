<template>
    <div class="container mt-5" style="max-width:400px">

        <h2 class="mb-4 text-center">
            Login
        </h2>

        <input class="form-control mb-3" placeholder="Email" v-model="email">

        <input class="form-control mb-3" type="password" placeholder="Password" v-model="password">

        <button class="btn btn-primary w-100" @click="login">
            Login
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')

async function login() {

    const { error } =
        await supabase.auth.signInWithPassword({

            email: email.value,
            password: password.value

        })

    if (error) {

        alert(error.message)

        return

    }

    alert("Login berhasil")

}
</script>