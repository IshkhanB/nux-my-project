import { useUsers } from "~/stores/user"
const userStore = useUsers()

export default defineNuxtRouteMiddleware((to, from) => {

  // if (!userStore.user && to.path.includes('/lk/')) {
  //   navigateTo('/lk')
  // }
})