<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="post-single">
          <figure>
            <img src="http://placehold.it/700x300" alt="">
          </figure>
          <div class="post-single-header">
            <h2><router-link to="/post">{{ post.title }}</router-link></h2>
            <strong>Categories</strong>
            <ul class="list-inline">
              <li v-for="category in post.categories" v-bind:key="category">{{ category }}</li>
            </ul>
          </div>
          <div class="post-body">
            {{ post.content }}
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      post: {
        title: 'Front end arquitecture with Vue.js!',
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
      }
    }
  }
}
</script>

<style>

</style>
