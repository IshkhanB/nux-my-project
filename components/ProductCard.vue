
<template>
  <div class="card">
        <!-- <nuxt-img preset="cover" class="card_image"  :src="'img/'+product?.img[0].img"/>  -->
        <ClientOnly class="card__top">
          <swiper-container ref="containerRef" :init="true">
            <swiper-slide class="swip card_image" v-for="img of product?.img" :key="img.id">
              <NuxtImg preset="cover"   :src="'img/'+img.img" ></NuxtImg>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div>
  
        </div>
    <div class="card_bottom">
      <NuxtLink :to="`/${product?.type?.title}/${product?.id}`"  class="card__info"> Подробнее</NuxtLink>
      <NuxtLink id="two" class="card__add">Добавить в корзину</NuxtLink>
      <!-- {{console.log(product.img)}} -->
    </div>
    <div class="card__price card__price--discount">{{ product?.price }}</div>
    <p class="info_flower">{{ product?.description }}</p>
    <NuxtLink :to="`/${product?.type?.title}/${product?.id}`" class="card__title"> {{ product?.title }} </NuxtLink>
    {{ product.price }}
  </div>
  
</template>

<script setup lang="ts">
defineProps(['product','types'])


const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: false,
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
    border-radius: 10px !important;
    display: block;
    width: 327px;
    min-height: 550px;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0px 0px 20px rgba(15, 8, 5, 0.2);
  }
  .card__top {
    flex: 0 0 220px;
    position: relative;
    overflow: hidden;
  }
  .card_image>slot {
    border-radius: 5px 5px 0 0  !important;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0; 
    overflow: hidden;
    width: 100vw;
    object-fit: cover;
    transition: 0.2s;
  }
  
  .card__label {
    padding: 4px 8px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff6633;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }
  
  .card_bottom {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* flex: 1 0 auto; */
    padding: 10px;
  }
  
  .card__prices {
    margin: 0 auto;
    display: flex;
    justify-content: center;
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
    display: flex;
    flex-wrap: wrap-reverse;
  }
  
  
  
  .card__price--common {           /* не разобрался что это (--common) */  
    font-weight: 400;
    font-size: 17px;
    color: #414141;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
  }

  .card__title {
    margin: 0 auto;
    /* padding: 10px; */
    position: relative;
    text-decoration: none;
    transition: color 200ms ease, font-weight 200ms ease !important;
    display: inline-block;
    width: fit-content;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 17px;
    line-height: 150%;
    text-align: center;
    color: #000000;
  }
  .info_flower{
    margin: 0 auto;
    color: #595959;
    font-size: 14px;
    line-height: 1.55;
    text-align: center;
    font-family: Arial, sans-serif;
    font-weight: 300;
  }
  .card__title:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  .card__title::before {
    /* color: #000000; */
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 500ms !important;
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
    content: '';
  }
  .card__add {
    margin: 0 auto;
    padding: 15px;
    color: #ffffff;
    background-color: #595959;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    font-weight: 500;
    
  }
  .card__info {
    margin: 0 auto;
    padding: 15px;
    color: #ffffff;
    background-color: #e8cbb1;
    border-radius: 25px;
    font-weight: 500;
  }

  .card__add:hover {
    background-color: #e4b891;
    color: #fff;
  } 
  .card__info:hover {
    background-color: #e4b891;
    color: #fff;
  } 
  .swip{
    display: none;
    /* margin: 0 auto;
    display: flex;
    align-items: center; */
  }
  /* swiper-slide>img {
    box-sizing: border-box;
    object-fit: cover;
    object-position: center;
  } */

</style>