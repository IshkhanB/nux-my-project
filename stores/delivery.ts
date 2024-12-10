import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDelivery = defineStore('delivery', () => {
  const arr=ref([
    {id:1, name:'Сочи, Центральный', time:'1 час 5 минут', date:'2024-03-01', price:'0',},
    {id:2, name:'Сириус', time:'1 час 30 минут', date:'2024-03-02', price:'1800',},
    {id:3, name:'Хоста', time:'1 час 10 минут', date:'2024-03-03', price:'800',},
    {id:4, name:'Адлер, Кудепста', time:'1 час 30 минут', date:'2024-03-04', price:'1300',},
    {id:5, name:'Дагомыс', time:'1 час 30 минут', date:'2024-03-05', price:'1200',},
    {id:6, name:'Красная Поляна', time:'2 час 30 минут', date:'2024-03-06', price:'2800',},
    {id:7, name:'Лоо', time:'2 час 10 минут', date:'2024-03-07', price:'1200',},
  ])

  return { arr }
})