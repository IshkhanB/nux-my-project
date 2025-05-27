
<template>
  <div class="anchor" style="transform: translateY(-160px);" id="catalog"></div>
  <div  class="cards">
    <ProductsNew v-for="product of products" :product="product" :key="product.id" />
  </div>
  <select name="ipp" id="ipp" v-model="itemsPerPage">
    <option value="4">4</option>
    <option value="6">6</option>
    <option value="8">8</option>
  </select>
  <div class="pagination">
    <button v-for="page in totalPages" :key="page" @click="currentPage = page"  class="pagination-button" :class="{ active: currentPage == page }"> {{ page }}</button>
  </div>
</template>
<script setup lang="ts">
const typeStore = useTypes()
const router = useRouter()
const route = useRoute()
const products = ref([] as any[])
const itemsPerPage = ref(Number(route.query?.items) || 4)
const currentPage = ref(Number(route.query?.page) || 1)
const totalPages = ref(0)
watchEffect(async () => {
  const query = {} as any
  let needUpdate = false
  if (currentPage.value>1) {
    if (route.query.page!=currentPage.value.toString()) needUpdate = true
    query.page=currentPage.value
  } else {
    if (route.query.page) needUpdate = true
  }
  if (itemsPerPage.value!=4) {
    if (route.query.items!=itemsPerPage.value.toString()) needUpdate = true
    query.items=itemsPerPage.value
  } else {
    if (route.query.items) needUpdate = true
  }
  if (needUpdate) router.replace({query}) 
  const id = typeStore.arr.find(el=>el.path==route.path)?.id
  const queryArr = Object.entries(route.query)
  const queryStr = queryArr.length ? '?'+queryArr.map(el=>el[0]+'='+el[1]).join('&') : ''
  const {data} = await useFetch<{products:any[], count:number}>(`/api/product/type/${id}${queryStr}`)
  products.value = data.value?.products || []
  totalPages.value = Math.ceil((data.value?.count||0)/itemsPerPage.value)
})
</script>
<style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
  }
  .pagination-button {
    padding: 8px 16px;
    background-color: #595959;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .pagination-button.active {
    background-color: #e8cbb1; /* Стиль для активной кнопки */
    color: #fff;
    font-weight: bold;
  }
  .pagination-button:hover:not(:active) {
    background-color: #e4b891;
  }
</style>