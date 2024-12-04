<template>
 <SubstrateComponent>
   <AfterHeadr/>
   <FilterMenu/>
   <ProductsComp :products="productsStore.arr"/>
   <AboutUs/>
   <DeliveryMap/>
   <NewFile/>
   <CustomerReviews :reviews="reviewsStore.arr"/>
 </SubstrateComponent>
 
</template>
 
<script setup lang="ts">
const productsStore = useProducts()
const reviewsStore = useReviews()
</script>