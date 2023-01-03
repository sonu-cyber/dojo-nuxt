<template>
  <div class="bg-teal-100">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="text-amber-500 font-bold text-2xl"
          >Nuxt Dojo Merch</NuxtLink
        >
      </nav>
    </header>
    <!--output the pages-->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="text-pink-600 font-semibold flex-gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: lightseagreen;
}
</style>
