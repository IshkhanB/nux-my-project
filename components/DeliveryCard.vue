<template>
<div>
  <div>
  <table class="delivery_table">
    <tbody class="delivery_tbody">
      <tr class="delivery_tr">
        <td>Сочи, Центральный</td>
        <td>1 час 5 минут</td>
        <td>0</td>
      </tr>
      <tr class="delivery_tr">
        <td>Сириус</td>
        <td>1 час 30 минут</td>
        <td>1800</td>
      </tr>
      <tr class="delivery_tr">
        <td>Хоста, Кудепста</td>
        <td>1 час 10 минут</td>
        <td>800</td>
      </tr>
      <tr class="delivery_tr">
        <td>Адлерский р-н</td>
        <td>1 час 30 минут</td>
        <td>1300</td>
      </tr>
      <tr class="delivery_tr">
        <td>Дагомыс</td>
        <td>1 час 30 минут</td>
        <td>1200</td>
      </tr>
      <tr class="delivery_tr">
        <td>Красная Поляна</td>
        <td>2 часа 30 минут</td>
        <td>2800</td>
      </tr>
      <tr class="delivery_tr">
        <td>Лоо</td>
        <td>2 часа 10 минут</td>
        <td>1200 </td>
      </tr>
    </tbody>
  </table>
  </div>
  <div id="map"></div>
</div>
</template>

<style>
.delivery_table{
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 16px;
}
.delivery_tbody{
  display: table-row-group;
  vertical-align: middle;
  unicode-bidi: isolate;
  border-color: inherit;
}
.delivery_tr{
  display: table-cell;
  vertical-align: middle;
  unicode-bidi: isolate;
  border-color: inherit;
  width: 100%;
}
.delivery_tr>td{
  font-size: 2em;
  border: 1px solid transparent;
  color: #595959;
  font-size: 14px;
  font-family: 'TildaSans', Arial, sans-serif;
  line-height: 1.55;
  font-weight: 500;
  /* background-position: center center;
  border-color: transparent;
  border-style: solid; */
}
  #map {
	width: 621px;
	height: 420px;
}
</style>