<template>
  <Head><Title>
    Nuxt Dojo | {{product.title}}
    </Title>
    <Meta name:description content:product.description/>
  </Head>
  <!--Replace this with the component-->
  <ProductDetails :product="product" />
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// Fetch the product
const { data: product } = await useFetch(uri, { key: id });
//Add code to get error for the product search
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found",
    fatal: true,
  });
}
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
