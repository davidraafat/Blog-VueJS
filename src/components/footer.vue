<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2020 "
    };
  },
  created() {
    bus.$on("titleChanged", data => {
      this.title = data;
    });
  }
};
</script>

<style scoped>
p {
  color: lightgreen;
  text-align: center;
}
footer {
  background: #222;
  padding: 10px;
}
</style>
