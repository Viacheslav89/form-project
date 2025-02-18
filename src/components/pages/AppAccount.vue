<template>
  <div class="form">
    <div class="form__wrapper">
      <v-sheet class="mx-auto" width="500" padding="300">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            label="Email"
            class="form__input"
            v-model="user.email"
          ></v-text-field>

          <div class="form__fullname">
            <v-text-field
              label="Имя пользователя"
              class="form__input"
              v-model="user.fullName"
            ></v-text-field>
          </div>

          <!-- <VDateInput label="Дата рождения"></VDateInput> -->

          <v-btn
            class="mt-2"
            type="submit"
            color="grey"
            block
            @click="updateUser"
            >Сохранить
          </v-btn>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/components';
import { ref, watch } from 'vue';
import { useAdminStore } from '../../stores/useAdminSrore';

const userStore = useAdminStore();

const user = ref({
  ...userStore.user,
});

const updateUser = () => {
  userStore.user.fullName = user.value.fullName;
};

watch(
  () => userStore.user,
  (newValue) => {
    user.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.form {
  margin: 0 auto;
  padding-top: 100px;

  &__fullname {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
