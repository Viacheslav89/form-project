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

      <div class="form__buttons">
        <v-btn
          class="form__button"
          type="submit"
          color="grey"
          @click="takeUser(user)"
          >{{ buttonTitle }}
        </v-btn>

        <v-btn
          class="form__button"
          type="submit"
          color="grey"
          @click="closeForm()"
          >Отмена</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useAdminStore } from '@/stores/useAdminSrore';
import { useUsersStore } from '@/stores/useUsersStore';
import { usePageStatusStore } from '@/stores/usePageStatusStore';
import type { User, UserCreate } from '@/type';

const usersStore = useUsersStore();
const openPagesStore = usePageStatusStore();

const buttonTitle = computed(() => {
  if (usersStore.currentUserId) {
    return 'Редактировать';
  }
  return 'Создать';
});

const userData = computed(() => {
  if (usersStore.currentUserId) {
    const index = usersStore.usersList.findIndex(
      (user) => user.id === usersStore.currentUserId
    );
    return {
      ...usersStore.userCreateInitial(),
      email: usersStore.usersList[index].email,
      tel: usersStore.usersList[index].tel,
      fullName: usersStore.usersList[index].fullName,
      password: '',
    };
  } else {
    return {
      ...usersStore.userCreateInitial(),
      email: 'test@mail.ru',
      tel: '89180000000',
    };
  }
});

const user = ref<UserCreate>({
  ...userData.value,
});


const closeForm = () => {
  openPagesStore.openPages.isOpenCreateUserForm = false;
  usersStore.currentUserId = null;
};


const takeUser = (updateUser: UserCreate) => {
  if (usersStore.currentUserId) {
    usersStore.editUser(usersStore.currentUserId, updateUser);
  } else {
    usersStore.createUser(updateUser);
  }

  closeForm();
};

const validationEmail = ref([
  (value: string) => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    re.test(String(value).toLowerCase());

    if (re.test(String(value).toLowerCase())) return true;
    return 'Введите корректный email';
  },
]);
</script>

<style scoped lang="scss">
.form {
  &__button {
    width: 49%;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>
