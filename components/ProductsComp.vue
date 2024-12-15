<template>

<div class="anchor" style="transform: translateY(-160px);" id="catalog"></div>
  <div class="cards">
    <ProductCard v-for="product of products" :product="product" :key="product.id"/>
  </div>

</template>

<script setup lang="ts">

const {data} = await useFetch(`/api/product`)
const products = ref(data.value?.products)

</script>