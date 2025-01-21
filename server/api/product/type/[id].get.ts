import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  if(id){
    try{
      const products = await prisma.product.findMany({
        include:{
          type: true
        },where:{
          type_id: +id
        }
      })
      return{products, ok: true}
    }catch(e) {
      return{products:[], ok: false, e}  
    }
  }
  return{products:[], ok: false,}
})