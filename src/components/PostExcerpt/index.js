import Vue from 'vue'
import template from './template.html'
import './style.css'

export default Vue.component('post-excerpt', {
  template,
  props: ['title', 'categories', 'excerpt']
})
