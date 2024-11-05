<template>
  <div class="hederDiv substrate">
    <!-- <section> -->
    <header class="header">
      <h1>
        FLOWER MARKET
        <p>Магазин доставки цветов по Сочи</p>
      </h1>
      <nav class="headerNav">
        <a href="#">Каталог</a>
        <a href="#">Доставка и оплата</a>
        <a href="#">FAQ</a>
        <a href="#">О нас</a>
        <a href="#">Отзывы</a>
      </nav>
      <div class="iconciVDiv">
        <a class="iconSearch" href="#">
          <img src="public/ic_sharp-search_1.svg" alt="">
        </a>
        <a class="iconSearch" href="#">
          <img src="public/icon-park-outline_li.svg" alt="">
        </a>
        <a class="iconSearch" href="#">
          <img src="public/ic_outline-shopping-.svg" alt="">
        </a>
      </div>
    </header>
  </div>
</template>
<style scoped>
h1{
  background-image: url(public/mdi_flower-tulip-out.svg);
  background-repeat: no-repeat;
  padding-left: 50px;
  background-size: 50px;
  background-position: left;
  font-size: 25px;
  color: #595959;
  
}
p{
  color: #595959;
  font-size: 14px;
  border-color: transparent;
  border-style: solid;
}
.header{
  margin: 0 auto;
  display: flex;
}
.hederDiv{ 
  position: sticky;
  top: 0;
  z-index: 999;
  margin-top: 20px;
  margin-bottom:30px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 25px #e0bfaf;
  
}
.headerNav {
  margin: auto;
  padding: 20px;
  align-content: center;
  display: flex;
  gap: 40px;
  height:58px;
}
.headerNav>a {
  position: relative;
  justify-content: space-around;
  /* padding-right: 30px; */
}

.headerNav>a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}

.headerNav>a::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 500ms !important;
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  /* pointer-events: none; */
  content: '';
}
.iconciVDiv {
    margin: auto 10px auto auto;
    padding: 10px;
    align-content: center;
    display:flex;
    gap: 20px;
    height:58px;
  }
  .iconciVDiv>a>img {
    width: 35px;
  }
  </style>