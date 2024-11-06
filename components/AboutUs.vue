<template>
  <div class="AboutUsFon">
    <h1 class="OurHeadr">Наши преимущества</h1>
    <img class="img_fon" src="public/icon/Group_946_5.png" alt="">
    <div class="divImgRate">
      <img class="imgRate" src="public/icon/93509304_luxurious_w.png" alt="">
    </div>
  <div> 
    <div class="DivUsInfo1">
      <h3></h3>
    </div>
    <div class="DivUsInfo2">

    </div>
    <div class="DivUsInfo3">

    </div>
    <div class="DivUsInfo4">

    </div>
  </div>
  </div>
  
</template>
<script setup lang="ts">

</script>
<style scoped>
.OurHeadr{ 
  margin: 0 auto;
  color: #595959;
  font-family: 'Cormorant',Arial,sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;  
}
.img_fon{
  margin: 0 auto;
}
.AboutUsFon{
  position: relative;
  margin: 0 auto;
  padding: 0;
}
.imgRate{
  z-index: 20px;
  animation: 160s linear forwards;
  backface-visibility: hidden;
}
.divImgRate{
  margin: 50px 50px 50px 50px ;
  position: absolute;
  top: 30%;
  left: 10%;
  animation: 60s linear infinite rotate;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }}

</style>