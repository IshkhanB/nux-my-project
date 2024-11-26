<template>
  <div class="about_us_fon">
    <div class="anchor" id="about_us"></div>
    <h1 class="our_headr">Наши преимущества</h1>
    <NuxtImg densities="x1" class="img_fon_about" src="icon/Group_946_5.png" alt="fon"></NuxtImg>
    <div class="div_img_rate">
      <NuxtImg class="img_rate" src="icon/rotating_bouquet.png" alt="rotating_bouquet"></NuxtImg>
    </div>
    <div> 
      <div class="div_us_info1">
        <h3></h3>
      </div>
      <div class="div_us_info2">
      </div>
      <div class="div_us_info3">
      </div>
      <div class="div_us_info4">
      </div>
    </div>
  </div>
  
</template>
<script setup lang="ts">

</script>
<style>
.our_headr{ 
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
.about_us_fon{
  position: relative;
  margin: 0 auto;
  padding: 0;
}
.img_rate{
width: 459px;
  /* z-index: 20px; */
  animation: 160s linear forwards;
  backface-visibility: hidden;
}
.div_img_rate{
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
    .our_headr{
      font-size: 25px;
    }
  }

</style>