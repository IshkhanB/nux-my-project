<template>
  <div class="filter_fon">
    <div class="menu_filter">
      <NuxtLink  to="/">
        <p class="filter_p">Все</p>
      </NuxtLink>
      <NuxtLink  to="/hits">
        <p class="filter_p">хиты продаж</p>
      </NuxtLink>
      <NuxtLink to="/flowers">
        <p class="filter_p">Букеты</p>
      </NuxtLink>
      <NuxtLink to="/stocks">
        <p class="filter_p">Акции</p>
      </NuxtLink>
      <NuxtLink to="/gifts">
        <p class="filter_p">Подарки</p>
      </NuxtLink>
    </div>  
  </div>
  <!-- <div class="filter_fon">
    <div class="menu_filter">
      <NuxtLink  to="/" class="filter_all" :class="route.path=='/'?'filter_ton':''">
        <NuxtImg src="icon/Group_949_3.svg"></NuxtImg>
        <p class="filter_p">Все</p>
      </NuxtLink>
      <NuxtLink  to="/hits" class="filter_bestsellers" :class="route.path=='/hits'?'filter_ton':''">
        <NuxtImg src="icon/bi_fire_4.svg" ></NuxtImg>
        <p class="filter_p">хиты продаж</p>
      </NuxtLink>
      <NuxtLink to="/flowers" class="filter_bouquets" :class="route.path=='/flowers'?'filter_ton':''">
        <NuxtImg src="icon/Group_974.svg" ></NuxtImg>
        <p class="filter_p">Букеты</p>
      </NuxtLink>
      <NuxtLink to="/stocks" class="filter_stock" >
        <NuxtImg src="icon/solar_sale-bold_2.svg" ></NuxtImg>
        <p class="filter_p">Акции</p>
      </NuxtLink>
      <NuxtLink to="/gifts" class="filter_present">
        <NuxtImg src="icon/ic_baseline-cake_2.svg" ></NuxtImg>
        <p class="filter_p">Подарки</p>
      </NuxtLink>
    </div>  
  </div> -->
</template>
<script setup lang="ts">
  // const route = useRoute()
  // const sss = ref(false)
  
  // onMounted(()=>{
  //   if(!sss.value){
  //     sss.value = true
  //     console.log(sss.value)
  //   }
  // }) 
  // console.log(click)
</script>
<style scoped lang="scss">
.filter_fon{
  /* position: relative; */
  margin: 15px auto;
  max-width: 1400px;
  &:hover {
    background-color: #595959;
    // filter: blur(5px);
  }
}
.menu_filter{
  display: flex;
  margin-right: auto;
  /* padding: 5px; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* gap: 20px; */
  max-width: 700px;
}
.filter_all{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  /* width: 100%; */
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_p{
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: Arial, sans-serif;
  /* line-height: 1.55; */
  zoom: 1.495;
  font-weight: 400;
  white-space: nowrap;
  /* position: absolute; */
}
.filter_bestsellers{
  /* position: relative; */
  margin: 0 auto;
  padding: 0 10px 0 10px;
  /* width: 100%; */
  height: 60px;
  display: flex;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
//!=========================
.filter_bestsellers:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_bouquets{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  /* width: 100%; */
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
//!=========================
.filter_bouquets:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_stock{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  /* width: 100%; */
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
//!=========================
.filter_stock:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_present{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  /* width: 100%; */
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
//!=========================
.filter_present:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_ton{
  background-color: #595959 !important;
  color: #ffffff !important;
}
</style>
