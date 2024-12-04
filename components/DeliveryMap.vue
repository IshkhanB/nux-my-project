<template>
<div class="deliveri_all">
  <div>
  <table class="delivery_table">
    <colgroup>
      <col >
      <col class="delivery_td2">
      <col class="delivery_td3">
    </colgroup>
    <tbody class="delivery_tbody">
      <tr>
        <td>Сочи, Центральный</td>
        <td>1 час 5 минут</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Сириус</td>
        <td>1 час 30 минут</td>
        <td>1800</td>
      </tr>
      <tr>
        <td>Хоста, Кудепста</td>
        <td>1 час 10 минут</td>
        <td>800</td>
      </tr>
      <tr>
        <td>Адлерский р-н</td>
        <td>1 час 30 минут</td>
        <td>1300</td>
      </tr>
      <tr>
        <td>Дагомыс</td>
        <td>1 час 30 минут</td>
        <td>1200</td>
      </tr>
      <tr>
        <td>Красная Поляна</td>
        <td>2 часа 30 минут</td>
        <td>2800</td>
      </tr>
      <tr>
        <td>Лоо</td>
        <td>2 часа 10 минут</td>
        <td>1200</td>
      </tr>
    </tbody>
  </table>
  </div>
  <div id="map">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d2fb6130243f2daf07ecf5cc48c21b9775871ad598efb69e0aea6a65b8b1143&amp;source=constructor" width="100%" height="492" frameborder="0"></iframe>
  </div>
</div>
</template>


<style scoped>
.deliveri_all{
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
td{
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 22px;
  border: 1px solid transparent;
  color: #595959;
  font-size: 18px;    
  font-family: Arial, sans-serif;
  line-height: 1.55;
  font-weight: 500;
}
td:nth-child(2) {
  padding-right: 145px;
  padding-left: 160px;
}
td:nth-child(3) {
text-align: right;
  /* background-color:darkred; */
}
td:nth-child(3)::after {
  content: "₽";
  margin-left: 4px;
  /* position: relative; */
  /* margin: 0 auto; */
}
tr {
  border-top: 2px solid #f0f0f0;
}
tr:nth-last-child(1){
border-bottom: 2px solid #f0f0f0;
}

/* .delivery_td3{
}
.delivery_td3::after {
  } */
  
  
  /*
  .delivery_tbody{
  background-color:darkred ;
  vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
  }
  .delivery_table{
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 16px;
}
.delivery_tr>td{
  font-size: 2em;
  border: 1px solid transparent;
  color: #595959;
  font-size: 14px;    
  font-family: Arial, sans-serif;
  line-height: 1.55;
  font-weight: 500;
} */
  #map {
    border-radius: 20px;
	width: 695px;
  background-color: bisque;
}
</style>