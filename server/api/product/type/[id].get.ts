import prisma from "~/lib/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  const pageParam = getQuery(event)?.page
  const itemsParam = getQuery(event)?.items
  if(id){
    try{
      const page = pageParam ? +pageParam-1 : 0
      const itemsPerPage = itemsParam ? +itemsParam : 4
      const where = {} as any
      if (id=='1'||id=='2') {
        where.type_id = +id
      }
      if (id=='3') {
        where.hits = true
      }
      if (id=='4') {
        where.sale = {gt:0}
      }
      const products = await prisma.product.findMany({
        include:{
          type: true,
          img:true,
        },
        where,
        skip: page*itemsPerPage,
        take: itemsPerPage, 
      })
      const count = await prisma.product.count({where})
      return{products, count, ok: true}
    }catch(e) {
      return{products:[], count:0, ok: false, e}  
    }
  }
  return{products:[], count:0, ok: false,}
})