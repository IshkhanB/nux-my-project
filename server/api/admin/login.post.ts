import prisma from "@@/server/utils/prisma"

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    if (data.email && data.pass) {
      const user = await prisma.user.findUnique({
        select: {
          id:true,
          email: true,
          name: true,
          token: true,
        },
        where: {
          email: data.email,
          pass: data.pass
        }
      })
      return user
    } else {
      return {
        error: 'not found'
      }
    }
  
})