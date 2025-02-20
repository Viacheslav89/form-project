<template>
  <div class="main">
    <v-layout>
      <AppNavigationDrawers />
      <v-main style="min-height: 1400px">
        <!-- <AppMain />
          -->
        <AppToolBar />

        <AppAccount v-if="openPagesStore.openPages.isOpenAccaunt" />
        <AppUsers v-if="openPagesStore.openPages.isOpenUsers" />
        <AppInfo v-if="openPagesStore.openPages.isOpenInfo" />
        <AppMailing v-if="openPagesStore.openPages.isOpenMailing" />

      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import AppMain from '@/components/layout/AppMain.vue';
import AppNavigationDrawers from '@/components/navigation/AppNavigationDrawers.vue';
import AppToolBar from '@/components/layout/AppToolBar.vue';
import { usePageStatusStore } from './../stores/usePageStatusStore';

import AppAccount from './../components/pages/AppAccount.vue';
import AppUsers from './../components/pages/AppUsers.vue';
import AppInfo from './../components/pages/AppInfo.vue';
import AppMailing from './../components/pages/AppMailing.vue';

const openPagesStore = usePageStatusStore();
</script>

<style setup lang="scss">
.main {
  min-height: 1200px;
}
</style>
