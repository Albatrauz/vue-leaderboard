import { createRouter, createWebHistory } from "vue-router";
import Leaderboard from "../views/Leaderboard.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Leaderboard",
    component: Leaderboard,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
