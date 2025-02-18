<template>
  <div>
    <div v-if="userStore.user">
      <h1>LK</h1>
      <button @click="userStore.logOut">logout</button>
    </div>  
    <p v-else>
      Go home
    </p>
    <!-- ################################################################## -->
    <!-- <div class="swip_div">
      <ClientOnly class="swip">
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="image, i of images" :key="i">
            <NuxtImg preset="cover" width="327px"  :src="image" alt=""></NuxtImg>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div> -->
    <!-- ################################################################## -->
    

   <h2>Мои товары</h2>
   
    <form class="forma_zapolneniya" method="post" @submit.prevent="upload">
      <iframe src="https://yandex.ru/sprav/widget/rating-badge/237768002038?type=rating&theme=dark" width="150" height="50" frameborder="0"></iframe>

      <input type="text" name="title" v-model="title" placeholder="Заголовок">
      <textarea type="text" name="description" v-model="description" placeholder="Текст публикации"></textarea>
      <select name="type" id="type_id_select" v-model="type_id">
        <option v-for="t of types?.type" :key="t.id" :value="t.id">{{ t.title }}</option>
      </select>
      
      <input type="number" name="price" v-model="price" placeholder="price">
      <input type="number" name="sale" v-model="sale" placeholder="sale">
      <input type="text" name="newName" v-model="newName" placeholder="new filename">
      
      
      <input type="file" ref="file" multiple placeholder="Изображение">
      
      
      <!-- enctype='multipart/form-data' -->
      <input type="submit" value="Опубликовать">
    </form>
    <div class="cards" style="padding-top: 50px;">
      <ProductCard v-for="product of data?.products" :product="product" :key="product.id" />
    </div>
        
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/stores/user'
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

const title = ref('')
const description = ref('')
const newName = ref('')
const price = ref(0)
const sale = ref()
const file = ref(null)

const upload = async () => {
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (fileref.files) {
    fD.append('title', title.value)
    fD.append('newName', newName.value)
    fD.append('description', description.value)
    fD.append('type_id', type_id.value.toString())
    for (let i=0;i<fileref.files.length;i++) {
      fD.append('img'+i, fileref.files[i])
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
    refresh()
    
  }
}
//##################################################################
// const containerRef = ref(null)
// const swiper = useSwiper(containerRef, {
//   effect: 'creative',
//   loop: true,
//   // autoplay: {
//   //   delay: 5000,
//   // },
//   creativeEffect: {
//     prev: {
//       shadow: true,
//       translate: [0, 0, -400],
//     },
//     next: {
//       shadow: true,
//       translate: [0, 0, -400],
//     },
//   },
// })

// onMounted(() => {
//   console.log(swiper.instance)
// })
// const images = [
//   '/img/1735233911927444.jpg.webp',
//   '/img/1735234524397112.png.webp',
//   '/img/1735234704648222.jpg.webp',
// ]

//##################################################################
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
  width: 600px;

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
</style>

