<template>
  <div class="AboutUsFon">
    <h1 class="OurHeadr">Наши преимущества</h1>
    <!-- <img class="img_fon_about" src="public/icon/Group_946_5.png" alt="fon"> -->
    <NuxtImg densities="x1" class="img_fon_about" src="icon/Group_946_5.png" alt="fon"></NuxtImg>
    <div class="divImgRate">
      <!-- <img class="imgRate" src="public/icon/93509304_luxurious_w.png" alt=""> -->
      <NuxtImg class="imgRate" src="icon/rotating_bouquet.png" alt="rotating_bouquet"></NuxtImg>
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
<style>
.OurHeadr{ 
  margin: 0 auto;
  color: #595959;
  font-family: 'Cormorant',Arial,sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 0;
  right: 0;
}
.img_fon_about{
  margin: 0 auto;
  height: 600px;
    width: 100%;
    object-fit: cover;
}
.AboutUsFon{
  position: relative;
  margin: 0 auto;
  padding: 0;
}
.imgRate{
width: 459px;
  /* z-index: 20px; */
  animation: 160s linear forwards;
  backface-visibility: hidden;
}
.divImgRate{
  margin: 50px 50px 50px 50px ;
  position: absolute;
  top: 10%;
  left: 5%;
  animation: 60s linear infinite rotate;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }}
  @media screen and (max-width: 640px) {
    .OurHeadr{
      font-size: 25px;
    }
  }

</style>