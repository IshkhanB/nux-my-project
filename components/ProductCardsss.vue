<template>
  <div class="card" >
     <div class="div_cont">
        <!-- <nuxt-img  :src="images[2]"></nuxt-img> -->
        <ClientOnly class="div1 swip">
          <swiper-container ref="containerRef" :init="false">
            <swiper-slide v-for="image, i of images" :key="i">
              <NuxtImg preset="cover" width="324px"  :src="image" ></NuxtImg>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div class="div2">
          <div class="card__price card__price--discount">5000</div>
          <p class="info_flower"></p>
          <NuxtLink :to="`#`" class="card__title">  </NuxtLink>
          <div class="card_bottom1">
            <NuxtLink :to="`#`"  class="card__info"> Подробнее</NuxtLink>
            <NuxtLink id="two" class="card__add">Добавить в корзину</NuxtLink>
            <!-- {{console.log(product.img)}} -->
          </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
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
  const images = [
  '/img/1735233911927444.jpg.webp',
  '/img/1735234524397112.png.webp',
  '/img/1735234704648222.jpg.webp',
]
</script>

<style scoped>
 .card {
    margin: 0 auto;
    border-radius: 20px !important;
    /* display: block; */
    width: 328px;
    min-height: 550px;
    /* display: flex; */
    /* flex-direction: column-reverse; */
    /* border-radius: 4px; */
    /* transition: 0.2s; */
    /* position: relative; */
    cursor: pointer;
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
.card__prices {
    margin: 15px auto;
    margin-bottom: 10px;
  }
.card__price::after {
    margin: 0 auto;
    content: "₽";
    margin-left: 4px;
    position: relative;
  }
  .card__price--discount {
    margin: 0 auto;
    font-weight: 700;
    font-size: 19px;
    color: #414141;
    /* display: flex; */
    /* flex-wrap: wrap-reverse; */
  }
  .card__price--common {           /* не разобрался что это (--common) */  
    font-weight: 400;
    font-size: 17px;
    color: #414141;
    /* display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end; */
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
  /* .swip_div{
    margin: 0 ;
    width: 327px;
  } */
</style>