<template>
  <SubstrateComponent>
   <AfterHeadr/>
   <FilterMenu/>
   <div class="cards">
     <ProductCard v-for="product of productsStore.arr" :product="product" :key="product.id" /> 
     
   </div>
   <AboutUs/>
   <DeliveryCard/>
   <div> 
     <NuxtPage/>
   </div>
   <NewFile/>
 </SubstrateComponent>
 </template>
 
 <script setup lang="ts">
 const productsStore = useProducts()
 
 </script>
 