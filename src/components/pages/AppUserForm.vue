<template>
  <div class="form">
    <v-form @submit.prevent fast-fail>
      <v-text-field
        label="Email"
        class="form__input"
        :rules="validationEmail"
        v-model="user.email"
      ></v-text-field>

      <v-text-field
        label="Имя"
        class="form__input"
        v-model="user.fullName"
      ></v-text-field>

      <v-text-field
        label="Телефон"
        class="form__input"
        v-model="user.tel"
      ></v-text-field>

      <v-text-field
        label="Пароль"
        class="form__input"
        v-model="user.password"
      ></v-text-field>

      <v-btn
        class="mt-2"
        type="submit"
        color="grey"
        block
        @click="
          usersStore.createUser(user),
            (openPagesStore.openPages.isOpenCreateUserForm = false)
        "
        >Сохранить
      </v-btn>
    </v-form>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAdminStore } from '@/stores/useAdminSrore';
import { useUsersStore } from '@/stores/useUsersStore';
import { usePageStatusStore } from '@/stores/usePageStatusStore';
import type { User } from '@/type';

const userStore = useAdminStore();
const usersStore = useUsersStore();
const openPagesStore = usePageStatusStore();

const user = ref({
  ...usersStore.userCreateInitial(),
  email: 'test@mail.ru',
  tel: '89180000000',
});

const validationEmail = ref([
  (value: string) => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    re.test(String(value).toLowerCase());

    if (re.test(String(value).toLowerCase())) return true;
    return 'Введите корректный email';
  },
]);
</script>

<style scoped></style>
