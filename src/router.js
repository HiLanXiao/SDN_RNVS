import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/login/Login.vue";
import HomePage from "./pages/homepage/HomePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/homepage",
      name: "HomePage",
      component: HomePage
    }
  ]
});
