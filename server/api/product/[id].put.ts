import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event)=>{
  const id = event.context.params?.id
  let data = event.context.fields
  // console.log('1',data)
  if (!data) {
    const fd = await readFormData(event)
    data = Object.fromEntries(fd.entries())
    // console.log('2',data)
  }
  const img = event.context.files?.map((el:any)=>({img:el.newFileName})) || []
  data.type_id = +data.type_id
  data.price = +data.price
  data.sale = +data.sale
  delete data.newName

  if(id){
    try{
    const product = await prisma.product.update({
      data:{
        ...data,
        img: {
          createMany:{
            data:img
          }
        }
      },
      where: {
        id: +id
      }
    })
    return{product, ok: true}
  }catch(e) {
    console.log(e)
    return{product:null, ok: false, e}  
  }
  }
  return{product:null, ok: false,}
})