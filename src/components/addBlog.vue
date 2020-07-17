<template>
  <div id="addBlog">
    <h2>Add a New Blog Post</h2>
    <form v-show="!submitted">
      <label for="title">Blog Title:</label>
      <input type="text" required v-model.lazy="blog.title" />
      <label for="content">Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninja</label>
        <input type="checkbox" value="Ninja" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="Wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="Cheese" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{
          author
        }}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-show="submitted">
      <p>The post is Done</p>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title:{{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net ninja", "The Angular Avenger", "The Vue Vindecator"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://vue-pl.firebaseio.com/posts.json", this.blog)
        .then(function(data) {
          this.submitted = true;
          console.log(data);
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
