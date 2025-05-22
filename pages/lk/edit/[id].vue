<template>
  <div>

    <form class="forma_zapolneniya" method="put" @submit.prevent="upload">
      
      <input type="text" name="title" v-model="product.title" placeholder="Заголовок">
      <textarea type="text" name="description" v-model="product.description" placeholder="Текст публикации"></textarea>
    
      <select name="type" id="type_id_select" v-model="product.type_id">
        <option v-for="t of types?.type" :key="t.id" :value="t.id" >{{ t.title }}</option>
      </select>
      <input type="number" name="price" v-model="product.price" placeholder="price">
      <label for="sale">Скидка:</label>
      <input type="number"  id="sale" name="sale" v-model="product.sale" placeholder="Введите скидку">
      
      <input type="text" name="newName" v-model="newName" placeholder="new filename">
      
      
      <div class="add_img">  
        <label for="file">Изображение:</label>
        <input type="file" id="file" ref="file" multiple @change="handleFileUpload" placeholder="Изображение">
        
        <div class="preview-container">
        <div v-for="(image, index) of product?.img" :key="index" class="preview-item">
          <NuxtImg preset="cover" :src="`/img/${image.img}`" class="preview-image" />
          <button @click.prevent="removeImageFromServer(product.img[index].id)" class="remove-button">×</button>
        </div>
      </div>
      <hr style="color: gray; margin: 20px auto;">
      <div class="preview-container">
        <div v-for="(image, index) of previewImages" :key="index" class="preview-item">
          <img preset="cover" :src="image" alt="Превью" class="preview-image" />
          <button @click.prevent="removeImage(index)" class="remove-button">×</button>
        </div>
      </div>
    </div>
    <!-- {{ product }} -->
    <!-- enctype='multipart/form-data' -->
    <!-- <input type="submit" value="Cохранить"> -->
    <button style="background-color: rgb(168, 168, 177); padding: 5px;" @click.prevent="upload()">Сохранить</button>  
  </form>
 </div>
</template>

<script setup lang="ts">

import { useUsers } from '~/stores/user'
// console.log('start')
const userStore = useUsers()
// ${userStore.user?.id}
const route = useRoute()
const {data, refresh} = await useFetch(`/api/product/${route.params.id}`)
const {data:types} = await useFetch('/api/type')
// console.log(data.value)
// @ts-ignore
const product = ref(data.value?.product)
// console.log(route.params.id)
const previewImages = ref([] as any[])
const newName = ref('')
const file = ref(null)
let files = [] as any[]

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

const handleFileUpload = (event: Event ) => {
  const target = event.target as HTMLInputElement
  // @ts-ignore
  files = Array.from(target.files ) || [] as any[]
  if (files.length ) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      
      // Чтение файла и добавление его в массив превью
      reader.onload = (e) => {
        previewImages.value.push(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }
}

// Удаление изображения из превью
const removeImage = (index: number) => {
  previewImages.value.splice(index, 1)
  files.splice(index, 1)
}
const removeImageFromServer = (id:number) => {
  fetch('/api/image/'+id, {
    method: 'DELETE'
  })
  location.reload()
}

const upload = async () => {
  if (!product.value) {
    console.log('Product data is not loaded')
    return
  }
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  fD.append('title', product.value.title)
  fD.append('newName', newName.value)
  fD.append('description', product.value.description)
  fD.append('type_id', product.value.type_id.toString())
  for (let i=0;i<files.length;i++) {
    fD.append('img'+i, files[i])
  }
  fD.append('price', product.value.price.toString())
  fD.append('sale', product.value.sale.toString())
  const dataResp = await $fetch('/api/product/'+product.value.id, {
    method:'PUT',
    body: fD
  })
  console.log(dataResp)
  newName.value = ''
  fileref.value = ''
  previewImages.value = []
  setTimeout(()=>location.reload(),500)
  //@ts-ignore
  // product.value = data.value.product
}

  // methods: {
  //  const  reloadPage() {
  //     window.location.reload();
  //   }
  // }

let reloadPage = () => {
  window.location.reload();
}

// await refresh()
// location.reload()
// setTimeout(()=>location.reload(),5000)
</script>

<style scoped>
body{
  margin: 0;
}
#type_id_select{
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px ;
}
.add_img{
  transform: translate(25px, 10px);
  margin: 0 auto;
  padding: 10px;
}
.forma_zapolneniya{
  /* background-color: #0f172a; */
  margin: 0 auto;
  padding:10px ;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 20px; */
  /* border: 1px red solid; */
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