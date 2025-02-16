import { defineStore } from "pinia";
import type { OpenPages } from "./../type";
import { ref } from "vue";
import { fa } from "vuetify/locale";

const isOpenPageInitial: OpenPages = {
  isOpenAccaunt: false,
  isOpenUsers: false,
  isOpenInfo: false,
  isOpenMailing: false,
};

export const usePageStatusStore = defineStore("page", () => {
  const openPages = ref<OpenPages>({ ...isOpenPageInitial });

  const closePages = () => {
    openPages.value = { ...isOpenPageInitial };
  };

  const updateOpenPages = (key: keyof OpenPages, value: boolean) => {
    openPages.value[key] = value;
  };

  return {
    openPages,
    closePages,
    updateOpenPages,
  };
});
