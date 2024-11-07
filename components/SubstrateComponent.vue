<template>
  <div class="substrate">
    <slot></slot>
  </div>
</template>
<style>
.substrate{
  box-sizing: border-box;
  /* padding-top: 30px; */
  /* background-color: rgb(176, 201, 223); */
  margin: 0 auto;
  max-width: 1400px;
  /* box-shadow: 0px 0px 25px #e0bfaf; */
  border-radius: 15px;
}
/* img {
  overflow-clip-margin: content-box;
  overflow: clip;
} */
</style>