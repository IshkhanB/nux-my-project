<template>
  <div>
   <div v-if="userStore.user">
    <h1>LK</h1>
    <button @click="userStore.logOut">logout</button>
   </div>  
   <p v-else>
    Go home
   </p>


   <h2>Мои товары</h2>


    <form class="forma_zapolneniya" method="post" @submit.prevent="upload">

      <input type="text" name="title" v-model="title" placeholder="Заголовок">

      <textarea type="text" name="description" v-model="description" placeholder="Текст публикации"></textarea>
      <input type="text" name="type" v-model="type_id" placeholder="type">

      <!-- <select name="type" id="type_id_select">
        <option value="">-- Выберите тип --</option>
        <option value="1" onclick="product.type_id">Цветы</option>
        <option value="4">Подарки</option>
      </select> -->

      <!-- <USelect v-model="country" :options="countries" option-attribute="name" /> -->
     
      <!-- <USelect v-model="type" :options="['United States', 'Canada', 'Mexico']" >sdlf;gk;</USelect> -->
      
      
      <input type="number" name="price" v-model="price" placeholder="price">
      <input type="text" name="newName" v-model="newName" placeholder="new filename">
      <input type="file" ref="file" placeholder="Изображение">
      
      <input type="submit" value="Опубликовать">
    </form>
    <div class="cards" style="padding-top: 50px;">
      <ProductCard v-for="product of products" :product="product" :key="product.id" />
    </div>
    <!-- <option v-for="type of types" :type="type" :key="type.id" >{{type.title}}</option> -->
    <!-- v-for="type of types" :product="type" :key="type.id" -->
    <!-- <label >Какой тип: </label> -->
    <!-- <select  > 
      <option v-for="type of types" :type="type.title" :key="type.title" value="all">-- Выберите тип --</option>
      <option  value="hit_sales">Хиты продаж</option>
      <option value="bouquets">Букеты</option>
      <option value="stocks">Акции</option>
      <option value="gifts">Подарки</option>    
    </select>  -->
        
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/stores/user'
const userStore = useUsers()

// defineProps(['types'])
// const typeStore = useTypes()
const {data, refresh} = await useFetch(`/api/product`)
const products = ref(data.value?.products)
const {data_type} = await useFetch('/api/type') as any
// const d = data_type
// const type = ref(data_type.value.type_id)
// console.log(type)
// const countries = ['United States', 'Canada', 'Mexico']
// const country = ref(countries[0])
const types = [{id:1, title: 'flowers'},{id:4, title:'gifts'}]

definePageMeta({
  layout: 'admin'
})
onMounted( async ()=>{
  await userStore.autoLogin()
  if (!userStore.user) {
    navigateTo('/')
  }
})

const title = ref('')
const description = ref('')
const type_id = ref('')
const newName = ref('')
const price = ref(0)
const file = ref(null)

const upload = async () => {
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (fileref.files) {
    fD.append('title', title.value)
    fD.append('newName', newName.value)
    fD.append('description', description.value)
    fD.append('type_id', '1')
    fD.append('img', fileref.files[0])
    fD.append('price', price.value.toString())
    await $fetch('/api/product', {
      method: 'POST',
      body: fD
    })
    title.value = ''
    description.value = ''
    newName.value = ''
    price.value = 0
    refresh()
    
  }
}
</script>

<style scoped>
.forma_zapolneniya{
  margin: 0 auto;
  padding:10px ;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px red solid;
}
input,textarea{
  border-bottom: 1px grey solid;
  padding: 10px;
  width: 400px;

}
  /* .select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "⬇️";
  position: absolute;
  right: 0;
  margin-top: -2px;
  pointer-events: none;
}

select {
  appearance: none;
  width: 200px;
  padding: 4px;
  border-color: #aaa;
  border-radius: 3px;
} */

</style>

