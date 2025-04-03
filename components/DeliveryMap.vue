<template>
  <div class="anchor"  id="delivery" style="transform: translateY(-60px);"></div>
  <div class="deliveri_all">
    <div>
    <table>
      <tbody>
        <tr v-for="d of delivery" :key="d.id">
          <td>{{ d.name }}</td>
          <td>{{ d.time }}</td>
          <td>{{ d.price }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div id="map">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A663b0081b92e59307de95b27d7910777ea42587a40c0374a55ad95d4370d46e6&amp;source=constructor" width="695" height="492" frameborder="0"></iframe>
    </div>
    <!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d2fb6130243f2daf07ecf5cc48c21b9775871ad598efb69e0aea6a65b8b1143&amp;source=constructor" width="100%" height="492" frameborder="0"></iframe> -->
</div>
</template>

<script setup lang="ts">
  defineProps(['delivery'])
</script>

<style scoped>
.deliveri_all{
  margin-top: 50px;
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
}
td:nth-child(3)::after {
  content: "₽";
  margin-left: 4px;
}
tr {
  border-top: 2px solid #f0f0f0;
}
tr:nth-last-child(1){
border-bottom: 2px solid #f0f0f0;
}
  #map {
  border-radius: 20px;
  overflow: hidden;
	width: 695px;
  background-color: bisque;
}
</style>