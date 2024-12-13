<template>
  <div class="how_pay_cont">
    <div class="how_pay_div" >
      <NuxtImg id="fon3" src="/icon/how_to_pay_fon.png" />
      <div class="gradient"></div>
      <NuxtImg id="img_fon3" src="/icon/how_to_pay.png" />
      <NuxtImg id="visa_mir3" src="/icon/mir_visa.svg"/>
      <div class="gradient2"></div>
      <div class="how_pay_text">
        <ul class="how_pay_ul">
          <li style="list-style: none; color: #595959; font-size: 75px; text-transform:uppercase; margin-bottom:30px">Оплата</li>
          <li style="list-style: none; font-weight: 300; ">Описание процессов оплаты. Возможных вариантов <br> оплаты букетов и т.д в несколько предложений</li>
          <li style="list-style: none; font-size: 22px; margin-bottom:10px; "><hr> В магазине:</li>
          <li style="margin-left:20px; font-weight: 300;">Наличными при самовывозе</li>
          <li style="margin-left:20px; font-weight: 300;">Банковской картой при самовывозе </li>
          <li style="list-style: none; font-size: 22px; margin-bottom:10px;"> <hr> Картой на сайте:</li>
          <li style="margin-left:20px; font-weight: 300;">При оформлении заказа на сайте, вы производите оплату,  <br>менеджер свяжется с вами в рабочее время чтобы <br> подтвердить заказ и направить фото букета, по запросу.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.how_pay_cont{
  margin: 0 auto;
  margin-top: 40px;
}
.how_pay_div{
  /* background: url("/icon/how_to_pay.png") 0% 50%/100% no-repeat,
  url("/icon/how_to_pay_fon.png") center/cover no-repeat; */
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
}
.how_pay_text{
  position: absolute;
  top: 0;
  right: 0;
  width: 700px;
  padding: 20px;
}
.gradient{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background:linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%);
}
.gradient2{
  position: absolute;
  top: 0%;
  width: 48%;
  height: 100%;
  background:linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0)30% );
}
.how_pay_ul{
  text-align: left;
  color: #595959;
  font-size: 20px;
  /* font-family: 'Cormorant', Arial, sans-serif; */
}
.how_pay_ul>li{
  list-style: disc;
  line-height: 25px;
  /* font-family: 'Cormorant', Arial, sans-serif; */
}
#fon3{
  width: 100%;
  filter: blur(20px);
}
#img_fon3{
  width: 1383px;
  position: absolute;
  top: -10px;
  left: -345px;
} 
#visa_mir3{
  width: 350px;
  position: absolute;
  bottom: 80px;
  right: 330px;
} 
hr {
  width: 80%;
  margin: 23px 0;
  border: 1px solid #c9c9c9;
  /* font-family: 'Cormorant', Arial, sans-serif; */
}
</style>