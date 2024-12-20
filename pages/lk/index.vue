<template>
   <div>
    <div v-if="!userStore"
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <form @submit.prevent="logIn" style="display:flex; flex-direction: column; gap:20px">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="pass" v-model="pass">
       
        <p v-if="error">{{ error }}</p>
        <input type="submit" @click="type='login'" value="Login">
      </form>
    </div>
    <div v-else
      style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
      <h2>Добро подаловать, </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '~/stores/user'
const userStore = useUsers()
const email = ref('')
const pass = ref('')
const error = ref('')
const type = ref('')

const logIn = async () => {
  if (email.value && pass.value) {
      if (type.value == 'login') {
        // error.value = await userStore.logIn(email.value, pass.value)
      } 
    } else {
      error.value = 'Не введён логин либо пароль'
    }
}

</script>