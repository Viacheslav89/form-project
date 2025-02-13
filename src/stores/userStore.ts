import { defineStore } from 'pinia';
import type { User } from './../type';

export const useUserStore = defineStore('user', {
    state: () => ({
      user: {
        email: '',
        fullName: '',
        id: null,
        is_active: false,
        is_superuser: false,
        last_activity: null,
        tel: null,
      },
    }),

    actions: {
      updateUser(newUserData: User) {
        Object.assign(this.user, newUserData);
      },
    },
  });