<template>
  <div>
    <CustomerReviews :reviews="reviewsStore.arr"/>
  </div>
</template>
<script setup lang="ts">
const reviewsStore = useReviews()
</script>