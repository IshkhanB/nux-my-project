<template>
  <div class="feedback_div">
    <h1 class="feedback_h1">Что говорят о наших букетах</h1>
    <p class="feedback_p">Наши покупатели всегда остаются довольны <br> доставленными цветами и подарками
    </p>
  </div>
  <div class="feedback_cards" >
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    
  </div>
  
</template>
<style scoped>
.feedback_div{
  margin: 0 auto;
  padding: 5px;
}
.feedback_h1{
  margin: 20px auto;
  text-align: center;
  color: #595959;
  font-size: 50px;
  font-family: 'Cormorant', Arial, sans-serif;
  letter-spacing: -1px;
  text-transform: uppercase;
  line-height: 63px;
}
.feedback_p{
  margin: 20px auto;
  text-align: center;
  color: #595959;
  font-size: 30px;
  font-family: 'Cormorant', Arial, sans-serif;
}
.feedback_cards{
  display: flex;
  margin: 0 auto;
  padding: 5px;
  flex-wrap: wrap;
  gap: 40px 20px;
  
}


</style>