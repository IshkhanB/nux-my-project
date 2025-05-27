<template>
  <div class="dark-login-container">
    <div class="dark-login-box">
      <h2 class="dark-login-title">Административный вход</h2>
      <!-- <ClientOnly> -->
      <div v-if="!userStore.user">
        <form @submit.prevent="logIn" method="post" class="dark-login-form">

          <div class="dark-form-group"> 
            <label for="email" class="dark-input-label">Логин:</label>
            <input type="email" v-model="email" required class="dark-input-field" placeholder="email">
          </div>

          <div class="dark-form-group">
            <label for="password" class="dark-input-label">Пароль:</label>
            <input type="password" required placeholder="pass" v-model="pass" class="dark-input-field">
          </div>

          <div class="dark-login-button">
          <input type="submit" value="Войти">
          </div>
        </form>
        <p v-if="error">{{ error }}</p>
      </div>
      <div v-else
        style="max-width: 300px; margin:100px auto; border-radius: 10px; border: 1px solid #DEDEDE; padding:20px;">
        
        <h2>Добро подаловать, {{ userStore.user.name }}</h2>
        <a href="http://localhost:3000/lk/edit">Adminka</a>
      </div>
    <!-- </ClientOnly> -->
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

definePageMeta({
  layout: 'admin'
})

onMounted( async ()=>{
  await userStore.autoLogin()
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
<style scoped>
.dark-login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0f172a;
  padding: 1rem;
}

.dark-login-box {
  width: 100%;
  max-width: 400px;
  background-color: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid #334155;
}

.dark-login-title {
  color: #e2e8f0;
  text-align: center;
  margin-bottom: 1.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.dark-login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dark-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dark-input-label {
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
}

.dark-input-field {
  padding: 0.75rem 1rem;
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.375rem;
  color: #e2e8f0;
  font-size: 0.9375rem;
  transition: border-color 0.2s;
}

.dark-input-field:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.dark-input-field::placeholder {
  color: #64748b;
}

.dark-login-button {
  position: relative;
  padding: 0.75rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 42px;
}

.dark-login-button:hover {
  background-color: #4f46e5;
}

.dark-login-button:disabled {
  background-color: #4b5563;
  cursor: not-allowed;
}

.dark-button-loader {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.dark-error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #f87171;
  font-size: 0.875rem;
  padding: 0.75rem;
  background-color: rgba(220, 38, 38, 0.1);
  border-radius: 0.375rem;
  margin-top: 0.5rem;
}
</style>