<template>
 <SubstrateComponent>
  <AfterHeadr/>
  <FilterMenu/>
  <!-- <ProductsNew/> -->
  <ProductsComp :products="products"/>
  <AboutUs/>
  <DeliveryMap :delivery="deliveryStore.arr"/>
  <HowPay/>
  <CustomerReviews :reviews="reviewsStore.arr"/>
</SubstrateComponent>
</template>

<script setup lang="ts">

const {data} = await useFetch(`/api/product`)
const products = ref(data.value?.products)
const reviewsStore = useReviews()
const deliveryStore = useDelivery()
</script>