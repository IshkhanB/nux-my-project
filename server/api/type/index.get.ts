import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
    try{
      const type = await prisma.type.findMany({
        select: {
          id: true,
          title: true
        }

      })
      return{type, ok: true}
    }catch(e) {
      return{type:[] , ok: false, e}
      
    }
})