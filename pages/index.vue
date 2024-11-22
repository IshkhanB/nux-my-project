<template>
 <SubstrateComponent>
  <AfterHeadr/>
  <FilterMenu/>
  <ProductsComp :products="productsStore.arr"/>
  <AboutUs/>
  <DeliveryCard/>
  <!--<NewFile></NewFile> -->
</SubstrateComponent>
</template>

<script setup lang="ts">
const productsStore = useProducts()

</script>


<style>

</style>
