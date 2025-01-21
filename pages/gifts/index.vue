<template>
 <SubstrateComponent>
   <AfterHeadr/>
   <FilterMenu/>
   <ProductsComp :products="products"/>
   <AboutUs/>
   <DeliveryMap :delivery="deliveryStore.arr"/>
   <NewFile/>
   <CustomerReviews :reviews="reviewsStore.arr"/>
 </SubstrateComponent>
 
</template>
 
<script setup lang="ts">
const {data} = await useFetch(`/api/product/type/4`)
const products = ref(data.value?.products)
const reviewsStore = useReviews()
const deliveryStore = useDelivery()
</script>