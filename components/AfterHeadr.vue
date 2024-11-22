<template>
<div class="fon_div">
  <nuxt-img class="img_fon_after" src="/icon/group_975_1.png" alt="Fon" />
  <div>
   <NuxtImg class="img_girl" src="/icon/noroot_1.png" alt="girl-flowers" />
  </div>
  <div class="fon_div_text">
    <p>Доставка КРАСИВЫХ <br> букетов в любую точку сочи</p>
    <!-- букетов по всему сочи -->
  </div>
</div>

</template>

<style>
.fon_div{
  position: relative;
  margin: 0 auto;
  padding: 0;
  max-width: 1400px ;
  height: 400px;
  overflow: hidden;
  border-radius: 25px;
}
.fon_div_text{
  margin: 0 auto;
  text-align: center;
}
.fon_div_text>p{
  position: absolute;
  top: 15%;
  left: 5%;
  color: #595959;
  font-size: 50px;
  font-family: 'Cormorant', Arial, sans-serif;
  letter-spacing: -1px;
  text-transform: uppercase;
  line-height: 63px;
}

.img_fon_after{
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  margin: 0 auto;
  width: 100%;
  min-width: 500px;
  object-fit: cover;
}
.img_girl{
width: 600px;
overflow: hidden;
object-fit: cover;
position: absolute;
top: -90px;
right: 0px;
}


@media screen and (max-width: 1024px) {
  .img_girl{
    top: 40px;
    right: 40px;
  }
}
@media screen and (max-width: 800px) {
  .img_girl {
    top: 70px;
    right: 80px;
  }
}
@media screen and (max-width:500px) {
  .img_fon_header{
  min-width: 500px;
  }
}

</style>