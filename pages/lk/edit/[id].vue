<template>
  {{ data }}

  <!-- {{ types }} -->
  <!-- {{ route.params.id }} -->
  <form class="forma_zapolneniya" method="put" @submit.prevent="upload">

    <input type="text" name="title" v-model="data.product.title" placeholder="Заголовок">
    <textarea type="text" name="description" v-model="data.product.description" placeholder="Текст публикации"></textarea>

    <select name="type" id="type_id_select" v-model="data.product.type_id">
      <option v-for="t of types?.type" :key="t.id" :value="t.id" >{{ t.title }}</option>
    </select>
    <input type="number" name="price" v-model="data.product.price" placeholder="price">
    <label for="sale">Скидка:</label>
    <input type="number"  id="sale" name="sale" v-model="data.product.sale" placeholder="Введите скидку">

    <input type="text" name="newName" v-model="newName" placeholder="new filename">

    
    <div>  
      <label for="file">Изображение:</label>
      <input type="file" id="file" ref="file" multiple @change="handleFileUpload" placeholder="Изображение">
      
      <div class="preview-container">
        <div v-for="(image, index) of previewImages" :key="index" class="preview-item">
          <img :src="image" alt="Превью" class="preview-image" />
          <button @click.prevent="removeImage(index)" class="remove-button">×</button>
        </div>
      </div>
      <div class="preview-container">
        <div v-for="(image, index) of data.product?.img" :key="index" class="preview-item">
          <img preset="cover" :src="`/img/${image.img}`" class="preview-image" ></img>
          <!-- <button @click.prevent="removeImage(index, image.id)" class="remove-button">×</button> -->
        </div>
      </div>
    </div>
    
    <!-- enctype='multipart/form-data' -->
    <input type="submit" value="Опубликовать">
    
  </form>
</template>

<script setup lang="ts">
import { useUsers } from '~/stores/user'
const userStore = useUsers()
// ${userStore.user?.id}
const route = useRoute()
const {data, refresh} = await useFetch(`/api/product/${route.params.id}`)
const {data:types} = await useFetch('/api/type')
// console.log(route.params.id)
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

// Обработчик загрузки файлов
const handleFileUpload = (event: Event ) => {
  const target = event.target as HTMLInputElement
  // @ts-ignore
  files = target.files || [] as any[]
  if (files) {
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
//************************************************************
const newName = ref('')
const file = ref(null)
const upload = async () => {

  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (files.length) {
    fD.append('title', data.value.product.title)
    fD.append('newName', newName.value)
    fD.append('description', data.value.product.description)
    fD.append('type_id', data.value.product.type_id.toString())
    for (let i=0;i<files.length;i++) {
      fD.append('img'+i, files[i])
    }
    fD.append('price', data.value.product.price.toString())
    fD.append('sale', data.value.product.sale.toString())
    await $fetch('/api/product/:id', {
      method:'PUT',
      body: fD
    })
    newName.value = ''
    fileref.value = ''
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
    /* object-fit: cover; */
    /* box-sizing: border-box; */
  }
  /* ********************* */
  .preview-container {
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