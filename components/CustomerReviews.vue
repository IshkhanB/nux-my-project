<template>
  <div class="customer_div">
  <div class="anchor" id="reviews"></div>
    <h1 class="customer_h1">Что говорят о наших букетах</h1>
    <p class="customer_p">Наши покупатели всегда остаются довольны <br> доставленными цветами и подарками</p>
  </div>
  <div class="customer_cards" >
    <FeedbackCard v-for="review of reviews" :review="review" :key="review.id"/>
  </div>  
</template>
<script setup lang="ts">
defineProps(['reviews'])

</script>

<style scoped>
.customer_div{
  margin: 0 auto;
  padding: 5px;
}
.customer_h1{
  margin: 20px auto;
  text-align: center;
  color: #595959;
  font-size: 50px;
  font-family: 'Cormorant', Arial, sans-serif;
  letter-spacing: -1px;
  text-transform: uppercase;
  line-height: 63px;
}
.customer_p{
  margin: 20px auto;
  text-align: center;
  color: #595959;
  font-size: 30px;
  font-family: 'Cormorant', Arial, sans-serif;
}
.customer_cards{
  display: flex;
  padding: 5px;
  flex-wrap: wrap;
  gap: 40px 20px;
  
}


</style>