<template>
  <Navbar />
  <br />

  <div class="w-5/6 md:w-2/3 ml-8 md:ml-96 md:pr-16 prose">
    <ContentDoc />
  </div>
</template>

<style>
  .prose h1 {
    @apply text-2xl font-bold
  }
  .prose h2 {
    @apply text-xl font-semibold
  }
  .prose ol {
    @apply list-decimal
  }
  .prose ul {
    @apply list-disc
  }
  .prose blockquote {
    @apply p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800
  }
  .prose code {
    @apply text-red-500 bg-gray-50
  }
</style>