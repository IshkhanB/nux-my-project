import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProducts = defineStore('products', () => {
  const arr=ref([
    {id:1, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
    {id:2, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
    {id:3, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
    {id:4, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
    {id:5, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
    {id:6, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:3000, images:['icon/111.jpg'],},
  ])
  return { arr }
})