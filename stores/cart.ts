import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { Prisma } from '@prisma/client'

export const useCart = defineStore('cart', () => {
  const arr = ref([] as any)
  const visible = ref(false)
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
  const remove = (i:number)=>{
    arr.value.splice(i,1)
    localStorage.cart = JSON.stringify(arr.value)
    if (!arr.value.length) visible.value = false
  }
  const addToCart = (product:any) => {
    const el = arr.value.find((el:any)=>el.id==product.id)
    if (el) {
      el.count++
    } else {
      arr.value.push({...product,count:1})
    }
    localStorage.cart = JSON.stringify(arr.value)
  }
  const loadCart = () => {
    if (localStorage.cart) {
      arr.value = JSON.parse(localStorage.cart)
    }
  }
  return { arr, visible, count, sum, remove, addToCart, loadCart }
})