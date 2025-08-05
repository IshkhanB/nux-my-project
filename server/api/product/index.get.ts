import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
    try{
      const products = await prisma.product.findMany({
        include:{
          type: true,
          img: true,
        },
        orderBy: {
          id: 'desc'
        }
      })
      return{products, ok: true}
    }catch(e) {
      return{products:[], ok: false, e}
      
    }
})