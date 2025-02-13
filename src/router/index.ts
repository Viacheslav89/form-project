import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import MainPage from '../views/MainPage.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
   routes: [
    {
      name: "Home",
      path: "/", 
      redirect: "login",
      component: App,
      children: [
        {
          name: "Login",
          path: "/login/",
          component: LoginView,
        },
        {
          name: "Main",
          path: "main",
          component: MainPage,
        },
      ],
    },
  ]
});

export default router