<template>
  <div class="how_pay_cont">
    <div class="how_pay_div" >
      <NuxtImg id="fon3" src="/icon/how_to_pay_fon.png" />
      <div class="gradient"></div>
      <NuxtImg id="img_fon3" src="/icon/how_to_pay.png" />
      <div class="how_pay_text">
        <ul class="how_pay_ul">
          <li style="list-style: none; color: #595959; font-size: 45px;">Оплата</li>
          <li style="list-style: none; ">Описание процессов оплаты. Возможных вариантов оплаты букетов и т.д в несколько предложений</li>
          <li style="list-style: none;">В магазине:</li>
          <li style="margin-left:20px;">Наличными при самовывозе</li>
          <li style="margin-left:20px;">Банковской картой при самовывозе</li>
          <li style="list-style: none;">Картой на сайте:</li>
          <li style="margin-left:20px;">При оформлении заказа на сайте, вы производите оплату, менеджер свяжется с вами в рабочее время чтобы подтвердить заказ и направить фото букета, по запросу.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.how_pay_cont{
  margin: 0 auto;
  padding-top: 40px;
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
  list-style: disc;
}
.gradient{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background:linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%);
}
.how_pay_ul{
  color: #595959;
  font-size: 20px;
}
#fon3{
  width: 100%;
  filter: blur(20px);
}
#img_fon3{
  width: 1383px;
  position: absolute;
  top: 30px;
  left: -345px;
  /* background: linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%); */
} 
</style>