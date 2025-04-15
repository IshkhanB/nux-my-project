import xml from 'xml'
import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
  // Конфигурация YML-фида
  const ymlStructure = [
    {
      'yml_catalog': [
        { '_attr': { 'xmlns:yandex': 'http://news.yandex.ru', 'xmlns:media': 'http://search.yahoo.com/mrss/', 'version':'2.0' }},

        { '_attr': { 'date': new Date().toISOString() } },
        {
          shop: [
            { name: 'FLOWERS MARKET' },
            { url: 'http://localhost:3000/' },
            { platform: 'Nuxt 3, Prisma' },
            { version: '1.0' },
            {
              currencies: [
                { currency: { '_attr': { id: 'RUB', rate: '1' } } }
              ]
            },
            {
              categories: [
                { category: { _attr: { id: '1' }, _text: 'Электроника' } },
                { category: { _attr: { id: '2' }, _text: 'Бытовая техника' } }
              ]
            },
            { offers: [] as any[] }
          ]
        }
      ]
    }
  ] as any

  // Получаем товары из БД
  const products = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      type_id: true,
      type: true,
      // availability: true, //!
      img: true,
      // vendor: true, //!
      // vendor_code: true, //!
      // url: true, //!
      // params: true //!
    }
  })

  // Добавляем товары в offers
  for (const product of products) {
    const offer = [
      { _attr: { id: product.id } },
      { name: product.title },
      { url: `http://localhost:3000/${product.type.title}/${product.id}` },
      { price: product.price },
      { currencyId: 'RUB' },
      { categoryId: product.type_id },
      { picture: encodeURI(`http://localhost:3000/img/${product.img[0].img}`) },
      { description: product.description },
    ] as any

    ymlStructure[0].yml_catalog[2].shop[6].offers.push({ offer })
  }

  // Генерируем XML
  const ymlFeed = xml(ymlStructure, {
    declaration: {
      encoding: 'UTF-8',
      standalone: 'yes'
    },
    indent: '  '
  })

  // Возвращаем ответ
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(ymlFeed)
})