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
        <a href="#card_id" >Каталог</a>
        <p >Доставка и оплата</p>
        <p >FAQ</p>
        <p >О нас</p>
        <p >Отзывы</p>
      </nav>
    </div>
    <div class="footer_contacts">
      <h1> Контакты</h1>
      <nav class="nav_footer">
        <p >+79881878668</p>
        <p >Написать в WhatsApp</p>
        <p >Написать в Telegram</p>
        <p >О нас</p>
        <p >354000 г. Сочи, ул. О.Кошевого, д. 21Б</p>
      </nav>
    </div>
    <div class="footer_connection">
      
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
.information{
  line-height: 30px;
  color:#d0d0d0;
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
.menu_footer{
  margin: 0 auto;  
}
.menu_footer>h1{
  background-size: 35px;
  font-size: 25px;
  color: #595959;
}
.footer_contacts>h1{
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