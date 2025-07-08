import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  
  if(id){
    try{
      await prisma.image.delete({
      where: {
        id: +id
      }
    })
    return{ok: true}
  }catch(e) {
    return{ok: false, e}  
  }
  }
  return{ok: false,}
})  