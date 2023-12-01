// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/components/OperatrivosList.vue"),
      },
      {
        path: "/equipos",
        name: "Equipos",

        component: () => import("@/components/Equipos.vue"),
      },
      {
        path: "/Operativos",
        name: "OperativosList",
        component: () => import("@/components/OperatrivosList.vue"),
      },
      {
        path: "/misiones",
        name: "Misiones",
        component: () => import("@/components/Misiones.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
