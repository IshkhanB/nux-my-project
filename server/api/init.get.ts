// import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  // const productArr =[
  //   { title:'Монобукет Мисти Баблс', type_id: 1, description:'Нежный букет из 19 веток яркой кустовой пионовидной розы', price:6900, img:'111.jpg',},
  //   { title:'Букет Романтика', type_id: 1, description:'Очаровательный букет из красно-белой российской розы 101 штука', price:12700, img:'222.jpg',},
  //   { title:'Композиция в коробке 29 роз с эвкалиптом', type_id: 1, description:'Классическая композиция с российской розы 29 штук в декоративной коробке', price:6900, img:'333.jpg',},
  //   { title:'Шикарная классическая композиция 51 роза', type_id: 1, description:'Российская роза в шляпной коробке,в классическом оформлении', price:13700, img:'444.jpg',},
  //   { title:'Белая голландская роза 25 штук 1 метр', type_id: 1, description:'Классический букет из белой голландской розы 1 метр', price:10800, img:'555.jpg',},
  //   { title:'Букет ЛЮБОВЬ из шикарных красных роз', type_id: 1, description:'Яркий букет красных роз сорта Ред Наоми', price:19500, img:'666.jpg',},    
  // ]
  // const type = await prisma.type.create({
  //   data: {
  //     title: 'flowers'
  //   }
  // })
  // const products = await prisma.product.createMany({
  //   data: productArr
  // })
  return {ok:true}
})