import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  
    const data = event.context.fields
    data.product.id = +data.product.id
    data.img = event.context.files[0].newFileName

    await prisma.product.create({
      data
    })
  
})