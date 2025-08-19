<template>
  <form class="forma_zapolneniya">
    <div class="name_input">
      <h2 style="margin: 10px;" >Оформление</h2>
      <label>
       <input type="checkbox" v-model="gost">
       Заберу сам!
      </label>
      <br>
      <label>
        <input type="text" name="name"  placeholder="ФИО">
      </label>
      <br> 
      <label>
        <input type="tel" name="tel" placeholder="Номер телефона">
      </label>
      <br> 
      <label>
        <input type="email" name="email" placeholder="Email">
      </label>
      
      <div v-if="!gost">
        <hr style="width: 40vw; margin: 0 auto;">
        <label>
          <input type="text" name="name"  placeholder="ФИО получателя">
        </label>
        <br>
        <label>
          <input type="telefon" name="telefon" placeholder="Номер телефона получателя">
        </label>
        <br>
        <label>
          <input type="text">
        </label>
        <br>
        <label>
          <input type="datetime-local">
        </label>
        <br>
        <label>
          <input type="text" name="adres" placeholder="Адрес">
        </label>
      </div>
    </div>
  
  </form>
</template>
<script setup lang="ts">
const gost = ref(false) 
</script>
<style scoped>

.forma_zapolneniya{
  margin: 0 auto;
  width: 1400px;
  padding:10px ;
  /* width: 600px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
}
.name_input{
  text-align: center;
  width: 50vw;
  border-radius: 20px;
  /* border: 1px solid black; */
  background-color: rgb(253, 247, 240);
}
.name_input>label>input{
  margin: 10px ;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid black;
}
.name_input>div input{
  margin: 10px ;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  border: 1px solid black;
}
</style>