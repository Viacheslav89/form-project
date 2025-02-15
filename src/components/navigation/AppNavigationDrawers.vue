<template>
  <!-- <v-card> -->

      <v-navigation-drawer expand-on-hover rail width="320">
        <v-list>
          <v-list-item
            prepend-avatar=""
            prepend-icon="mdi-menu"
            :subtitle="userStore.user.email"
            :title="userStore.user.fullName"
          ></v-list-item>
        </v-list>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Пользователи"
            value="myfiles"
            @click="openUsers"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-information "
            title="Информация"
            value="shared"
            color="gray"
            @click="openInfo"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-star"
            title="Рассылка"
            value="starred"
            @click="openMailing"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-main style="min-height: 1500px">
        <AppMain />
      </v-main> -->

  <!-- </v-card> -->
</template>

<script setup lang="ts">
// import AppMain from "../layout/AppMain.vue";
import { useAdminStore } from "../../stores/useAdminSrore";
import { useRouter } from "vue-router";
import { usePageStatusStore } from "@/stores/usePageStatusStore";

const userStore = useAdminStore();
const pageStatusStore = usePageStatusStore();
const router = useRouter();

const openUsers = () => {
  pageStatusStore.closePages();
  pageStatusStore.updateOpenPages("isOpenUsers", true);
  if (router.currentRoute.value.name !== "Users") {
    router.push({ name: "Users" });
  } else {
    router.push({ name: "Main" });
  }
};

const openInfo = () => {
  pageStatusStore.closePages();
  pageStatusStore.updateOpenPages("isOpenInfo", true);
  if (router.currentRoute.value.name !== "Info") {
    router.push({ name: "Info" });
  } else {
    router.push({ name: "Main" });
  }
};

const openMailing = () => {
  pageStatusStore.closePages();
  pageStatusStore.updateOpenPages("isOpenMailing", true);
  if (router.currentRoute.value.name !== "Mailing") {
    router.push({ name: "Mailing" });
  } else {
    router.push({ name: "Main" });
  }
};
</script>
