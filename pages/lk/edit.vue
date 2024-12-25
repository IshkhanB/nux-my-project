<template>
  <div>
   <p v-if="userStore.user">
    Edit please
   </p>  
   <p v-else>
    Go home
   </p>  
 </div>
</template>

<script setup lang="ts">

import { useUsers } from '~/stores/user'
const userStore = useUsers()

onMounted( async ()=>{
  await userStore.autoLogin()
  if (!userStore.user) {
    navigateTo('/')
  }
})

</script>

