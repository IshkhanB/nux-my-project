import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  if(id){
    try{
      const product = await prisma.product.findUnique({
        include:{
          type: true,
          img: true
        },where:{
          id: +id
        }
      })
      return{product, ok: true}
    }catch(e) {
      return{product:null, ok: false, e}  
    }
  }
  return{product:null, ok: false,}
})