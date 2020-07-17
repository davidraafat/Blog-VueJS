<template>
  <div v-theme:coloumn="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2>{{ blog.title | toUppercase }}</h2></router-link
      >
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../Mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://vue-pl.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        // eslint-disable-next-line no-unused-vars
        var blogsArr = [];
        for (let key in data) {
          data[key].id = key;
          blogsArr.push(data[key]);
        }
        this.blogs = blogsArr;
      });
  },
  computed: {},
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  background: #eee;
  box-sizing: border-box;
}
</style>
