<template>
    <div class="article" v-for="article in articles" :key="article.id">
        <img class="image" :src="article.imageUrl">
        <div class="read-time">{{article.readTime.toString() + ' minute read'}}</div>
        <div class="title">{{article.title}}</div>
        <p class="description">{{article.description}}</p>
        <div class="link">
            <font-awesome-icon class="link-icon" icon="fa-solid fa-arrow-right" />
            <div class="link-text">READ OUR INSIGHTS</div>
        </div>
    </div>
</template>


<script lang="ts">
import articleData from '@/data/data.json';
import { defineComponent } from 'vue';


export default defineComponent({
    data() {
        return {
            articles: articleData
        }
    }
})
</script>


<style>
.article {
    margin: 3rem;
    background: #f3f3f3;
    width: 20rem;
}

.image {
    width: inherit;
}

.read-time {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.5rem;
    font-weight: 400;
}

.title {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.2em;
    margin-bottom: 1rem;
    font-family: Verdana, Tahoma, sans-serif;
}

.description {
    font-weight: 500;
    margin-bottom: 1rem;
}

.link {
    display: flex;
    align-items: center;
    padding: 1rem 0rem;
}

.link-icon {
    margin-right: 2rem;
    color: blue;
    height: 2rem;
}

.link-text {
    font-weight: 800;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}

.link-text:hover {
    color: blue;
    cursor: pointer;
}

@media screen and (max-width: 1250px) {
  .article {
    padding-bottom: 2rem;
    border-bottom: 1px solid black;
  }

  .article:last-child {
    border-bottom: none;
    padding: none;
  }
}
</style>