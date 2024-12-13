
<template>
  <div class="feedback_card">
    <NuxtImg class="feedback_img" :src="review?.photo" ></NuxtImg>
    <h1>{{ review?.name }}</h1>
    <h2>{{ review?.date }}</h2>
    <h3>{{ review?.products }}</h3>
    <p>{{ review?.review }}</p>
  </div>

</template>

<script setup lang="ts">
defineProps(['review'])
</script>

<style>
.feedback_card{
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  width: 300px;
  height: 350px;
  background-color: rgb(248, 248, 248);
  border-radius: 20px;
  /* display: block; */
}
.feedback_img{
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: 100px;
  border-radius: 50%;
}
.feedback_card>h1{
  font-size: 30px;
  text-align: center;
  padding: 5px;
  color: #595959;
  padding-top: 30px;
}
.feedback_card>h2{
  font-size: 30px;
  text-align: center;
  padding: 5px;
  color: #595959;
}
.feedback_card>h3{
  font-size: 25px;
  text-align: center;
  padding: 10px;
  color: #595959;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.feedback_card>p{
  font-size: 20px;
  text-align: center;
  padding: 5px;
  color: #595959;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>