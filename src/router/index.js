import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes";

// Setup app router 
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
