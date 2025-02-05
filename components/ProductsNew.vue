<template>
  <div class="card" >
     <div class="div_cont">
        <!-- <nuxt-img  :src="images[2]"></nuxt-img> -->
        <ClientOnly class="div1 swip">
          <swiper-container ref="containerRef" :init="true">
            <swiper-slide v-for="img of product?.img" :key="img.id">
              <NuxtImg preset="cover" height="327" width="327px" :src="'img/'+img.img" ></NuxtImg>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div class="div2">
          <p class="card_title" > {{ product?.title }}</p>
          <p class="info_flower"> {{ product?.description }}</p>
          <div style="display: flex;">
            <div class="card_price">{{ product?.sale }}</div>
            <div class="card_price card_price--sale">{{product?.price}}</div>
          </div>
          <div class="card_bottom1">
            <NuxtLink :to="`#`"  class="card_info"> Подробнее</NuxtLink>
            <NuxtLink :to="`#`" class="card_add">Добавить в корзину</NuxtLink>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(['product','types'])



const containerRef = ref(null)
// const sale = ref(0)
// const prise_sale = 4
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
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

onMounted(() => {
  console.log(swiper.instance)
})

</script>

<style scoped>
 .card {
   margin: 0 auto;
   border-radius: 20px !important;
   width: 327px;
   min-height: 550px;
   cursor: pointer;
   /* display: block; */
   /* display: flex; */
   /* flex-direction: column-reverse; */
   /* border-radius: 4px; */
   /* transition: 0.2s; */
   /* position: relative; */
  }
  .card_title{
    margin: 0 auto;
    padding: 5px;
    FONT-WEIGHT: 700;
  }
  .info_flower{
    margin: 0 auto;
    padding: 5px;
  }
  .card:hover {
    box-shadow: 0px 0px 20px rgba(15, 8, 5, 0.2);
  }
.div_cont{
  display: grid;
  grid-template-columns: 327px;
  grid-template-rows:327px 200px;
  grid-template-areas:
  'div1'
  'div2';
  gap: 10px;
}
.card_price {
  margin: 0;
  padding: 5px 5px 5px 5px;
  margin-right: 0;
  /* margin: 10px 10px 10px 10px; */
}
.card_price--sale {
  margin: 0;
  padding: 5px 5px 5px 5px;
  color: #414141;
  text-decoration: line-through;
  /* font-weight: 700;
  font-size: 19px; */
  /* display: flex; */
  /* flex-wrap: wrap-reverse; */
}
.card_price::after {
  margin: 0 auto;
  content: "₽";
  margin-left: 4px;
  position: relative;
}

.card_bottom1 {
  /* display: block; */
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
}
swiper-slide>img {
  object-position: center;
  border-radius: 10px 10px 0 0;
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