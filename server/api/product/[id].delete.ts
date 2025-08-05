import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  if(id){
    await prisma.image.deleteMany({
      where: {
      product_id: +id
    }
    })
    await prisma.product.delete({
      where: {
      id: +id
    }
    }) 
  }
})