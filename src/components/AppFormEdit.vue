<template>
    <div class="form">
        <div class="form__wrapper">
        <v-sheet class="mx-auto" width="500" padding="300">
        <v-form fast-fail @submit.prevent>
            <v-text-field label="Email" class="form__input" v-model="user.email"></v-text-field>
            <div class="form__fullname">
                <v-text-field label="Имя" class="form__input"></v-text-field>
                <v-text-field label="Фамилия" class="form__input"></v-text-field>
            </div>

            <!-- <VDateInput label="Дата рождения"></VDateInput> -->

            <v-btn class="mt-2" type="submit" color="grey" block 
            @click="">Сохранить</v-btn>
        </v-form>
        </v-sheet>
        </div>
    </div>
</template>



<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/components';

import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const user = userStore.user;


</script>


<style scoped lang="scss">
.form {
    margin: 0 auto;
    padding-top: 100px;

    &__fullname {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
}


</style>