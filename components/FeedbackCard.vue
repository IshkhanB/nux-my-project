
<template>
  <div class="feedback_card">
    <!-- <div>
      <div>
      <nuxt-img preset="cover" class="card_image"  :src="product?.images[0]" /> 
      </div>
    </div>
    <div class="card_bottom">
      <NuxtLink :to="`/${product?.type}/${product?.id}`"  class="card__info"> Подробнее</NuxtLink>
      <NuxtLink id="two" class="card__add">Добавить в корзину</NuxtLink>
    </div>
    <div class="card__price card__price--discount">{{ product?.price }}</div>
    <p class="info_flower">{{ product?.description }}</p>
    <NuxtLink :to="`/${product?.type}/${product?.id}`" class="card__title"> {{ product?.title }} </NuxtLink> -->
    <h2>Надежда Букетова</h2>
    <h2>24.04.24</h2>
    <h3>Букет "Буря эмоций" </h3>
    <p>Заказывала букет на день рождения дочери, привезли точно в срок и очень свежие цветы. Простояли около двух недель. Спасибо большое!</p>
  </div>

</template>

<script setup lang="ts">
// defineProps(['product'])
</script>

<style>
.feedback_card{
  margin: 0 auto;
  padding: 5px;
  width: 300px;
  height: 400px;
  background-color: rgb(248, 248, 248);
}
.feedback_card>h2{
  font-size: 30px;
  text-align: center;
  padding: 5px;
}
.feedback_card>h3{
  font-size: 30px;
  text-align: center;
  padding: 10px;
}
.feedback_card>p{
  font-size: 20px;
  text-align: center;
  padding: 5px;
}
</style>