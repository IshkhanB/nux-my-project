<template>
<div class="fon_div">
  <nuxt-img class="img_fon" src="/icon/group_975_1.png" alt="Fon" />
  <div>
  <NuxtImg class="img_girl" src="/icon/noroot_1.png" alt="girl-flowers" />
  </div>
  <h1 ></h1>  
</div>

</template>

<style >
.fon_div{
  position: relative;
  margin: 0 auto;
  padding: 0;
  max-width: 1400px ;
  height: 400px;
  overflow: hidden;
  border-radius: 25px;
}

.img_fon{
  margin: 0 auto;
  width: 100%;
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

</style>