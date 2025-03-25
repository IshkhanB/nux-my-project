<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
</template>
<script setup lang="ts">
const cartStore = useCart()
onMounted(()=>{
  if (localStorage.cart) {
    cartStore.arr = JSON.parse(localStorage.cart)
  }
})
</script>
<style>
@import url("~/assets/css/reset.css");
</style>

<style lang="scss">
@use "~/assets/css/style.scss";
</style>