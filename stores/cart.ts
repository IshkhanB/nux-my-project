import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Prisma } from '@prisma/client'

export const useCart = defineStore('cart', () => {
  const arr=ref([] as any)
  const visible = false
  return { arr, visible }
})