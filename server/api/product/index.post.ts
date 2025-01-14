import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  
    const data = event.context.fields
    data.img = event.context.files[0].newFileName
    data.type_id = +data.type_id
    data.price = +data.price
    delete data.newName

    await prisma.product.create({
      data
    })
  
})