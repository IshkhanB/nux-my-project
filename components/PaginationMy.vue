<template>

<div class="anchor" style="transform: translateY(-160px);" id="catalog"></div>
  <div class="cards">
    <!-- Отображаем карточки только для текущей страницы -->
    <slot></slot>
  </div>

<div class="pagination">
  <button v-for="page in totalPages" :key="page" @click="currentPage = page"  class="pagination-button" :class="{ active: currentPage == page }"> {{ page }}</button>
</div>
<!-- изменение отображаймого количества карточек -->
<div style="text-align: center; margin:10px auto; width: 10px;">
  <select v-model="itemsPerPage" @change="currentPage = 1" :about="'>'" style="background-color: #e4b891; padding: 5px; border-radius: 5px;">
  <option value="2"> 2</option>
  <option value="4"> 4</option>
  <option value="6"> 6</option>
  <option value="8"> 8</option>
  <option value="10">10</option>
  <option value="12">12</option>
</select>
</div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps(["products"])
const itemsPerPage = ref(4)
const currentPage = ref(1)

// Вычисляем общее количество страниц
const totalPages = computed(() => {
  return Math.ceil(props.products?.length / itemsPerPage.value) || 5
})

// Вычисляем продукты для текущей страницы
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return props.products.slice(start, end)
})

</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination-button {
  padding: 8px 16px;
  background-color: #595959;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-button.active {
  background-color: #e8cbb1; /* Стиль для активной кнопки */
  color: #fff;
  font-weight: bold;
}

.pagination-button:hover:not(:active) {
  background-color: #e4b891;
}

.pagination-info {
  font-size: 16px;
  color: #fff;
  }
</style>

