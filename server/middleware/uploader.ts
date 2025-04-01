import Busboy from 'busboy'
import path from 'path'
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const contentType = getRequestHeader(event, "content-type")
    if (contentType?.includes('multipart/form-data;')) await useFiles(event)
  }
})

const useFiles = async (event: any) => {
  const { req } = event
  if (req.method === 'POST') {
    return new Promise((resolve) => {
      const files = [] as any
      const fields = {} as any
      const busboy = Busboy({ headers: req.headers })
      let i = 1
      busboy.on('file', (name, file, info) => {
        console.log(fields)
        const { filename, encoding, mimeType } = info
        // const newFileName = info.filename
        const newFileName = fields.newName + ' ' + i + '.webp'
        i++
        console.log(`File [${name}]: filename: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`)
        console.log(path.join(process.cwd(), '../public/img/img'))
        const saveTo = path.join(process.cwd(), '../public/img', `${newFileName}`)
        // console.log('saveTo', saveTo)
        // file.pipe(fs.createWriteStream(saveTo))
        const data = [] as any
        let fileAsBuffer

        file.on('data', (chunk) => {
          data.push(chunk)
        })
        .on('close', async () => {
          // merge data chunks with buffer and attach them to body
          fileAsBuffer = Buffer.concat(data)
          
          await sharp(fileAsBuffer)
          .webp({ quality: 70 })
          // .resize({ width: 1920 })
          .toFile(saveTo)
        })
        .on('end', () => {
          files.push({
            fieldname: name,
            filename,
            newFileName,
            encoding,
            mimetype: mimeType,
          })
        })
      })
      busboy.on('field', (name, value, info) => {
        fields[name] = value
      })
      busboy.on('finish', () => {
        event.context.files = files
        event.context.fields = fields
        // resolve({ files, fields })
        resolve({})
      })
      req.pipe(busboy)
    })
  }
}