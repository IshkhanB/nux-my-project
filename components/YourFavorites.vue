<template>
  <div v-if="cartStore.visible"  class="cart-cont">
    <div class="cart-header">
      <p class="your_order">Избраное</p>
      <button class="but-back" @click="cartStore.visible = false"> X </button>
    </div>

    <hr class="divider">

    <ul class="content_cart">
      <li class="cart-item" v-for="el, i of cartStore.arr" :key="el.id">
        <!-- {{ el.title }} {{ el.count }} {{ el.count*el.price }}RUB <button class="but-back1" @click="cartStore.del">X</button> -->

        <div class="item-image">
          <NuxtImg preset="cover" v-if="el.img.length" :src=" 'img/'+el.img[0].img" :alt="el.title" class="product-image"/>
          <div v-else class="image-placeholder"></div>
        </div>
        <div class="item-details">
          <span class="item-title">{{ el.title }}</span>
          <span class="item-quantity">{{ el.count }} * {{el.price }}</span>
        </div>
        <div class="item-total">{{ el.count * el.price }}</div>
        <div class="item-count">
          <button class="count-but1" @click="el.count++"></button>
          <button class="count-but2" :style="el.count==1 ? 'filter:grayscale(1);' : ''"  @click="minus(el)"></button>
          <!-- <button class="count-but2" style="" v-else></button>  -->
          <!-- background: url(/icon/minus.png) center / cover; -->
        </div>
        <button class="remove-btn" @click="cartStore.remove(i)">×</button>
      </li>
    </ul>
    
    <hr class="divider">
    
    <!-- <p  class="sum_cart">Сумма: {{ cartStore.sum }} </p>
    <button class="place_order">Оформить заказ</button> -->
    <div class="cart-footer">
      <p class="total-sum">Итого: {{ cartStore.sum }}</p>
      <button class="checkout-btn">Оформить заказ</button>
    </div>
  </div>
</template>
<script setup lang="ts">
const cartStore = useCart()
const minus = (el:any)=>{
  if (el.count>1) el.count--
}
// if(!cartStore.arr) cartStore.visible = true
  
// console.log(cartStore.arr)
// console.log(cartStore)
</script>
<style scoped>
.cart-cont{
  position: fixed;
  right: 20px;
  top: 20px;
  width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
} 
.but-back{
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 5px 10px;
  font-weight: 700;
}
.but-back:hover{
  color: #010101;
}
.your_order{
  margin: 0;
  font-size: 20px;
  font-weight: 700;
}
.divider{
  border: none;
  border-top: 2px solid #cdcdcd;
  margin: 15px 0;
}
.content_cart{
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 550px;
  overflow-y: scroll;

}
.cart-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #cdcdcd;
}
.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  flex-shrink: 0;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.image-placeholder {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 6px;
}
.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.item-title {
  font-weight: 500;
  margin-bottom: 5px;
}

.item-quantity {
  font-size: 14px;
  color: #666;
}
.item-quantity::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.item-total {
  margin: 0 15px;
  font-weight: 600;
  white-space: nowrap;
}
.item-total::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.remove-btn {
  display: block;
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
}

.remove-btn:hover {
  color: #ff5252;
}

.cart-footer {
  margin-top: 15px;
}

.total-sum {
  text-align: right;
  font-weight: 600;
  font-size: 16px;
  margin: 10px 0;
}
.total-sum::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  /* transition: background 0.2s; */
}

.checkout-btn:hover {
  background: #3d8b40;
}
.item-count{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.count-but1{
  background-image: url(/public/icon/plus2.png);
  background-size: 12px; 
  width: 12px;
  height: 12px;
  /* background-color: #8b3d3d; */
  margin-bottom:10px ;
  padding: 2px;
  border-radius: 50%;

}
.count-but2{
  background-image: url(/public/icon/minus2.png);
  background-size: 12px; 
  width: 12px;
  height: 12px;
  /* background-color: #8b3d3d; */
  padding: 2px;
  border-radius: 50%;
}
/* .sum_cart{
  height: 345px;
  margin-left: 60%;
  font-size: 26px;
  }
.place_order{
  color: #ffffff;
  background-color: #595959;
  margin: 10px auto;
  width: 100%;
  height: 60px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  font-weight: 400;
  border-radius: 10px;
}
ul>li {
  text-align: center;
} */
/* .cart_button {
  padding: 8px 16px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
} */

</style>