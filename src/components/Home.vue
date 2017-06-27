<template>
  <div class="blog-home">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <post-excerpt
            v-for="post in posts"
            v-bind:key="post"
            v-bind:title="post.title"
            v-bind:categories="post.categories"
            v-bind:excerpt="post.excerpt"></post-excerpt>
        </div>
        <div class="col-md-3">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostExcerpt from './PostExcerpt'
import Sidebar from './Sidebar'

export default {
  name: 'home',
  data () {
    return {
      posts: [
        {
          title: 'Front end arquitecture with Vue.js!',
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
          excerpt: 'Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.'
        },
        {
          title: 'Front end arquitecture with Vue.js!',
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
          excerpt: 'Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.'
        },
        {
          title: 'Front end arquitecture with Vue.js!',
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
          excerpt: 'Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.'
        }
      ]
    }
  },
  components: { PostExcerpt, Sidebar }
}
</script>
