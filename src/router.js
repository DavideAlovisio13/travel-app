import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import TravelView from "../src/views/TravelView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/travel",
      name: "travel",
      component: TravelView,
    }
  ],
});
export { router };
