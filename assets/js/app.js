Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div>
      <h3> {{ post.title }} </h3>
      <div v-html="post.content"></div>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: 'This is Content of <b>Post 1</b>' },
      { id: 2, title: 'Blogging with Vue', content: 'This is Content of <b>Post 2</b>' },
      { id: 3, title: 'Why Vue is so fun', content: 'This is Content of <b>Post 3</b>' },
    ]
  }
});