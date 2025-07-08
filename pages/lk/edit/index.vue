<template>
  <div>
      <HeaderComp/>
      <div>
        <div v-if="userStore.user" style="margin: 0 auto;">
        <button style="border:1px solid black; background-color: antiquewhite; box-sizing: border-box;  margin-left: 90%; margin-top: 20px; padding: 5px; border-radius: 20px;" @click="userStore.logOut">logout</button>
        <h1 style="text-align: center; margin: 20px auto; font-size: 40px; font-weight: 900; color: rebeccapurple;">Мой личный кабинет!</h1>
      </div>  
      <div v-else>
        Go home
      </div>
      <form class="forma_zapolneniya" method="post" @submit.prevent="upload">
        
        <input type="text" name="title" v-model="title" placeholder="Заголовок">
        <textarea type="text" name="description" v-model="description" placeholder="Текст публикации"></textarea>
        
        <select name="type" id="type_id_select" v-model="type_id">
          <option v-for="t of types?.type" :key="t.id" :value="t.id">{{ t.title }}</option>
        </select>
        <input type="number" name="price" v-model="price" placeholder="price">
        <label for="sale">Скидка:</label>
        <input type="number"  id="sale" name="sale" v-model="sale" placeholder="Введите скидку">
        
        <input type="text" name="newName" v-model="newName" placeholder="new filename">
        <div style="transform: translate(25px, 10px);">

            <label for="file">Изображение:</label>
            <input type="file" id="file" ref="file" multiple @change="handleFileUpload" placeholder="Изображение">
          
          <div class="preview-container">
            <div v-for="(image, index) in previewImages" :key="index" class="preview-item">
              <img :src="image" alt="Превью" class="preview-image" />
              <button @click.prevent="removeImage(index)" class="remove-button">×</button>
            </div>
          </div>
        </div>
        <input type="submit" value="Опубликовать">
      </form>
      <div class="cards" style="padding-top: 50px;">
        <ProductsEdit v-for="product of data?.products" :product="product" :refresh="refresh" :key="product.id" />
      </div>    
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductsEdit from '~/components/ProductsEdit.vue'
import { useUsers } from '~/stores/user'
console.log('start')
const userStore = useUsers()
const {data, refresh} = await useFetch(`/api/product`)
const {data:types} = await useFetch('/api/type')
const type_id = ref(1)

definePageMeta({
  layout: 'admin'
})
onMounted( async ()=>{
  await userStore.autoLogin()
  if (!userStore.user) {
    navigateTo('/')
  }
})
//************************************************************
const previewImages = ref([] as any[])
let files = [] as any[]

const handleFileUpload = (event: Event ) => {
  const target = event.target as HTMLInputElement
  // @ts-ignore
  files = Array.from(target.files) || [] as any[]
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      reader.onload = (e) => {
        previewImages.value.push(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }
}
const removeImage = (index: number) => {
  previewImages.value.splice(index, 1)
  files.splice(index, 1)
}
const title = ref('')
const description = ref('')
const newName = ref('')
const price = ref(0)
const sale = ref(0)
const file = ref(null)
const upload = async () => {

  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (files.length) {
    fD.append('title', title.value)
    fD.append('newName', newName.value)
    fD.append('description', description.value)
    fD.append('type_id', type_id.value.toString())
    for (let i=0;i<files.length;i++) {
      fD.append('img'+i, files[i])
    }
    fD.append('price', price.value.toString())
    fD.append('sale', sale.value.toString())
    await $fetch('/api/product', {
      method: 'POST',
      body: fD
    })
    title.value = ''
    newName.value = ''
    description.value = ''
    type_id.value = 1
    fileref.value = ''
    price.value = 0
    sale.value = 0
    previewImages.value = []
    refresh()
    
  }
}
</script>
<style scoped>
#type_id_select{
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px ;
}
.forma_zapolneniya{
  margin: 0 auto;
  padding:10px ;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input,textarea {
  display: block;
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
 .swip{
   margin: 0 auto;
   display: flex;
   align-items: center;
  }
  swiper-slide>img {
    object-position: center;
    border-radius: 20px;
  }
  .swip_div{
    margin: 0 auto;
    width: 327px;
  }
  .preview-container {
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.preview-item {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.remove-button:hover {
  background: rgba(255, 0, 0, 1);
}
</style>

