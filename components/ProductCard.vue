<template>
  <div class="card">
    <div>
      <div>
      <nuxt-img preset="cover" class="card_image"  src="icon/111.jpg" /> 
      </div>
    </div>
    <div class="cardBottom">
      <button id="1"  class="card__info">Подробнее</button>
      <button id="two" class="card__add">Добавить в корзину</button>
    </div>
    <div class="card__price card__price--discount">5 000</div>
    <p class="info_flower">Нежный букет из 19 веток яркой кустовой пионовидной розы</p>
    <a href="#" class="card__title"> Монобукет Мисти Баблс </a>
  </div>

</template>

<style>
  .card {
    margin: 0 auto;
    border-radius: 10px !important;
    display: block;
    width: 327px;
    min-height: 500px;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
  }
  .card:hover {
    box-shadow: 0px 0px 20px rgba(15, 8, 5, 0.2);
  }
  .card__top {
    flex: 0 0 220px;
    position: relative;
    overflow: hidden;
  }
  .card_image {
    border-radius: 5px 5px 0 0  !important;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0; 
    overflow: hidden;
    width: 100vw;
    /* height: 327px; */
    object-fit: cover;
    transition: 0.2s;
  }
  
  .card__label {
    padding: 4px 8px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff6633;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }
  
  .cardBottom {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* flex: 1 0 auto; */
    padding: 10px;
  }
  
  .card__prices {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .card__price::after {
    margin: 0 auto;
    content: "₽";
    margin-left: 4px;
    position: relative;
  }
  
  .card__price--discount {
    margin: 0 auto;
    font-weight: 700;
    font-size: 19px;
    color: #414141;
    display: flex;
    flex-wrap: wrap-reverse;
  }
  
  
  
  .card__price--common {           /* не разобрался что это (--common) */  
    font-weight: 400;
    font-size: 17px;
    color: #414141;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
  }

  .card__title {
    margin: 0 auto;
    /* padding: 10px; */
    position: relative;
    text-decoration: none;
    transition: color 200ms ease, font-weight 200ms ease !important;
    display: inline-block;
    width: fit-content;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 17px;
    line-height: 150%;
    text-align: center;
    color: #000000;
  }
  .info_flower{
    margin: 0 auto;
    color: #595959;
    font-size: 14px;
    line-height: 1.55;
    text-align: center;
    font-family: 'TildaSans', Arial, sans-serif;
    font-weight: 300;
  }
  .card__title:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  .card__title::before {
    color: #000000;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 500ms !important;
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
    content: '';
  }

  .card__title:hover {
    color: #000000 !important;
  }

  .card__add {
    margin: 0 auto;
    padding: 15px;
    color: #ffffff;
    background-color: #595959;
    border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    font-weight: 500;
    
  }
  .card__info {
    margin: 0 auto;
    padding: 15px;
    color: #ffffff;
    background-color: #e8cbb1;
    border-radius: 25px;
    /* -moz-border-radius: 25px; */
    /* -webkit-border-radius: 25px; */
    /* font-family: TildaSans; */
    font-weight: 500;

    /* height: 35px;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #e1cbb7;
    display: block;
    font-weight: 400;
    color: #414141;
    text-align: center;
    border: 1px solid #414141;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.2s;
    margin-top: auto; */
    /* width: 100%; */
    /* font-size: 17px; */
    /* padding: 10px; */
  }

  .card__add:hover {
    background-color: #e4b891;
    color: #fff;
  } 
  .card__info:hover {
    background-color: #e4b891;
    color: #fff;
  } 
 
</style>