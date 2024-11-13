<template>
  <div class="filter_fon">
    <div class="menu_filter">
      <div class="filter_all">
        <NuxtImg src = "icon/Group_949_3.svg" ></NuxtImg>
        <p class="filter_p">Все</p>
      </div>
      <div class="filter_bestsellers">
        <NuxtImg src = "icon/bi_fire_4.svg" ></NuxtImg>
        <p class="filter_p">хиты продаж</p>
      </div>
      <div class="filter_bouquets">
        <NuxtImg src = "icon/bi_fire_4.svg" ></NuxtImg>
        <p class="filter_p">Букеты</p>
      </div>
      <div class="filter_stock">
        <NuxtImg src = "icon/bi_fire_4.svg" ></NuxtImg>
        <p class="filter_p">Акции</p>
      </div>
      <div class="filter_present">
        <NuxtImg src = "icon/bi_fire_4.svg" ></NuxtImg>
        <p class="filter_p">Подарки</p>
      </div>
    </div>  
  </div>
</template>
<style>
.filter_fon{
  margin: 15px auto;
  max-width: 1400px;
}
.menu_filter{
  display: flex;
  margin-right: auto;
  padding: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  max-width: 1000px;
}
.filter_all{
  display: flex;
  margin: 0 auto;
  padding: 25px;
  /* width: 100%; */
  height: 61px;
  background-color: #595959 !important;
  color: #ffffff !important;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_p{
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'TildaSans', Arial, sans-serif;
  line-height: 1.55;
  zoom: 1.495;
  font-weight: 400;
  white-space: nowrap;
  /* position: absolute; */
}
.filter_bestsellers{
  /* position: relative; */
  margin: 0 auto;
  padding: 25px;
  /* width: 100%; */
  height: 61px;
  display: flex;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_bestsellers:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_bouquets{
  display: flex;
  margin: 0 auto;
  padding: 25px;
  /* width: 100%; */
  height: 61px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_bouquets:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_stock{
  display: flex;
  margin: 0 auto;
  padding: 25px;
  /* width: 100%; */
  height: 61px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_stock:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
.filter_present{
  display: flex;
  margin: 0 auto;
  padding: 25px;
  /* width: 100%; */
  height: 61px;
  background-color: #f6f6f6;
  color: #595959;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.filter_present:hover{
  background-color: #595959 !important;
  color: #ffffff !important;
}
</style>