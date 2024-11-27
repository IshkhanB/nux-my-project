
<template>
  <div class="feedback_card">
    <h2>{{ review?.name }}</h2>
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
  margin: 0 auto;
  padding: 5px;
  width: 300px;
  height: 400px;
  background-color: rgb(248, 248, 248);
  border-radius: 20px;
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
}
.feedback_card>p{
  font-size: 20px;
  text-align: center;
  padding: 5px;
  color: #595959;
}
</style>