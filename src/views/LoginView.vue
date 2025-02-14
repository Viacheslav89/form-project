<template>
    <div class="form">
        <h1 class="form__title">Добро пожаловать</h1>
        <div class="form__control">
            <v-sheet class="mx-auto" width="500" padding="300">
            <v-form fast-fail @submit.prevent>
                <v-text-field
                v-model="userData.email"
                label="First name"
                ></v-text-field>
        
                <v-text-field
                v-model="userData.password"
                label="Last name"
                ></v-text-field>
        
                <v-btn class="mt-2" type="submit" color="#32afc0" block 
                @click="login(userData), handleLogin()">Войти</v-btn>
            </v-form>
            </v-sheet>
        </div>
        <p class="form__registration registration">
            Нет аккаунта?
            <a href="#" class="registration__link">Зарегистрироваться</a>
        </p>
    </div>
</template>
   
   
   
   
<script setup lang="ts">
import { VForm } from 'vuetify/components'
import { ref, watch, computed } from "vue"
import type {  UserFormData } from "./../type"
import { useAdminStore } from "./../stores/useAdminSrore"
import { useRouter } from "vue-router"
import { useLoginForm } from "./../composables/useLoginForm"


const userStore = useAdminStore();
const { errorMessage, login } = useLoginForm();
const router = useRouter();


const userData = ref<UserFormData>({
  email: "admin@axas.ru",
  password: "123123123",
});

const clearForm = () => {
  userData.value.email = "";
  userData.value.password = "";
};

const handleLogin = async () => {
  watch(
    () => userStore.user.isSuperuser,
    (newValue) => {
      if (newValue) {
        router.push({ name: 'Main' });
        clearForm();
      }
    }
  );
};



</script>

<style setup lang="scss">
.form {
    width: 500px;
    margin: 120px auto;

    &__title {
        text-align: left;
        font-size: 32px;
        margin-bottom: 20px;
        font-weight: 400;
        font-family: sans-serif;
    }

    &__control {
        margin-bottom: 25px;
    }
}

.registration {
    text-align: center;

    &__link {
        text-decoration: none;
        color: #32afc0;
    }
}
</style>

