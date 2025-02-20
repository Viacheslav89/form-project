import { createRouter, createWebHistory } from 'vue-router';
import { useAdminStore } from './../stores/useAdminSrore';

import App from '../App.vue';
import MainPage from '../views/MainPage.vue';
import LoginView from '../views/LoginView.vue';
import AppAccount from '../components/pages/AppAccount.vue';
import AppUsers from '../components/pages/AppUsers.vue';
import AppInfo from '../components/pages/AppInfo.vue';
import AppMailing from '@/components/pages/AppMailing.vue';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       name: 'Home',
//       path: '/',
//       redirect: { name: 'Login' },
//       component: App,
//       children: [
//         {
//           name: 'Login',
//           path: 'login',
//           component: LoginView,
//         },
//         {
//           name: 'Main',
//           path: 'main',
//           component: MainPage,
//           children: [
//             {
//               name: 'Account',
//               path: 'account',
//               component: AppAccount,
//             },
//             {
//               name: 'Users',
//               path: 'users',
//               component: AppUsers,
//             },
//             {
//               name: 'Info',
//               path: 'info',
//               component: AppInfo,
//             },
//             {
//               name: 'Mailing',
//               path: 'mailing',
//               component: AppMailing,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      redirect: { name: 'Login' },
      component: App,
      children: [
        {
          name: 'Login',
          path: 'login',
          component: LoginView,
        },
        {
          name: 'Main',
          path: 'main',
          component: MainPage,
        },
        {
          name: 'Account',
          path: 'account',
          component: AppAccount,
        },
        {
          name: 'Users',
          path: 'users',
          component: AppUsers,
        },
        {
          name: 'Info',
          path: 'info',
          component: AppInfo,
        },
        {
          name: 'Mailing',
          path: 'mailing',
          component: AppMailing,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const adminStore = useAdminStore();
  let isAccessed = adminStore.isAuthenticated;

  if (!adminStore.isAuthenticated) {
    try {
      isAccessed = await adminStore.restoreSession();
    } catch (error) {
      console.warn(error);
      next(false);
      return;
    }
  }

  if (!isAccessed && to.name !== 'Login') {
    next({ name: 'Login' });
    return;
  }

  if (isAccessed && to.name === 'Login') {
    localStorage.removeItem('token');
    next({ name: 'Login' });
    return;
  }

  next();
});

export default router;
