<template>
  <div>
   <div v-if="userStore.user">
    <h1>LK</h1>
    <button @click="userStore.logOut">logout</button>
   </div>  
   <p v-else>
    Go home
   </p>
   <h2>Мои посты</h2>
    <form method="post" @submit.prevent="upload">
      <input type="text" name="title" v-model="title" placeholder="Заголовок">
      <textarea type="text" name="text" v-model="text" placeholder="Текст публикации"></textarea>
      <input type="file" ref="file" placeholder="Изображение">
      <input type="submit" value="Опубликовать">
    </form>

    <h2>Мои посты</h2>
    <p v-if="!data?.products">Постов пока нет</p>
    <div v-else class="grid">
      <div  v-for="product of data" :key="product.valueOf">
        <NuxtImg :src="`img/${userStore}`" sizes="300px" />
        <h2>
          <NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ', '_')}`">{{ post.title }}
          </NuxtLink>
        </h2>
        <!-- <p>{{ post.html }}</p> -->
       
      </div>  
    </div>
  </div>
</template>

<script setup lang="ts">
const {data} = await useFetch(`/api/product`)
const products = ref(data.value?.products)

import { useUsers } from '~/stores/user'
const userStore = useUsers()
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
const text = ref('')
const file = ref(null)

const upload = async () => {
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (fileref.files) {
    fD.append('title', title.value)
    fD.append('html', text.value)
    fD.append('img', fileref.files[0])
    fD.append('author_id', userStore.user?.id ? userStore.user?.id.toString() : '')
    await $fetch('/api/posts', {
      method: 'POST',
      body: fD
    })
    // refresh()
    // title.value = ''
    // text.value = ''
    
  }
}
</script>

