<template>
  <div class="foter_fon">
    <div class="information">
    <h1>FLOWER MARKET</h1>
      ИП ТЕРЗИЯН РУЗАННА СЕРГЕЕВНА 
      <br>
      ИНН: 231907166090
      <br>
      ОГРН/ОГРНИП: 323237500334679
      <br>
      Расчётный счёт: 40802810630060007630
      <br>
      Банк: ПАО Сбербанк
      <br>
      БИК банка: 046015602
      <br>
      Корр. счёт банка: 30101810600000000602
      <br>
      ИНН банка: 7707083893
      <br>
      КПП банка: 236643001
    </div>
    <div class="menu_footer">
      <h1> Меню</h1>
      <nav class="nav_footer">
        <a href="#">Каталог</a>
        <a href="#">Доставка и оплата</a>
        <a href="#">FAQ</a>
        <a href="#">О нас</a>
        <a href="#">Отзывы</a>
      </nav>
    </div>
    <div class="three">
    
    </div>
    <div class="four">
    </div>
  </div>
</template>

<style scoped>
.foter_fon{
  display: flex;
  margin: 30px auto;
  padding: 10px;
  max-width: 1400px;
  height: 500px;
  background-color: #fcfcfc;
}
.information>h1{
  background-image: url(public/icon/mdi_flower-tulip-out.svg);
  background-repeat: no-repeat;
  padding-left: 35px;
  background-size: 35px;
  background-position: left;
  font-size: 25px;
  color: #595959;
}
.information{
  line-height: 30px;
  color:#d0d0d0;
}
.menu_footer{
  margin: 0 auto;
  
}
.menu_footer>h1{
  background-size: 35px;
  font-size: 25px;
  color: #595959;
}
.nav_footer{
  display: flex;
  flex-direction: column;
  line-height: 30px;
  
}
</style>