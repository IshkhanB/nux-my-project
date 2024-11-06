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

<style>
.cards {
    margin: 0 auto;
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    max-width: 1300px; 
    width: 100%;
    justify-content: center;
    justify-items: center;
    column-gap: 30px; 
    row-gap: 40px; 
  }
</style>
