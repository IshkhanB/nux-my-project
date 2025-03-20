<template>
  <div v-if="cartStore.visible" class="cart-cont ">
    <button class="but-back" @click="cartStore.visible = false">X </button>
    <div>
     
    </div>
  </div>
</template>
<script setup lang="ts">
const cartStore = useCart()
</script>
<style scoped>
.cart-cont{
  position: fixed;
  transform: translateY(100px);
  top: 0;
  right: 0;
  width: 30%;
  height: 80%;
  background-color: antiquewhite;
  z-index: 10;
  border-radius: 20px;
  border-left:1px solid rgb(170, 152, 152);
}
.but-back{
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
}
</style>