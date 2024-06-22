<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="fixed bottom-8 right-12 h-8 w-8 flex items-center justify-center b-1 b-rd-50% color-stone-3 shadow-md hover:cursor-pointer hover:b-color-blue-3"
    @click="scrollToTop"
  >
    <div class="i-tabler:arrow-big-up color-stone-4 hover:color-blue-6" />
  </div>
</template>
