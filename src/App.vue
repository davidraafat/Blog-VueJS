<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlogs.vue";
import listBlog from "./components/listBlogs.vue";
import header from "./components/head.vue";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "add-blog": addBlog,
    // eslint-disable-next-line vue/no-unused-components
    "show-blogs": showBlog,
    // eslint-disable-next-line vue/no-unused-components
    "list-blogs": listBlog,
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
