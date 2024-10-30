<template>
  <div class="card">
    <div class="cardImage">
      <img src="public/111.jpg">
    </div>
    <div>

    </div>
    <div class="cardBottom">
      <button id="1"  class="card__add">Подробнее</button>
      <button id="2" class="card__add">Добавить</button>
    </div>
  </div>

  <!-- <div class="card">
    <div class="card__top">
      <a href="#" class="cardImage">
        <img
        src="public/111.jpg/"
        />
      </a>
      <label class="card__label">-10%</label>
    </div>
    <div class="cardBottom">
      <div class="card__prices">
        <div class="card__price card__price--discount">5 000</div>
      </div>
      <a href="#" class="card__title">
        Монобукет Мисти Баблс
      </a>
      <button class="card__add">Добавить в корзину</button>
    </div>
  </div> -->
</template>

<style>
  .card {
    display: block;
    max-width: 325px;
    min-height: 350px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    transition: 0.2s;
    position: relative;
    background-color: #d8bda4;
  }
  .card:hover {
    box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
  }
  .card__top {
    flex: 0 0 220px;
    position: relative;
    overflow: hidden;
  }
  .cardImage > img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    /* padding-top: 5px;
    border-radius: 10px !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s; */
  }
  /* .cardImage:hover > img {
    transform: scale(1.1);
  } */
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* flex: 1 0 auto; */
    padding: 10px;
  }

  .card__prices {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .card__price::after {
    content: "₽";
    margin-left: 4px;
    position: relative;
  }

  .card__price--discount {

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
    position: relative;
    text-decoration: none;
    transition: color 200ms ease, font-weight 200ms ease !important;
    display: inline-block;
    width: fit-content;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 17px;
    line-height: 150%;
    text-align: center;
    color: inherit;
  }

  .card__title:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  .card__title::before {
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
    height: 35px;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #e1cbb7;
    display: block;
    /* width: 100%; */
    font-weight: 400;
    /* font-size: 17px; */
    color: #414141;
    /* padding: 10px; */
    text-align: center;
    border: 1px solid #414141;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.2s;
    margin-top: auto;
  }

  .card__add:hover {
    border: 1px solid #e4b891;
    background-color: #e4b891;
    color: #fff;
  } 
</style>