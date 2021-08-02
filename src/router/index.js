import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Sales from "../views/Sales.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
