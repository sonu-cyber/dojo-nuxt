<template>
  <div>
    <!-- <header>
      <nav>
        <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home | </NuxtLink>
          </li>
          <li><NuxtLink to="/about">About | </NuxtLink></li>
          <li><NuxtLink to="/products">Products | </NuxtLink></li>
        </ul>
      </nav>
    </header> -->
    <h2 class="text-amber-500">About Page</h2>
    <p class="uppercase font-serif text-emerald-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat,
      asperiores amet, facere numquam sunt consequatur aperiam voluptas
      cupiditate soluta nemo, modi cumque distinctio suscipit repellendus
      necessitatibus. Ratione, quaerat minima.
    </p>
    <h3>API REQUEST DATA FROM CURRENCY WEBSITE:{{data}}</h3>
    <p>Message:{{}}</p>
  </div>
</template>

<script setup>
  const {data} = useFetch("/api/currency/INR");  
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
