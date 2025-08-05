<template>
  <div class="card" >
     <div class="div_cont">
        <!-- <nuxt-img  :src="images[2]"></nuxt-img> -->
        <swiper-container ref="containerRef" :init="true">
          <swiper-slide v-for="img of product?.img" :key="img.id">
            <NuxtImg  preset="cover" height="327" width="327px" :src="'img/'+img.img" ></NuxtImg>
          </swiper-slide>
        </swiper-container>
        <div class="div2">
          <p class="card_title" > {{ product?.title }}</p>
          <p class="info_flower"> {{ product?.description }}</p>
            <div v-if="product.sale"  style="display: flex; justify-content: center;">
              <div class="card_price card_price--sale">{{ product?.price }}</div>
              <div class="card_price">{{product?.sale}}</div>
            </div>
            <div v-else>
              <div class="card_price">{{ product?.price }}</div>
            </div>
          <div class="card_bottom1">
            <NuxtLink :to="`/${product?.type?.title}/${product?.id}`"  class="card_info"> Подробнее</NuxtLink>
            <button @click="cartStore.addToCart(product)" class="card_add">Добавить в корзину</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['product','types'])
const cartStore = useCart()

const containerRef = ref(null)
// const sale = ref(0)
// const prise_sale = 4
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: props.product.img>1?true:false,
  //autoplay: {
  //  delay: 5000,
  //},
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

// onMounted(() => {
//   console.log(swiper.instance)
// })

</script>

<style scoped>
.card {
  margin: 0 auto;
  border-radius: 20px !important;
  width: 327px;
  cursor: pointer;
}
.card_title{
  padding: 5px;
  height: 46px;
  color: #595959;
  text-align: center;
  FONT-WEIGHT: 700;
}
.info_flower{
  margin: 0 auto;
  color: #595959;
  text-align: center;
  padding: 7px;
  height: 49px;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card:hover {
  box-shadow: 0px 0px 20px rgba(15, 8, 5, 0.2);
}
.div_cont{
  display: grid;
  grid-template-columns: 325px;
  grid-template-rows:327px 200px;
  grid-template-areas:
  'div1'
  'div2';
  gap: 10px;
  box-sizing: border-box;
  border: 1px solid #00000029;
  border-radius: 20px;
  overflow: hidden;
}
.card_price {
  margin: 0;
  text-align: center;
  padding: 5px 5px 5px 5px;
  margin-right: 0;
}
.card_price--sale {
  margin: 0;
  padding: 5px 5px 5px 5px;
  color: #414141;
  text-decoration: line-through;
}
.card_price::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}
.card_bottom1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
.swip{
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
 }
swiper-slide>img {
  object-position: center;
  border-radius: 20px 20px 0 0;
}
.card_add {
  margin: 0 auto;
  padding: 15px;
  color: #ffffff;
  background-color: #595959;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  font-weight: 500;
}
.card_info {
  margin: 0 auto;
  padding: 15px;
  color: #ffffff;
  background-color: #e8cbb1;
  border-radius: 25px;
  font-weight: 500;
}

.card_add:hover {
  background-color: #e4b891;
  color: #fff;
} 
.card_info:hover {
  background-color: #e4b891;
  color: #fff;
}
  </style>