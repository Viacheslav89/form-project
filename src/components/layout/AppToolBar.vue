<template>
  <v-toolbar>
    <v-toolbar-title>Main</v-toolbar-title>

    <!-- <v-spacer></v-spacer> -->
    <v-btn icon @click="openAccaunt">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn icon @click="exitAccaunt">
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
import { useAdminStore } from "../../stores/useAdminSrore";
import { usePageStatusStore } from "../../stores/usePageStatusStore";

import { useRouter } from "vue-router";

const userStore = useAdminStore();
const pageStatusStore = usePageStatusStore();
const router = useRouter();

const openAccaunt = () => {
  pageStatusStore.closePages();
  pageStatusStore.updateOpenPages("isOpenAccaunt", true);
  if (router.currentRoute.value.name !== "Account") {
    router.push({ name: "Account" });
  } else {
    router.push({ name: "Main" });
    pageStatusStore.updateOpenPages("isOpenAccaunt", false);
  }
};

const exitAccaunt = () => {
  userStore.resetUser();
  router.push({ name: "Login" });
  pageStatusStore.closePages();
  localStorage.removeItem("token");
};
</script>
