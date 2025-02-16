import { ref } from "vue";
import axios from "axios";
import type { User, UserFormData } from "@/type";
import { useAdminStore } from "./../stores/useAdminSrore";
import api from "@/plugins/api";

// admin@axas.ru
// 123123123

export const useLoginFormStore = () => {
  const errorMessage = ref("");
  const userStore = useAdminStore();
  const status = ref<number | undefined>(undefined);

  const login = async (userData: UserFormData) => {
    errorMessage.value = "";
    try {
      const response = await api.post("sign-in/email-password/", userData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        userStore.updateUser(response.data.data.user);
        status.value = response.status;

        console.log(userStore.user);
        console.log(response.status);
      }

      return response.status;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        errorMessage.value = error.message;
        status.value = error.response?.status;

        console.error(error.message);
        if (error.response) {
          return error.response.status;
        } else {
          console.error("Network error or no response received");
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
    status,
    login,
  };
};
