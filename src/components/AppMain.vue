<template>
    <div class="main">
        <header class="main__header">
            <AppToolBar />
        </header>
        <main class="main__main">
            <AppAccount v-if="isOpenAccount" />
        </main>


    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import AppToolBar from './AppToolBar.vue';
import AppAccount from './AppAccount.vue';

const isOpenAccount = ref(false);

</script>



<style scoped lang="scss">
.main {

    &__header {
        padding: 0;
        margin: 0;
    }

    &__main {
        padding: 0;
        margin: 0;
        // background-color: rgb(184, 184, 184);
        min-height: 1000px;
    }
}

</style>