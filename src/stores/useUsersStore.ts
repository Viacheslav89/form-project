import { ref } from "vue";
import { defineStore } from "pinia";
import api from "../plugins/api";
import type { User } from "../type";


export const useUsersStore = defineStore("users", () => {
    const users = ref<User[]>([]);

    const getUsers = async () => {
        const response = await api("users/");
        users.value = response.data;
        console.log("users", response.data.data);
    };

    return { users, getUsers };
});