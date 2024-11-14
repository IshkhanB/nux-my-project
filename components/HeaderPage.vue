<template>
  <div class="heder_div substrate">
    <!-- <section> -->
    <header class="header">
      <div class="div_logo">
      <NuxtImg class="header_logo"  src="/icon/mdi_flower-tulip-out.svg"/>
      <h1 class="heder_h1">FLOWER MARKET
        <p class="heder_p">Магазин доставки цветов по Сочи</p>
      </h1>
      </div>
      <nav class="header_nav">
        <a href="#">Каталог</a>
        <a href="#">Доставка и оплата</a>
        <a href="#">FAQ</a>
        <a href="#">О нас</a>
        <a href="#">Отзывы</a>
      </nav>
      <div class="iconci_v_div">
        <a class="icon_search" href="#">
          <NuxtImg densities="x1" src="icon/ic_sharp-search_1.svg" alt="icon"></NuxtImg> 
        </a>
        <a class="icon_search" href="#">
          <img src="public/icon/icon-park-outline_li.svg" alt="">
        </a>
        <a class="icon_search" href="#">
          <img src="public/icon/ic_outline-shopping-.svg" alt="">
        </a>
      </div>
    </header>
  </div>
</template>
<style>
.heder_div{ 
  margin: 0 auto;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-top: 20px !important;
  margin-bottom:20px !important;
  /* background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 25px #e0bfaf; */
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
  /* background-image: url(public/icon/mdi_flower-tulip-out.svg); */
  /* background-repeat: no-repeat; */
  /* padding-left: 50px; */
  /* background-size: 50px; */
  /* background-position: left; */
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
.header_nav>a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
.header_nav>a::before {
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
.iconci_v_div>a>img {
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
    /* margin-left:20px ; */
  }
  /* .heder>h1{
    background-image: url(public/icon/mdi_flower-tulip-out.svg);
  background-repeat: no-repeat;
  padding-left: 50px;
  background-size: 50px;
  background-position: left;
  } */

  
}
</style>