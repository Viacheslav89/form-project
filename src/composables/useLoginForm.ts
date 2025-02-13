import { ref } from 'vue';
import axios from 'axios';
import type { User, UserFormData } from '@/type';
import { useUserStore } from '@/stores/userStore';

// admin@axas.ru
// 123123123

export const useLoginForm = () => {

  const errorMessage = ref('');
  const userStore = useUserStore();
  
  const login = async (userData: UserFormData) => {
    errorMessage.value = '';
    try {
      const response = await axios.post('http://87.249.49.97:78/api/v1/sign-in/email-password/', userData);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.data.token);
        userStore.updateUser(response.data.data.user);
        
        console.log(userStore.user);
        console.log(response.data.data.token);
        console.log(response.status);
      }

      return response.status;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
          errorMessage.value = error.message;
          console.error(error.message);
          if (error.response) {
              return error.response.status;
          } else {
              console.error('Network error or no response received');
              return 500;
          }
      } else {
          console.error(error);
          return 500;
      }
    }
  };


  return {
    errorMessage, 
    login,
  }
}

