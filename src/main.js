import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

//using routers
// eslint-disable-next-line no-unused-vars
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// creat new filter
Vue.filter("toUppercase", function(value) {
  return value.toUpperCase();
});
//create new directives
Vue.directive("rainbow", {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});
Vue.directive("theme", {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "500px";
    }
    if (binding.arg == "coloumn") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

export const bus = new Vue();
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
