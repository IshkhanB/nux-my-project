<template>
  <div class="heder_div substrate">
    <!-- <section> -->
    <header class="header">
      <NuxtLink href="//localhost:3000/nuxt-project/" class="div_logo">
      <NuxtImg class="header_logo"  src="/icon/mdi_flower-tulip-out.svg"/>
      <h1 class="heder_h1">FLOWER MARKET
        <p class="heder_p">Магазин доставки цветов по Сочи</p> 
        <!-- Магазин доставки цветов по Сочи -->
      </h1>
      </NuxtLink>
      <nav class="header_nav">
        <NuxtLink class="heder_a" href="#">Каталог</NuxtLink>
        <NuxtLink class="heder_a" href="#">Доставка и оплата</NuxtLink>
        <NuxtLink class="heder_a" href="#">FAQ</NuxtLink>
        <NuxtLink class="heder_a" href="#">О нас</NuxtLink>
        <NuxtLink class="heder_a" href="#">Отзывы</NuxtLink>
      </nav>
      <div class="iconci_v_div">
        <NuxtLink class="icon_search" href="#">
          <NuxtImg  class="icon" src="icon/ic_sharp-search_1.svg" alt="icon"/> 
        </NuxtLink>
        <NuxtLink class="icon_search" href="#">
          <NuxtImg class="icon" src="icon/icon-park-outline_li.svg" alt=""/>
        </NuxtLink>
        <NuxtLink class="icon_search" href="#">
          <NuxtImg class="icon" src="icon/ic_outline-shopping-.svg" alt=""/>
        </NuxtLink>
      </div>
    </header>
  </div>
</template>
<style>
.icon{
  width: 35px;
}
.heder_div{ 
  margin: 0 auto;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 999;
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
  font-family: 'TildaSans', Arial, sans-serif;
}
.heder_a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
.heder_a::before {
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
.heder_a>img {
  width: 35px;
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