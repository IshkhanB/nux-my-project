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
    {id:0, title:'Все', path:'/',},
    {id:3, title:'Хиты продаж', path:'/hits',},
    {id:1, title:'Букеты', path:'/flowers',},
    {id:4, title:'Акции', path:'/stocks',},
    {id:2, title:'Подарки', path:'/gifts',},
  ])
  
  return{arr}
})