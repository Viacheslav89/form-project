<template>
    <div class="main">
        <header class="main__header">
            <AppToolBar />
        </header>
        <main class="main__main">
            <AppAccount v-if="openPagesStore.openPages.isOpenAccaunt" />
            <AppUsers v-if="openPagesStore.openPages.isOpenUsers" />
            <AppInfo v-if="openPagesStore.openPages.isOpenInfo" />
            <AppMailing v-if="openPagesStore.openPages.isOpenMailing" />
        </main>
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import AppToolBar from './AppToolBar.vue';
import AppAccount from './AppAccount.vue';
import AppUsers from './../components/AppUsers.vue';
import AppInfo from './../components/AppInfo.vue';


import { usePageStatusStore } from './../stores/usePageStatusStore';
import AppMailing from './AppMailing.vue';


const openPagesStore = usePageStatusStore();

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
        min-height: 1000px;
    }
}

</style>