<template>
  <div>
    <h2 class="text-green-900">Home in Products</h2>
    <div class="grid grid-cols-4 gap-5 text-amber-600">
      <div v-for="p in products">
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title:'Nuxt Dojo | Merch',
  meta:[
{name:'description',content:'Nuxt3 Merch'}
  ]
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
