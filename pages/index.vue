<template>
 <SubstrateComponent>
  <div class="cards">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </div>
  <AboutUs/>
  <div> 
    <NuxtPage/>
  </div>
</SubstrateComponent>
</template>
<style ></style>

<style>
.cards {
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 325px);
    max-width: 1400px; 
    width: 100%;
    justify-content: center;
    justify-items: center;
    column-gap: 16px; 
    row-gap: 20px; 
    overflow: hidden;
  }
</style>
