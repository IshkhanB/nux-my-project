<template>
  <div class="grid_cont">
    <div>
      <NuxtImg class="img_one" :src="'img/'+product?.img" />
    </div>
    <div class="div_data">
      <h1 class="title_one"> {{ product?.title }} </h1>
      <h2 class="info_one">{{ product?.description }}</h2>
      <h3 class="price_one">{{ product?.price }}</h3>
      
      <NuxtLink style="margin-top: 40px;" class="add_one">Добавить в корзину</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const {data} = await useFetch(`/api/product/${route.params.id}`)
const product = ref(data.value?.product)  
</script>

<style scoped>
.grid_cont {
  margin: 0 auto;
  width: 1400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}
.img_one{
  margin: 0 auto;
  padding: 20px;
  width: 600px; 
  height: 800px;
  grid-area: 1 / 1 / 2 / 2;
  object-fit: cover;
  border-radius: 50px;
}
.div_data {
  position: relative;
  grid-area: 1 / 2 / 2 / 3; 
} 

.title_one {
  margin: 0 auto;
  font-size: 60px;
}
.info_one {
  margin: 0 auto;
  margin-top: 10px;
  font-size: 30px;
}
.price_one{
  
  margin: 0 auto;
  padding: 5px;
  margin-top: 10px;
  font-size: 20px;
}
.price_one::after {
    margin: 0 auto;
    margin-top: 40px;
    content: "₽";
    margin-left: 4px;
    /* position: relative; */
  }
.add_one{
  /* position: absolute; */
  /* right: 50px; */
  /* bottom: 80px; */
  display: inline-block;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 15px;
  color: #ffffff;
  background-color: #595959;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  font-weight: 500;
}
.add_one:hover {
    background-color: #e4b891;
    color: #fff;
  } 

</style>