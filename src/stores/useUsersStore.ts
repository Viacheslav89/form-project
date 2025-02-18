import { ref } from 'vue';
import { defineStore } from 'pinia';
import api from '../plugins/api';
import type { User, UserCreate } from '../type';

const userCreateInitial = (): UserCreate => {
  return {
    email: '',
    tel: null,
    is_active: false,
    is_superuser: false,
    fullName: '',
    password: '',
  };
};

const usersList = ref<User[]>([]);

export const useUsersStore = defineStore('users', () => {
  const getUsers = async () => {
    try {
      const response = await api('users/');
      console.log('response.data', response.data);
      console.log('users', response.data.data);
      usersList.value = response.data.data;
      console.log(usersList.value);
        
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (user: UserCreate) => {
    console.log(user);
    try {
      const response = await api.post('users/', user);
      usersList.value.push(response.data.data);

      console.log('usersList', usersList.value);
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
    };
    
    const deleteUser = async (id: number) => {
      try {
        const response = await api.delete(`users/${id}/`);
        const index = usersList.value.findIndex(user => user.id === id);
        usersList.value.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    };

  return { usersList, userCreateInitial, createUser, deleteUser, getUsers };
});
