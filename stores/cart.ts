import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Prisma } from '@prisma/client'

export const useCart = defineStore('cart', () => {
  const arr = ref([] as any)
  const visible = false
  const count = computed(() =>{
    return arr.value.reduce((a:number,el:any) =>{
      return a + el.count
    }, 0)
  })
  const sum = computed(() => {
    return arr.value.reduce((total:number, item:any) => {
      return total + (item.count * item.price)
    }, 0)
  })
  return { arr, visible, count, sum }
})