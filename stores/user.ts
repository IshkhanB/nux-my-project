import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDelivery = defineStore('delivery', () => {
  const arr=ref([
    {id:1, name:'admin', emaile: 'test@test.ru',token: 'admin1',},
    {id:1, name:'adminTwo', emaile: 'test@test.ru',token: 'admin1',},
  ])

  return { arr }
})