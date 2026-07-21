<template>
  <div class="container mt-4">

    <nav class="mb-4">

      <RouterLink to="/" class="btn btn-primary me-2">
        Home
      </RouterLink>

      <RouterLink to="/mahasiswa" class="btn btn-success me-2">
        Mahasiswa
      </RouterLink>

      <RouterLink to="/tentang" class="btn btn-warning me-2">
        Tentang
      </RouterLink>

      <RouterLink to="/login" class="btn btn-secondary">

        Login

      </RouterLink>

    </nav>

    <RouterView />

  </div>
</template>