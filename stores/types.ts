import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { Product } from '@prisma/client'
// interface type {
//   id: number
//   title: string
//   product:   Product[]
// }

export const useTypes = defineStore('types', () => {
  const arr = ref([
    {id:1, title:'хиты продаж',},
    {id:2, title:'Букеты',},
    {id:3, title:'Акции',},
    {id:4, title:'Подарки',},
    
  ])
  
  return{arr}
})