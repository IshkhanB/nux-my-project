import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDelivery = defineStore('delivery', () => {
  const arrFull=ref([
    {id:1, name:'Сочи, Центральный', date:'2024-03-01',time:'1 час 5 минут',price:'1200',},
    {id:2, name:'Сириус',  date:'2024-03-10',},
    {id:3, name:'Хоста, Кудепста', date:'2024-03-22',},
    {id:4, name:'Адлерский р-н', date:'2024-04-17',},
    {id:5, name:'Дагомыс', date:'2024-04-24',},
    {id:6, name:'Красная Поляна', date:'2024-04-29',},
    {id:7, name:'Лоо', date:'2024-05-05',},
  ])

  const arr = ref([...arrFull.value].sort((a,b)=> new Date(b.date).valueOf()-new Date(a.date).valueOf()))
  arr.value.length = 8
  return { arr, arrFull }
})