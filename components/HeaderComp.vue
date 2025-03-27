
<template>
  <div class="heder_div substrate">
    <header class="header">
      <NuxtLink to="/" class="div_logo">
       <NuxtImg class="header_logo"  src="/icon/mdi_flower-tulip-out.svg"/>
        <h1 class="heder_h1">FLOWER MARKET
         <p class="heder_p">Магазин доставки цветов по Сочи</p> 
         <!-- Магазин доставки цветов по Сочи -->
        </h1>
      </NuxtLink>
      <nav class="header_nav">
        <a class="header_a" href="/#catalog" aria-label="Перейти к каталогу">Каталог</a>
        <a class="header_a" href="/delivery" @click.prevent="goToAnchor('#delivery')">Доставка и оплата</a>
        <a class="header_a" href="#">FAQ</a>
        <a class="header_a" href="/about_us" @click.prevent="goToAnchor('#about_us')">О нас</a>
        <a class="header_a" href="/reviews" @click.prevent="goToAnchor('#reviews')">Отзывы</a> 
      </nav>
      <div class="iconci_v_div">
        <p class="icon_search">
          <NuxtImg  class="icon" src="icon/ic_sharp-search_1.svg" alt="icon"/> 
        </p>
        <p class="icon_search">
          <NuxtImg class="icon" src="icon/icon-park-outline_li.svg" alt=""/>
        </p>
        <!-- <p class="icon_search">
          <NuxtImg class="icon" src="~/assets/icon/ic_outline-shopping-.svg" alt="Корзина" />
        </p> -->
        <button class="icon-button" aria-label="Корзина" @click="cartStore.visible = true" >
          <NuxtImg class="icon" src="icon/ic_outline-shopping-.svg" alt="Корзина"/>
          <span class="icon-count">{{ cartStore.count()  }}</span> <!-- Счетчик -->
          
        </button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCart()

const goToAnchor = (hash:string)=>{
  location.hash=hash
}
</script>


<style>
.icon{
  width: 35px;
}
.heder_div{ 
  margin: 0 auto;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 99;
  margin-top: 20px !important;
  margin-bottom:20px !important;
}
.div_logo{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.header_logo{
  width: 50px !important;

}
.heder_h1{
  margin:5px auto 5px 5px;
  font-size: 20px;
  color: #595959;
  overflow: hidden;
}
.heder_p{
  color: #595959;
  font-size: 14px;
  border-color: transparent;
  border-style: solid;
}
.header{
  margin: 0 auto;
  display: flex;
  overflow: hidden;
}
.header_nav {
  margin:5px auto 5px auto;
  display: flex;
  align-items: center;
  gap: 40px;
  height:50px;
}
.header_nav>a {
  position: relative;
  font-size: 12px;
  justify-content: space-around;
  color: #595959;
  font-family: Arial, sans-serif;
}
.header_a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
.header_a::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 500ms !important;
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  content: '';
}
.iconci_v_div {
  margin: auto 10px auto auto;
  display:flex;
  align-content: center;
  align-items: center;
  gap: 20px;
  height:58px;
}
.header_a>img {
  width: 35px;
}
.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative; /* Для позиционирования счетчика */
}
 
  .icon-count {
  position: absolute; /* Абсолютное позиционирование */
  bottom: -3px; /* Сдвиг вниз */
  right: -3px; /* Сдвиг вправо */
  background: #d39f71; /* Цвет фона */
  color: white; /* Цвет текста */
  font-size: 12px; /* Размер текста */
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .header_nav{
    display: none;
  }
  
}
@media screen and (max-width: 640px) {
  .header_nav{
    display: none;
  }
  .heder_p{
    display: none;
  }
  .iconci_v_div{
    margin: auto;
    height: 40px;
  }
  .heder_h1{
    font-size: 15px;
  }
   .div_logo{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
   }
  .header_logo{
    width: 30px !important;
    min-width: 30px;
  }
}
</style>