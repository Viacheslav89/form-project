<template>
  <div class="users" v-if="!openPagesStore.openPages.isOpenCreateUserForm">
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

    <div class="user__table">
      <v-table density="comfortable">
        <thead>
          <tr>
            <th class="text-left">Имя</th>
            <th class="text-left">Email</th>
            <th class="text-left">Телефон</th>
            <!-- <th class="text-left">Пароль</th> -->

          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersStore.usersList">
            <td class="users__td">{{ user.fullName }}</td>
            <td class="users__td">{{ user.email }}</td>
            <td class="users__td">{{ user.tel }}</td>
            <!-- <td class="users__td">{{ user.password }}</td> -->

            <div class="users__buttons">
              <v-btn
                fab
                icon
                size="x-small"
                class="users__btn"
                @click="openPagesStore.openPages.isOpenCreateUserForm = true, usersStore.setCurrentUser(user.id)"
                v-if="!user.isSuperuser"
              >
                <v-icon>mdi-square-edit-outline</v-icon>
              </v-btn>

              <v-btn
                fab
                icon
                size="x-small"
                class="users__btn"
                @click="usersStore.deleteUser(user.id)"
                v-if="!user.isSuperuser"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>

  <AppUsersForm v-if="openPagesStore.openPages.isOpenCreateUserForm" />
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
  usersStore.fetchDataUsers();
});
</script>

<style scoped lang="scss">
.users {
  padding: 0 50px 0 70px;

  &__title {
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  &__button {
    width: 270px;
    margin: 0 auto 50px auto;
  }

  &__buttons {
    margin-left: 30px;
  }

}
</style>
