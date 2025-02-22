import { createRouter, createWebHistory } from "vue-router/auto";
import App from "../App.vue";

import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";

import AppAccount from "../components/pages/AppAccount.vue";
import AppUsers from "../components/pages/AppUsers.vue";
import AppInfo from "../components/pages/AppInfo.vue";
import AppMailing from "@/components/pages/AppMailing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      redirect: { name: "Login" },
      component: App,
      children: [
        {
          name: "Login",
          path: "login",
          component: LoginView,
        },
        {
          name: "Main",
          path: "main",
          component: MainView,
        },
        {
          name: "Account",
          path: "account",
          component: AppAccount,
        },
        {
          name: "Users",
          path: "users",
          component: AppUsers,
        },
        {
          name: "Info",
          path: "info",
          component: AppInfo,
        },
        {
          name: "Mailing",
          path: "mailing",
          component: AppMailing,
        },
      ],
    },
  ],
});

export default router;