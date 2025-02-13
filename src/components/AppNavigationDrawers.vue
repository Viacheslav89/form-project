<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail width="300">
            <v-list>
                <v-list-item
                    prepend-avatar=""
                    prepend-icon="mdi-menu"
                    :subtitle="userStore.user.email"
                    :title="userStore.user.fullName"
                ></v-list-item>
            </v-list>


            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-account-multiple" title="Пользователи" value="myfiles"></v-list-item>

                <v-list-item prepend-icon="mdi-information " title="Информация" value="shared" color="gray"></v-list-item>

                <v-list-item prepend-icon="mdi-star" title="Рассылка" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer>


        <v-main style="min-height: 1500px">
            <AppMain />
        </v-main>


      </v-layout>
    </v-card>
</template>



<script setup lang="ts">
import AppMain from './../components/AppMain.vue';
import { useUserStore } from "./../stores/userStore";

const userStore = useUserStore();

console.log(userStore.user);


</script>