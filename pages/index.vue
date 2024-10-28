<template>
  <div class="fonAll">
    <footer></footer>
    <div class="cards">
      <div class="card">
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
      </div>

      <div class="card">
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
      </div>

      <div class="card">
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
      </div>

      <div class="card">
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
      </div>

    </div>
  </div>
</template>

<style scoped>
.fonAll {
  max-width: 900px;
  padding: 20px;
  background-color: #e1cbb7;
  box-shadow: 1px 2px 4px rgba(0.5, 0.5, 0.5, 0.5);
}
 .cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  width: 100%;
  max-width: 1000px; /* Ширина grid-контейнера */
  justify-content: center;
  justify-items: center; /* Размещаем карточку по центру */
  column-gap: 30px; /* Отступ между колонками */
  row-gap: 40px; /* Отступ между рядами */
  margin: 0 auto;
}

.card {
  width: 225px;
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
  padding-top: 5px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;
}
.cardImage:hover > img {
  transform: scale(1.1);
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
  flex-direction: column;
  flex: 1 0 auto;
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
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  text-align: center;
  color: #414141;
}

.card__title:hover {
  color: #e4b891;
  transform-origin: 0% 50%; /*  хотел добавить подчеркивание не получилось  */
  transform: scale3d(1, 1, 1);
}

.card__add {
  background-color: #e1cbb7;
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #414141;
  padding: 10px;
  text-align: center;
  border: 1px solid #414141;
  border-radius: 4px;
  cursor: pointer; /* Меняем курсор при наведении */
  transition: 0.2s;
  margin-top: auto; /* Прижимаем кнопку к низу карточки */
}

.card__add:hover {
  border: 1px solid #e4b891;
  background-color: #e4b891;
  color: #fff;
} 
</style>