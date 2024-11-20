<template>
  <ProductCard :id="route.params.id"/>  
  {{ route.params.id }}
  {{ 'sfkgxcvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv cxvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvb' }}
</template>

<script setup lang="ts">
import Id from '../hits/[id].vue';

const route = useRoute()
</script>