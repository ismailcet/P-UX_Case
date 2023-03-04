import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/components/Tasks"),
  },
  {
    name: "Task",
    path: "/task",
    component: () => import("@/components/Tasks"),
  },
  {
    name: "Project",
    path: "/projects",
    component: () => import("@/components/Project"),
  },
  {
    name: "Company",
    path: "/company",
    component: () => import("@/components/Company"),
  },
  {
    name: "Calendar",
    path: "/calendar",
    component: () => import("@/components/Calendar"),
  },
  {
    name: "People",
    path: "/people",
    component: () => import("@/components/People"),
  },
  {
    name: "Reports",
    path: "/reports",
    component: () => import("@/components/Reports"),
  },
  {
    name: "Automation",
    path: "/automation",
    component: () => import("@/components/Automation"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
