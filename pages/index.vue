<template>
 <SubstrateComponent>
  <AfterHeadr/>
  <FilterMenu/>
  <ProductsComp :products="productsStore.arr"/>
  <AboutUs/>
  <DeliveryMap :delivery="deliveryStore.arr"/>
  <CustomerReviews :reviews="reviewsStore.arr"/>
</SubstrateComponent>
</template>

<script setup lang="ts">
const productsStore = useProducts()
const reviewsStore = useReviews()
const deliveryStore = useDelivery()
</script>