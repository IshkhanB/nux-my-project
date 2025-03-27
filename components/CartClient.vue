<template>
  <div v-if="cartStore.visible" class="cart-cont ">
    <button class="but-back" @click="cartStore.visible = false">X </button>
    <p class="your_order">Ваш заказ</p>
    <hr>
    <ul class="content_cart">
      <li v-for="el of cartStore.arr" :key="el.id">{{ el.title }} {{ el.count }} {{ el.count*el.price }}RUB</li>

    </ul>
    <hr>
    <p  class="sum_cart">Сумма: {{ cartStore.sum }} </p>
    <button class="place_order">Оформить заказ</button>
  </div>
</template>
<script setup lang="ts">
const cartStore = useCart()
</script>
<style scoped>
.cart-cont{
  margin: 0 auto;
  padding: 40px;
  position: fixed;
  /* transform: translateY(100px); */
  top: 0;
  right: 0;
  width: 560px;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  border-radius: 20px;
  border-left:1px solid rgb(170, 152, 152);
  z-index: 999999;
}
.but-back{
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  padding: 20px;
}
.contener-cart{
  margin: 0 auto;
  padding: 20px;
}
.your_order{
  width: 100%;
  font-size: 36px;
  margin: 0 auto;
  padding: 10px;
}
.sum_cart{
  margin-left: 60%;
  font-size: 26px;
}
.place_order{
  color: #ffffff;
  background-color: #595959;
  /* padding: 10px 20%; */
  margin: 10px auto;
  width: 100%;
  height: 60px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  font-weight: 400;
  border-radius: 10px;

}
</style>