<template>
  <div class="main">
    <v-layout>
      <AppNavigationDrawers />
      <v-main style="min-height: 1400px">
        <AppToolBar />
        <slot><router-view /></slot>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import AppNavigationDrawers from '@/components/navigation/AppNavigationDrawers.vue';
import AppToolBar from '@/components/navigation/AppToolBar.vue';
</script>

<style setup lang="scss">
.main {
  min-height: 1200px;
}
</style>
