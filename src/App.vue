<script setup lang="ts">
import Articles from '@/components/Articles.vue'
</script>


<template>
  <header>
    <h1>Article Page</h1>
  </header>

  <main>
    <div class="article-container">
      <Articles/>
    </div>
  </main>
</template>


<style>
@import './assets/base.css';

#app {
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  width: 100%;
  display: flex;
  justify-content: center;
  line-height: 1.5;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
}

main {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  width: 100%;
  
}

.article-container {
  display: flex;
  justify-content: center;
  width: fit-content;
  background: #f3f3f3;
}

@media screen and (max-width: 1250px) {
  .article-container {
    display: block;
  }
}
</style>
