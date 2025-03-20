import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCart = defineStore('cart', () => {
  const arr=ref([])
  const visible = false
  return { arr, visible }
})