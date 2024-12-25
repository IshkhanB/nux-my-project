<template>
   <div>
<<<<<<< HEAD
    <ClientOnly>
    <div v-if="!userStore.user"
=======
    <div v-if="!userStore"
>>>>>>> 871d2fce1ca2c31ffa771934136dca606e59703e
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <form @submit.prevent="logIn" method="post" style="display:flex; flex-direction: column; gap:20px">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="pass" v-model="pass">
        <input type="submit" value="Login">
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
    <div v-else
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <h2>Добро подаловать, {{ userStore.user.email }}</h2>
    </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '~/stores/user'
const userStore = useUsers()
const email = ref('')
const pass = ref('')
const error = ref('')

onMounted( async ()=>{
  await userStore.autoLogin()
  if (!userStore.user) {
    navigateTo('/')
  }
})

const logIn = async (e:Event) => {
  e.preventDefault()
  if (email.value && pass.value) {
    error.value = await userStore.logIn(email.value, pass.value)
  } else {
    error.value = 'Не введён логин либо пароль'
  }
}

</script>