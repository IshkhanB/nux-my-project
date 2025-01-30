<template>

<div class="anchor" style="transform: translateY(-160px);" id="catalog"></div>
  <div class="cards">
    <ProductsNew v-for="product of products" :product="product" :key="product.id"/>
  </div>

</template>

<script setup lang="ts">
import ProductsNew from './ProductsNew.vue';

defineProps(["products"])

// const {data} = await useFetch(`/api/product/type/1`)
// const products = ref(data.value?.products)
</script>