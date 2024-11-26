<template>
  <SubstrateComponent>
   <AfterHeadr/>
   <FilterMenu/>
   <ProductsComp :products="productsStore.arr"/>
   <AboutUs/>
   <DeliveryCard/>
   <!-- <AboutBouquets/> -->
   <!-- <NewFile/> -->
 </SubstrateComponent>
</template>
 
<script setup lang="ts">
 const productsStore = useProducts()
 
</script>
 