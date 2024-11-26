<template>
 <SubstrateComponent>
  <AfterHeadr/>
  <FilterMenu/>
  <ProductsComp :products="productsStore.arr"/>
  <AboutUs/>
  <DeliveryCard/>
  <!--<NewFile></NewFile> -->
  <CustomerReviews :products="productsStore.arr"/>
</SubstrateComponent>
</template>

<script setup lang="ts">
const productsStore = useProducts()

</script>


<style>

</style>
