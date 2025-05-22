<template>
  <div class="pagination">
    <button 
      @click="prevPage" 
      :disabled="currentPage === 1"
      class="pagination-button"
    >
      Назад
    </button>
    
    <span class="page-info">
      Страница {{ currentPage }} из {{ totalPages }}
    </span>
    
    <button 
      @click="nextPage" 
      :disabled="currentPage === totalPages"
      class="pagination-button"
      >
      Вперед
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-changed'])

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('page-changed', props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-changed', props.currentPage + 1)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.pagination-button {
  padding: 0.5rem 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.9rem;
  color: #666;
}
</style>