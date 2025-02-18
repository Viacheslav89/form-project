<template>
  <div class="users">
    <h1 class="users__title">Пользователи</h1>

    <div
      class="users__button"
      v-if="!openPagesStore.openPages.isOpenCreateUserForm"
    >
      <v-btn
        class="mt-2"
        type="submit"
        color="grey"
        block
        @click="
          openPagesStore.openPages.isOpenCreateUserForm =
            !openPagesStore.openPages.isOpenCreateUserForm
        "
      >
        Создать пользователя
      </v-btn>
    </div>

    <AppUsersForm v-if="openPagesStore.openPages.isOpenCreateUserForm" />

    <div class="user__table">
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Имя</th>
            <th class="text-left">Email</th>
            <th class="text-left">Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersStore.usersList">
            <td class="users__td">{{ user.fullName }}</td>
            <td class="users__td">{{ user.email }}</td>
            <td class="users__td">{{ user.tel }}</td>

            <v-btn
              fab
              class="users__btn"
              @click="usersStore.deleteUser(user.id)"
              v-if="!user.isSuperuser"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useUsersStore } from '@/stores/useUsersStore';
import { usePageStatusStore } from '@/stores/usePageStatusStore';
import AppUsersForm from '@/components/pages/AppUserForm.vue';
import type { User } from './../../type';

const usersStore = useUsersStore();
const openPagesStore = usePageStatusStore();

onMounted(() => {
  usersStore.getUsers();
});
</script>

<style scoped lang="scss">
.users {
  padding: 0 50px;

  &__title {
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  &__button {
    width: 270px;
    margin: 0 auto 30px auto;
  }

  &__btn {
    margin-left: 10px;
    text-align: center;
  }
}
</style>
