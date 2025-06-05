<template>
  <div class="filter_fon">
    <div class="menu_filter">
      <NuxtLink  to="/#catalog"  class="filter_all filter_ton_all" :class="route.path=='/'?'filter_ton':''">
        <img src="public/icon/Group_949_3.svg" />
        <p class="filter_p">Все</p>
      </NuxtLink>
      <NuxtLink  to="/hits#catalog" class="filter_bestsellers filter_ton_all"  :class="route.path=='/hits'?'filter_ton':''">
        <img src="public/icon/bi_fire_4.svg" />
        <p class="filter_p">хиты продаж</p>
      </NuxtLink>
      <NuxtLink to="/flowers#catalog" class="filter_bouquets filter_ton_all" :class="route.path=='/flowers'?'filter_ton':''">
        <img src="public/icon/Group_974.svg" />
        <p class="filter_p">Букеты</p>
      </NuxtLink>
      <NuxtLink to="/stocks#catalog" class="filter_stock filter_ton_all"  :class="route.path=='/stocks'?'filter_ton':''">
        <img  src="public/icon/solar_sale-bold_2.svg"/>
        <p class="filter_p">Акции</p>
      </NuxtLink>
      <NuxtLink to="/gifts#catalog" class="filter_present filter_ton_all"  :class="route.path=='/gifts'?'filter_ton':''">
        <img src="public/icon/ic_baseline-cake_2.svg"/>
        <p class="filter_p">Подарки</p>
      </NuxtLink>   
    </div>  
  </div>
</template>
<script setup lang="ts">
  const sss = ref(false)
  const route = useRoute()
  // onMounted(()=>{
  //   if(!sss.value){
  //     sss.value = true
  //     console.log(sss.value)
  //     console.log(sss.value +"ggg")
  //   }
  // }) 

</script>
<style>
.filter_fon{
  margin: 15px auto;
  max-width: 1400px;
}
.menu_filter{
  display: flex;
  margin-right: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 700px;
}
.menu_filter img{
  height: 30px;
}
.filter_all{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
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
  zoom: 1.495;
  font-weight: 400;
  white-space: nowrap;
}
.filter_bestsellers{
  margin: 0 auto;
  padding: 0 10px 0 10px;
  height: 60px;
  display: flex;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_bouquets{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_stock{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_present{
  display: flex;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  height: 60px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_ton_all:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_ton{
  background-color: #595959 !important;
  color: #ffffff !important;
}
</style>