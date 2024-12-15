import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
    try{
      const products = await prisma.product.findMany({
        include:{
          type: true
        }
      })
      return{products, ok: true}
    }catch(e) {
      return{products:[], ok: false, e}
      
    }
})