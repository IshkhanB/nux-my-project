import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProducts = defineStore('products', () => {
  const arr=ref([
    // {id:1, title:'Монобукет Мисти Баблс', type:'flowers', description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:6900, images:['icon/111.jpg'],},
    // {id:2, title:'Букет Романтика', type:'flowers', description:'Очаровательный букет из красно-белой российской розы 101 штука', price:12700, images:['icon/222.jpg'],},
    // {id:3, title:'Композиция в коробке 29 роз с эвкалиптом', type:'flowers', description:'Классическая композиция с российской розы 29 штук в декоративной коробке', price:6900, images:['icon/333.jpg'],},
    // {id:4, title:'Шикарная классическая композиция 51 роза', type:'flowers', description:'Российская роза в шляпной коробке,в классическом оформлении', price:13700, images:['icon/444.jpg'],},
    // {id:5, title:'Белая голландская роза 25 штук 1 метр', type:'flowers', description:'Классический букет из белой голландской розы 1 метр', price:10800, images:['icon/555.jpg'],},
    // {id:6, title:'Букет ЛЮБОВЬ из шикарных красных роз', type:'flowers', description:'Яркий букет красных роз сорта Ред Наоми', price:19500, images:['icon/666.jpg'],},
  ])
    return {}
})