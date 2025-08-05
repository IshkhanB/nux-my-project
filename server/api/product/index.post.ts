import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event) => {
  
    const data = event.context.fields
    const img = event.context.files.map((el:any)=>({img:el.newFileName}))
    data.type_id = +data.type_id
    data.price = +data.price
    data.sale = +data.sale
    delete data.newName

    await prisma.product.create({
      data:{
        ...data,
        img: {
          createMany:{
            data:img
          }
        }
      },

    })
  
})