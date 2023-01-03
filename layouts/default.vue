<template>
  <div class="bg-pink-200">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink
          to="/"
          class="font-bold text-orange-800 text-decoration-line decoration-cyan-400 decoration-2"
          >Nuxt Dojo</NuxtLink
        >
        <ul class="flex gap-4">
          <li class="text-green-300">
            <NuxtLink
              class="text-decoration-line decoration-cyan-400 decoration-2"
              to="/"
              >Home</NuxtLink
            >
          </li>
          <li class="text-amber-800">
            <NuxtLink
              class="text-decoration-line decoration-cyan-400 decoration-2"
              to="/about"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="text-decoration-line decoration-cyan-400 decoration-2 btn"
              to="/products"
              >Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="text-decoration-line decoration-cyan-400 decoration-2 btn"
              to="/products/abc"
              >Products abc</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <!--output the pages-->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: lightseagreen;
}
</style>
