export default defineNuxtPlugin(() => {
  useHead({
    title: 'Мой магазин',
    meta: [
      { name: 'description', content: 'Лучший интернет-магазин' },
      { name: 'keywords', content: 'магазин, товары, покупки' },
    ],
  });
});

