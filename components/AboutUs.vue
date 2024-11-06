<template>
  <div class="AboutUsFon">
    <img class="imgFon" src="public/icon/Group_946_5.png" alt="">
    <div class="divImgRate">
      <img class="imgRate" src="public/icon/93509304_luxurious_w.png" alt="">
    </div>
  <div> 
    <div class="DivUsInfo">
      <h3></h3>
    </div>
    <div class="DivUsInfo">

    </div>
    <div class="DivUsInfo">

    </div>
    <div class="DivUsInfo">

    </div>
  </div>
  </div>
  
</template>
<script setup lang="ts">

</script>
<style scoped>
.imgFon{
  margin: 20px;
  max-width: none;
  max-width: 1400px;
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